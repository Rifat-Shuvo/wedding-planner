import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../firebase.config';
export const AuthContext = createContext(null)

const auth = getAuth(app)

const googleProvider = new GoogleAuthProvider()

const AuthProvider = ({children}) => {
const[user, setuser] = useState(null)
const [loading, setLoading] = useState(true)


const googleLogin = ()=>{
    setLoading(true)
   return signInWithPopup(auth,googleProvider)
}

const createUser = (email,password)=>{
    setLoading(true)
    return createUserWithEmailAndPassword(auth,email,password)
}

const signIn = (email,password) =>{
    setLoading(true)
    return signInWithEmailAndPassword(auth,email,password)
}

const logOut = ()=>{
    setLoading(true)
    return signOut(auth)
}

useEffect(()=>{
   const unSubscribe = onAuthStateChanged(auth, currentUser =>{
        console.log('user in the on auth state changed',currentUser);
        setuser(currentUser)
        setLoading(false)
    })
    return()=>{
        unSubscribe()
    }
} ,[])


    const authInfo = {
        user,
        loading,
        googleLogin,
        createUser,
        signIn,
        logOut
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;