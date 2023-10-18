import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, } from "firebase/auth";
import auth from "../Firebase/Firebase.config";


export const AuthContext=createContext(null)

const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null)
    const [loading,setLoading]=useState(true)
    const googleProvider=new GoogleAuthProvider()

    const createUser=(email,password)=>{

        return  createUserWithEmailAndPassword(auth,email,password)
    }

    const signUp=(email,password)=>{
      return  signInWithEmailAndPassword(auth,email,password)
    }

    const googleSignUp=()=>{
        return signInWithPopup(auth,googleProvider)
    }

    const logOut=()=>{
        return signOut(auth)
    }

    useEffect(()=>{
        const unSubscribe=onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser)
            setLoading(false)
     })

     return ()=>{
        return unSubscribe()
     }
    },[])



    const authInfo={
        createUser,
        signUp,
        user,
        loading,
        googleSignUp,
        logOut
    }
    return (
        <AuthContext.Provider value={authInfo}>
              {children}
        </AuthContext.Provider>
    );
};
AuthProvider.propTypes={
    children:PropTypes.node,
}
export default AuthProvider;