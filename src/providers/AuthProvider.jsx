import React, { useEffect, useState } from "react";
import { AuthContex } from "./AuthContex";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { auth } from "../firebase/firebase.config";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const signWithGoogle = new GoogleAuthProvider();

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const loginUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const logOutUser = () => {
    setLoading(true);
    return signOut(auth);
  };
  const signwithgoogle = () => {
    return signInWithPopup(auth, signWithGoogle);
  };

  const updateProfileUser = (profileUpdate) => {
    return updateProfile(auth.currentUser, profileUpdate);
  };
  useEffect(() => {
    const unsiscrip = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
      console.log(currentUser);
    });
    return () => {
      unsiscrip();
    };
  }, []);
  const authInfo = {
    user,
    loading,
    setLoading,
    signwithgoogle,
    setUser,
    createUser,
    loginUser,
    logOutUser,
    updateProfileUser,
  };
  return <AuthContex value={authInfo}>{children}</AuthContex>;
};

export default AuthProvider;
