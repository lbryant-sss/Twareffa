import api from "../../services/api";
import { Navigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import { useState, useEffect } from "react";
import { REFRESH_TOKEN, ACCESS_TOKEN } from "../../services/constants";
import {ReactNode} from "react";

interface ProtectedRoute {
    children: ReactNode;
}

type AuthState = boolean | null;

function ProtectedRoute({children}: ProtectedRoute){
    const [isAuthorized, setIsAuthorized] = useState<AuthState>(null)
    
    useEffect(() =>{
        auth().catch(() => setIsAuthorized(false))
    },[])

    const refreshToken = async () => {
        const refreshToken = localStorage.getItem(REFRESH_TOKEN)
        try{
            const res = await api.post("api/token/refresh/", {refresh: refreshToken });
            if(res.status === 200) {
                localStorage.setItem(ACCESS_TOKEN, res.data.access)
                setIsAuthorized(true)
            } else{
                setIsAuthorized(false)
            }
        } catch(error) {
            console.log(error)
            setIsAuthorized(false)
        }
    }

    interface DecodedToken {
        exp?: number;
    }
    const auth = async () => {
        const token = localStorage.getItem(ACCESS_TOKEN)

        if(!token) {
            setIsAuthorized(false)
            return;
        }

        try {
            const decoded = jwtDecode<DecodedToken>(token);
            const tokenExpiration = decoded.exp

            if (tokenExpiration === undefined) {
                console.error('Token expiration is undefined');
                setIsAuthorized(false);
                return;
            }
            const now = Date.now() / 1000

            if(tokenExpiration < now) {
                await refreshToken()
            } else {
                setIsAuthorized(true)
            }
        } catch (error) {
            console.error('Error decoding token: ', error);
            setIsAuthorized(false);
        }
            
    }

    if(isAuthorized === null){
        return <div>Loading...</div>
    }
    return isAuthorized ? children : <Navigate to="login" />
}

export default ProtectedRoute;