import React, { useState } from "react";
import useAuth from "../../../Hooks/useAuth";

const AddReview = () => {
  const { user } = useAuth();
  const [review, setReview] = useState("");
  const [rating, setRating] = useState();
  const handleOnBlur = (e) => {
    setReview(e.target.value);
  };

  const handleRatingChange = (e) => {
    setRating(e.target.value);
  };

  const reviewDetails = {
    giver: user.displayName,
    giverEmail: user.email,
    giverIMG: user.img,
    reviewText: review,
    rating: rating,
  };

  const handleAddReview = () => {
    if (review.length >= 10) {
      fetch("https://mighty-fjord-00429.herokuapp.com/add-review", {
        method: "post",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(reviewDetails),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            alert("Review Added successfully");
          }
        });
    } else {
      alert("Please write at least 10 letters");
    }
  };
  return (
    <div className="mt-2 m-5">
      <div className="p-3 rounded shadow">
        <h1 className="text-start  mb-3 text-white">Share your Experience!</h1>
        <textarea
          onBlur={handleOnBlur}
          name="review"
          rows="13"
          className="w-100"
        ></textarea>
        <h5 className="text-start">Rating</h5>
        <input className="w-100" type="number" onBlur={handleRatingChange} />
        <br />
        <br />
        <button className="btn bg-navbar text-white" onClick={handleAddReview}>
          Add Review
        </button>
      </div>
    </div>
  );
};

export default AddReview;
