import React, { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import { app } from "../Firebase/firebase.init";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [accessToken, setAccessToken] = useState(null);
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
  };

  const signInUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
  };

  const googleSign = () => {
    return signInWithPopup(auth, provider)
  };
  const updateUserInfo=(name,photo)=>{
    return updateProfile(auth.currentUser,{displayName:name,photoURL:photo})
  }
  const signOutUser =()=>{
    return signOut(auth)
  }
  useEffect(() => {
    onAuthStateChanged(auth, async(currentUser) => {
      setUser(currentUser);
      setLoading(false);
      if (currentUser) {
        const token = await currentUser.getIdToken(); 
        setAccessToken(token);
      } else {
        setAccessToken(null);
      }
    });
  });
console.log(user)
  const userInfo = {
    setUser,
    user,
    loading,
    setLoading,
    createUser,
    updateUserInfo,
    signInUser,
    googleSign,
    signOutUser,
    accessToken
  };

  return <AuthContext value={userInfo}>{children}</AuthContext>;
};

export default AuthProvider;
