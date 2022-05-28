import React, { useEffect, useState } from 'react';
import ShowReview from '../ShowReview/ShowReview';

const ShowReviews = () => {
    const [reviews, setReviews] = useState([]);

    useEffect( () => {
        fetch('http://localhost:5000/reviews')
        .then(res => res.json())
        .then(data => setReviews(data));
    });

    return (
        <div>
            <div>
            {
                reviews.map(review => <ShowReview
                    key = {review._id}
                    review = {review}
               ></ShowReview>)
            } 
            </div>
        </div>
    );
};

export default ShowReviews;