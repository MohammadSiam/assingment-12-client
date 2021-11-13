import React, { useEffect, useState } from 'react';
import Review from '../Review/Review';


const Reviews = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('https://whispering-shore-11998.herokuapp.com/rating')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])

    return (
        <div className="container" >
            <h2 style={{ textAlign: "center", marginBottom: "30px" }}>What Our Client Say's</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)" }}>
                {
                    reviews.map(review => <Review
                        key={review._id}
                        review={review}

                    ></Review>)
                }
            </div>
        </div>
    );
};

export default Reviews;