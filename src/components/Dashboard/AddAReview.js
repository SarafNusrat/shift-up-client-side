import React, { useRef } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import img from "../../images/Banner/port-img3-1.jpg";

const AddAReview = () => {
    const [user] = useAuthState(auth);
    const ratingRef = useRef('');
    const descriptionRef = useRef('');

    const handleAddReview = (event) => {
          event.preventDefault();
          const email = user.email;
          const rating = ratingRef.current.value;
          const description = descriptionRef.current.value;
         
         
          const review = { email, rating, description};
          

          // post data to server 
          fetch('https://warm-sierra-55591.herokuapp.com/reviews', {
              method: 'POST', 
              headers: {
                  'Content-Type': 'application/json',
              },
              body: JSON.stringify(review),
          })
          .then(res => res.json())
          .then(data => {
              alert('New review added successfully!!');
              event.target.reset();
          })
    }

    return (
        <div>
           <h4 className="font-bold bg-orange-200 mt-16 text-center sm:text-4xl mb-12 text-3xl pt-2 text-gray-700">ADD A REVIEW</h4>
           <div className="rounded grid grid-cols-1 sm:grid-cols-2 gap-2 ml-16">
                <div>
                    <img className=" align-middle w-full mt-24 mr-2" src={img} alt="" />
                </div>
                <form onSubmit={handleAddReview}>
                    
                <div className="hero min-h-screen bg-base-100 hero-content flex-col lg:flex-row-reverse">
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Your Email Address</span>
                                </label>
                                <input type="text" name="email" disabled value = {user?.email} placeholder="Enter your email address" className="input input-bordered" required/>
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Your Rating</span>
                                </label>
                                <input ref={ratingRef} type="number" name="name" placeholder="Enter a number from 1 to 5" className="input input-bordered" required/>
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Description</span>
                                </label>
                                <input ref={descriptionRef} type="text" name="description" placeholder="Write your review" className="input input-bordered" required/>
                            </div>

                            <div className="form-control mt-6">
                                <button className="btn btn-warning">ADD REVIEW</button>
                            </div>
                        </div>
                    </div>
                </div>
                 
                </form>

            </div> 
        </div>
    );
};

export default AddAReview;