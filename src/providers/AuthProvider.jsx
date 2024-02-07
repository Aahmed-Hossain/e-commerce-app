"use client"
import { createContext, useState } from "react";
import { useRouter} from 'next/navigation';
import { toast } from 'react-toastify';

export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const router = useRouter();
   const logoutUser = () => {
        setLoading(true)
        setUser(null);
        localStorage.removeItem('token');
        router.push('/login');
        toast.success(`Log out successfully!`)
      }; 
    const authInfo = {
        user,
        loading,
        setUser,
        logoutUser
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;