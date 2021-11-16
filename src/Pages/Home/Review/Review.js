import React, { useEffect, useState } from "react";
import Rating from "react-rating";

const Review = () => {
  const [reviews, setReviews] = useState([]);
  // get all reviews
  useEffect(() => {
    fetch("https://mighty-fjord-00429.herokuapp.com/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <div className="text-center">
      <div className="bg-banner-3"></div>
      <div className="bg-banner-top">
        <h1 className="text-white">People think</h1>
        <p className="text-white">total {reviews.length} reviews</p>
        <div className="container d-flex flex-wrap">
          {reviews.map((review) => (
            <div className="col-sm-12 col-lg-3 my-2">
              <div className="h-100 m-2 text-start rounded bg-light">
                <div className="shadow py-4 p-2 h-100">
                  <h4>{review.giver}</h4>
                  <span>{review.giverEmail}</span>
                  <br />
                  <Rating
                    emptySymbol="far fa-star"
                    className="text-warning"
                    initialRating={review.rating}
                    readonly
                    fullSymbol="fas fa-star"
                  />
                  <br />
                  <p className="ms-2 border-start bg-white border-2 p-2 ps-2">
                    {review.reviewText}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Review;
