import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import ShowReviews from '../ShowReviews/ShowReviews';

const ShowReview = (props) => {
    const [user] = useAuthState(auth);
    const { email, description, rating } = props.review;
    console.log(email);
    return (

        <div className="grid grid-cols-1 sm:grid-cols-3 justify-items-center mx-40 mt-8 mb-12 gap-3 p-8">
            <div className="card w-64 bg-base-100 shadow-xl">
                <div className="card-body items-center text-center">
                    <h2 className="card-title mx-4 text-2xl">{user.displayName}</h2>
                        <p className='text-gray-600 font-bold'>Rating: {rating}</p>
                        <p className='text-orange-600 font-bold'>"{description}"</p>
                </div>
            </div>

        </div>
    );
};

export default ShowReview;