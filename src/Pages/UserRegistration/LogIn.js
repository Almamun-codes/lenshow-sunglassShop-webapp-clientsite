import React from "react";
import { useHistory, useLocation } from "react-router";
import { Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";

const LogIn = () => {
  const {
    signInWithGoogle,
    error,
    handlePasswordChange,
    handleEmailChange,
    signInWithPassWord,
    setuser,
    setError,
    setIsLoading,
  } = useAuth();

  const location = useLocation();
  const history = useHistory();
  const url = location.state?.from || "/home";

  const googleSignIn = (e) => {
    signInWithGoogle()
      .then((result) => {
        const user = result.user;
        console.log(user);
        setuser(user);
        history.push(url);
      })
      .catch((error) => {
        console.log(error.message);
        setError(error.message);
      })
      .finally(setIsLoading(false));
    e.preventDefault();
  };

  // sign in with password
  const passwordSignIn = () => {
    signInWithPassWord()
      .then((result) => {
        // Signed in
        const loggedInUser = result.user;
        setuser(loggedInUser);
        history.push(url);
        // ...
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  return (
    <div className="bg-white py-5 top-bg">
      <div className="container w-50 rounded shadow bg-color">
        <div className="py-5">
          <h2>Please login</h2>
          <form>
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">
                Email address
              </label>
              <input
                type="email"
                onBlur={handleEmailChange}
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                required
              />
            </div>
            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label">
                Password
              </label>
              <input
                type="password"
                class="form-control"
                onBlur={handlePasswordChange}
                required
                id="exampleInputPassword1"
              />
            </div>
            <p>
              <Link className="text-black" to="/register">
                New User?
              </Link>
            </p>

            <p className="text-danger">{error}</p>

            <div class="btn bg-navbar" onClick={passwordSignIn}>
              LogIn
            </div>

            <div class="btn bg-navbar mx-3" onClick={googleSignIn}>
              LogIn With Google
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
