'use client'

import { auth } from "@/lib/firebase";
import { onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { useRouter } from "next/navigation";
import { createContext, useContext, useEffect, useState } from "react"
import { getFirebaseAuthErrorMessage } from "@/lib/firebaseErrors";
import { toast } from "react-toastify";

const AuthContext = createContext();

export function AuthProvider({children}) {
    const [user, setUser] = useState(null);
    const router = useRouter();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });

        return () => unsubscribe();
    });
    
    const login = async (email, password) => {
        try {
              await signInWithEmailAndPassword(auth, email, password);
              toast.success("Login berhasil");
              router.push('/dashboard');
              
        } catch (err) {
            
            const message = getFirebaseAuthErrorMessage(err.code);
            toast.error(message);
        } 
    }

    const logout = async () => {
        await signOut(auth);
        toast.success('Logout berhasil')
        router.push('/')
    }

    const forgotPassword = async (email) => {
        try {
            await sendPasswordResetEmail(auth, email);
            toast.success("Email Reset Password telah terkirim!");
        } catch (err) {
            const message = getFirebaseAuthErrorMessage(err.code);
            toast.error(message);
        }
    }

    return (
        <AuthContext.Provider value={{ user, login, logout, forgotPassword }}>
            {children}
        </AuthContext.Provider>
    );
}


export function useAuth() {
    return useContext(AuthContext);
}