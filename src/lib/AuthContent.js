import React, { createContext, useContext, useState, useEffect } from 'react'
import firebase from '../lib/firebase'

export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState({ isAuth: false })
    useEffect(() => {
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                setAuth({
                    isAuth: true,
                    uid: user.uid,
                    email: user.email,
                    name: user.displayName || user.email,
                    emailVerified: user.emailVerified
                })
            } else {
                setAuth({ isAuth: false })
            }
        });
    }, [])
    return(
        <AuthContext.Provider value= {{ auth }}>
            { children}
        </AuthContext.Provider>
    )
}

// custom hook
export const useAuth = () => {
    return useContext(AuthContext)
}