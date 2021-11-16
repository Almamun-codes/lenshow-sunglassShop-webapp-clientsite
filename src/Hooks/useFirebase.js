import { useEffect, useState } from "react";

import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import initializeAuthentication from "../Firebase/firebase.init";

initializeAuthentication();

const useFirebase = () => {
  // state change of user
  const [user, setuser] = useState({});
  // state change of error
  const [error, setError] = useState("");

  //implement email password autentication
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  // state change of loading
  const [isLoading, setIsLoading] = useState(true);

  const auth = getAuth();

  //email change handler
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  //password change handler
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  //name change handler
  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  //sign up handler with email
  const signUpWithPassword = () => {
    if (password.length < 6) {
      setError("Password must be at least 6 characters long.");
    } else {
      return createUserWithEmailAndPassword(auth, email, password);
    }
  };

  //sign in with password
  const signInWithPassWord = () => {
    setIsLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const updateName = () => {
    updateProfile(auth.currentUser, {
      displayName: name,
    })
      .then((result) => {
        setuser(result.user);
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  // create new google provider
  const GoogleProvider = new GoogleAuthProvider();

  //google sign in handler
  const signInWithGoogle = () => {
    setIsLoading(true);
    return signInWithPopup(auth, GoogleProvider);
  };

  // log out the user
  const logOut = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => {
        setuser({});
      })
      .finally(setIsLoading(false));
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setuser(user);
      } else {
        setuser({});
      }
      setIsLoading(false);
    });
  }, []);

  return {
    name,
    email,
    password,
    user,
    error,
    isLoading,
    setError,
    setuser,
    setIsLoading,
    signInWithGoogle,
    handleEmailChange,
    handlePasswordChange,
    handleNameChange,
    signInWithPassWord,
    signUpWithPassword,
    updateName,
    logOut,
  };
};

export default useFirebase;
