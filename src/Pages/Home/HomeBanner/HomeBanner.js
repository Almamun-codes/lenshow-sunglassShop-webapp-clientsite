import React from "react";

const HomeBanner = () => {
  return (
    <div className="container-fluid bg-navbar">
      <div className="col-12 Pt-5 position-relative">
        <img
          src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/tortoise-glasses-2-1572039628.jpg"
          alt="glasses"
          className="img-fluid"
        />
        <div className="position-absolute bottom-0 mb-4 ms-3 text-black translate-middle-y start-0">
          <h1>Find the best glass for your eyes!</h1>
          <p>We offer a wide range of design and cool glasses.</p>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
