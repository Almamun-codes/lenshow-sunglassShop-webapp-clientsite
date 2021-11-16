import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <hr />
      <div className="container-fluid bg-footer pt-3">
        <div className="row">
          <div className="col-sm-12 col-lg-3 mt-5">
            <div className="rounded bg-navbar mx-5">
              <h1 className="text-center">LenShow</h1>
            </div>
          </div>
          <div className="col-lg-3"></div>

          <div className="col-sm-6 col-lg-3 ps-3 text-start">
            <h3>Quick Links</h3>
            <p>
              <NavLink className="text-decoration-none text-dark" to="/explore">
                Explore More
              </NavLink>
            </p>

            <p>
              <NavLink
                className="text-decoration-none text-dark"
                to="/dashboard"
              >
                Dashboard
              </NavLink>
            </p>
          </div>
          <div className="col-sm-6 col-lg-3 text-end pe-5">
            <h3>Address</h3>
            <p>343,street name, city, country</p>
            <p>phone: 0123456789</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
