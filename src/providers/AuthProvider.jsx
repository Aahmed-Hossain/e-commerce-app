"use client"
import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import axios from "axios";
import app from "@/firebase/firebase.config";

export const AuthContext = createContext();
const auth = getAuth(app)
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            const lodggedUser = {email: currentUser?.email}
            const userEmail = currentUser?.email || user?.email;
            setUser(currentUser);
            setLoading(false);
            // if(currentUser){
            //     axios.post('http://localhost:5000/jwt',lodggedUser, {withCredentials:true}).then(res => {console.log("token response" ,res.data);})
            // }
            // else{
            //     axios.post(`http://localhost:5000/logout`,userEmail,{withCredentials:true}).then(res=>{console.log(res.data);})
            // }
        });
        return () => {
            return unsubscribe();
        }
    }, [user?.email])

    const authInfo = {
        user,
        loading,
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