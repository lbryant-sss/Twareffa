import { Link } from "react-router-dom";
import GoogleLogo from "../../../assets/images/google-logo-9827.png";
import "./LoginForm.css";
import { useState } from "react";
import api from "../../../services/api";
import { useNavigate } from "react-router-dom";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../../../services/constants";



interface LoginFormProps {
    route: string;
    method: string;
}

function LoginForm({route, method}: LoginFormProps){
    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false);
    const navigate = useNavigate();

    const isLogin = method === "login";

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        setLoading(true);
        e.preventDefault();

        try{
            const res = await api.post(route, {username, password});
            if (method === "login"){
                localStorage.setItem(ACCESS_TOKEN, res.data.access);
                localStorage.setItem(REFRESH_TOKEN, res.data.refresh);
                navigate("/Twareffa");
            } else {
                navigate("/Twareffa/login");
            }

        } catch (error){
            alert(error);
        } finally {
            setLoading(false);
        }
    }
 
    return(
        <> 
            <div className="all-form-container">
                <div className="form-box">
                    <form onSubmit={handleSubmit}>
                        <div className="input">
                            <label htmlFor="username">Login</label>
                            <input className="text-input" placeholder="username" type="text" name="username" id="" value={username} onChange={(e) => setUsername(e.target.value)} required />
                        </div>
                        <div className="input">
                            <label htmlFor="">Password</label>
                            <input className="text-input" placeholder="password" type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} id="" required />
                        </div>
                        <div className="submit-button">
                            <input type="submit" value="Login" />
                        </div>
                    </form>
                </div>
                <div className="google-login-box">
                    <Link to="/">
                        <span>Login with Google</span>
                        <img src={GoogleLogo} alt="twareffa login" />
                    </Link>
                </div>
                <div className="account-recovery">
                    <Link to='/Twareffa/forgot-password'>
                        <span>Forgot password</span>
                    </Link>
                    <Link to='/Twareffa/signup'>
                        <span>Create a new account</span>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default LoginForm;