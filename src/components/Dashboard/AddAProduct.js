import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const AddAProduct = () => {

    const [user] = useAuthState(auth);
    
    const handleAddProduct = (event) => {
          event.preventDefault();
          const name = event.target.name.value;
          const img = event.target.img.value;
          const description = event.target.description.value;
          const price_per_unit = event.target.price.value;
          const min_order_quantity = event.target.minquantity.value;
          const available_quantity = event.target.avaquantity.value;

          const item = {name, img, description, price_per_unit, min_order_quantity, available_quantity}; 

      // post data to server 
      fetch('https://warm-sierra-55591.herokuapp.com/parts', {
        method: 'POST', 
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(item),
    })
    .then(res => res.json())
    .then(data => {
        alert('New product added successfully!!');
        event.target.reset();
    })
}

    return (
        <div>
            <h2>Add a product</h2>
            <div className="rounded grid grid-cols-1 sm:grid-cols-2 gap-2 ml-16">
                <form onSubmit={handleAddProduct}>
                    
                <div className="hero min-h-screen bg-base-100 hero-content flex-col lg:flex-row-reverse">
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Your Email Address</span>
                                </label>
                                <input type="text" name="email" placeholder="Enter your email address" className="input input-bordered" required/>
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Item Name</span>
                                </label>
                                <input type="text" name="name" placeholder="Enter a valid name" className="input input-bordered" required/>
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Image</span>
                                </label>
                                <input type="text" name="img" placeholder="please enter an image url" className="input input-bordered" required/>
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Description</span>
                                </label>
                                <input type="text" name="description" placeholder="Enter a short description for the product" className="input input-bordered" required/>
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Price Per unit</span>
                                </label>
                                <input type="text" name="price" placeholder="Enter price per unit" className="input input-bordered" required/>
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Minimum Order Quantity</span>
                                </label>
                                <input type="text" name="minquantity" placeholder="Enter minimum quantity for order" className="input input-bordered" required/>
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Available Quantity</span>
                                </label>
                                <input type="text" name="avaquantity" placeholder="Enter available quantity" className="input input-bordered" required/>
                            </div>

                            <div className="form-control mt-6">
                                <button className="btn btn-warning">ADD PRODUCT</button>
                            </div>
                        </div>
                    </div>
                </div>
                 
                </form>

            </div> 
        </div>
    );
};

export default AddAProduct;



