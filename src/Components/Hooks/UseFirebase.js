import { getAuth, signInWithPopup, GoogleAuthProvider,signOut,onAuthStateChanged } from "firebase/auth";
import {useState,useEffect} from 'react';
import initializeAuthentication from "../Firebase/firebase.init";


initializeAuthentication();

const UseFirebase=()=>{
    const [user,setUser]=useState({});
    const [isLoading,setIsloading]=useState(true);

    const googleProvider=new GoogleAuthProvider();
    const auth=getAuth();

    const signInWithGoogle=()=>{
        setIsloading(true)
        return signInWithPopup(auth,googleProvider)
    }

    const logOut=()=>{
        setIsloading(true)
        signOut(auth)
        .then(()=>{
            setUser()
        })
        .finally(()=>{
            setIsloading(false)
        })
    }

    useEffect(()=>{
        onAuthStateChanged(auth,user=>{
            if(user){
                setUser(user)
            }
            else{
                setUser({})
            }
            setIsloading(false)
        });
    },[auth])

    return(
        {
            signInWithGoogle,
            user,
            isLoading,
            logOut,
            setUser,
            setIsloading
        }
    );
};

export default UseFirebase;
