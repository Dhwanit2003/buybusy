import React, {createContext , useContext ,useState , useEffect} from 'react'

//Firebase

import{
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  sendPasswordResetEmail,
  signInWithPopup,
} from "firebase/auth";

import {firebaseAuth , googleProvider} from "../config/firebaseinit"

const AuthContext =  createContext();

export const AuthProvider = (props) => {
  const [currentUser , setCurrentUser] = useState();
  const [isAdmin , setIsAdmin] = useState(false);
  const [loading , setLoading] = useState(false);

  //Register with Email and Password
  const registerWithEmailAndPassword = async(email , password ) => {
    return createUserWithEmailAndPassword(firebaseAuth , email,password);
  };
  
  //log in with email and password
  const logInWithEmailAndPassword = async (email,password) => {
    return signInWithEmailAndPassword(firebaseAuth,email,password);
  };

  //sign in with google
  const signInWithGoogle = async() => {
    return signInWithPopup(firebaseAuth,googleProvider);
  }

  //reset password
  const resetPassword = async(email) => {
    const auth = getAuth();
    return sendPasswordResetEmail(auth,email);
  }

  //logout
  const logout = () => {
    return signOut(firebaseAuth);
  };

  useEffect(() => {
    setLoading(true);
    const unsubscribe = firebaseAuth.onAuthStateChanged(user => {
      setCurrentUser(user)

      //If user is Admin
      if(user && (user.email === 'dhwanitrawat10@gmail.com')){
        setIsAdmin(true);
      }
      setLoading(false)
    })

    return unsubscribe
  } , [])

  return (
    <AuthContext.Provider
    value = {{
      registerWithEmailAndPassword,
      logInWithEmailAndPassword,
      logout,
      currentUser,
      resetPassword,
      isAdmin,
      signInWithGoogle
    }}
    >
       {!loading && props.children}
    </AuthContext.Provider>
  )

}

export const useAuth = () => useContext(AuthContext);