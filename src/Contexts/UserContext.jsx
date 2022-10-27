import React, { useEffect, useState } from "react";
import AuthContext from "./Context";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
  onAuthStateChanged,
  signOut,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  GithubAuthProvider,
} from "firebase/auth";
import app from "../Firebase/Firebase.init";

const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const gitProvider = new GithubAuthProvider();

const UserContext = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const singInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const singOutUser = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {});
    setLoading(true);
  };

  const updateUser = (name, photoURL) => {
    updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photoURL,
    })
      .then(() => {})
      .catch((error) => {});
  };
  const googleLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, provider);
  };
  
  const gitLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, gitProvider);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (userinfo) => {
      setUser(userinfo);
      setLoading(false);
    });
    return () => {
      unSubscribe();
    };
  }, []);

  return (
    <AuthContext.Provider
      value={{
        createUser,
        googleLogin,
        updateUser,
        user,
        singOutUser,
        singInUser,
        loading,
        gitLogin
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default UserContext;
