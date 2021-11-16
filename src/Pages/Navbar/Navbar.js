import React from "react";
import { NavLink } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";

const Navbar = () => {
  const { user, logOut } = useAuth();
  console.log(user);

  const handlelogout = () => {
    logOut();
  };
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-navbar">
        <div className="container">
          <NavLink className="navbar-brand" to="/home">
            <div className="rounded bg-light">
              <h1 className="web-color px-2">LenShow</h1>
            </div>
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink className="nav-link" aria-current="page" to="/home">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/explore">
                  explore
                </NavLink>
              </li>

              {user.email ? (
                <span className="d-lg-flex">
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/dashboard">
                      Dashboard
                    </NavLink>
                  </li>
                </span>
              ) : (
                ""
              )}
            </ul>
          </div>
          {user.email ? (
            <div className="d-flex">
              {console.log(user)}
              <h5 className="mt-2">Signed in as: {user.displayName}</h5>
              <button onClick={handlelogout} className="btn btn-light ms-2">
                SignOut
              </button>
            </div>
          ) : (
            <div>
              <NavLink className="text-decoration-none" to="/login">
                <div className="btn btn-outline-secondary me-2 text-white">
                  LogIN
                </div>
              </NavLink>
              <NavLink className="text-decoration-none" to="/register">
                <div className="btn btn-outline-secondary me-2 text-white">
                  Register
                </div>
              </NavLink>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
