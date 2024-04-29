
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/Firebase.config";

export const AuthContext = createContext(null)
const googleProvider = new GoogleAuthProvider()
const gitHubProvider = new GithubAuthProvider()

const AuthProvider = ({children}) => {
    const [user, setUser]= useState(null)
    console.log(user);

    const [loading, setLoading]= useState(true)

    const createUser = (email, password)=>{
      setLoading(true)
      return createUserWithEmailAndPassword(auth, email, password)
 }

//  update user

    const updateUserProfile =(name, image)=>{
     return updateProfile(auth.currentUser, {
        displayName: name,
         photoURL: image
      })
    }
        // sign in user
        const signInUser = (email, password)=>{
          setLoading(true)
          return  signInWithEmailAndPassword(auth, email, password)
        }

    //   google login
    const googleLogin = ()=>{
      setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }
    // github
    const githubLogin = ()=>{
      setLoading(true)
        return signInWithPopup(auth, gitHubProvider)
    }
    // log out
    const logOut = ()=>{
      setLoading(true)
        setUser(null)
        signOut(auth)
    }
    // observer
   useEffect(()=>{
   const unSubscribe =  onAuthStateChanged(auth, currentUser => {
        if (currentUser) {
          setUser(currentUser)
          setLoading(false)
        } 
      });
      return ()=>{
        unSubscribe()
        //  setLoading(false)
      }
   },[])
   console.log(user);
     const allValues = 
   {createUser,
    signInUser,
    googleLogin,
    githubLogin,
    logOut,
    updateUserProfile,
    user,
    loading,
}
    return (
        <AuthContext.Provider value={allValues}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;