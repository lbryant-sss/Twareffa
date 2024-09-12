import { Link } from "react-router-dom";
import GoogleLogo from "../../../assets/images/google-logo-9827.png";
import "../login/LoginForm.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../../services/api";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../../../services/constants";

interface RegisterFormProps {
    route: string;
    method: string;
}

function RegisterForm({route, method}: RegisterFormProps){
    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false);
    const navigate = useNavigate();

    const isLogin = method === "register";

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
            <div className="login-form-container">
                <div className="native-login-box">
                    <form onSubmit={handleSubmit}>
                        <div className="input">
                            <label htmlFor="">Create Account</label>
                            <input 
                                className="text-input" 
                                placeholder="username" 
                                type="text" 
                                name="username" 
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                required />
                        </div>
                        <div className="input checkbox">
                            <label htmlFor="">Are you:</label>
                            <div className="sex">
                                <label htmlFor="">Male</label>
                                <input type="radio" name="sex" value="Male" id=""  required/>
                                <label htmlFor="">Female</label>
                                <input type="radio" name="sex" value="Male" id="" />
                            </div>
                            </div> <br />
                        <div className="input">
                            <label htmlFor="">Birthday</label>
                            <input className="text-input" placeholder="password" type="date" name="" id="" required />
                        </div> <br />
                        <div className="input">
                            <label htmlFor="">Choose Password</label>
                            <input 
                                className="text-input" 
                                placeholder="password" 
                                type="password" 
                                name="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required />
                        </div>
                        <div className="submit-button">
                            <input type="submit" value="Register" />
                        </div>
                    </form>
                </div>
                <div className="google-login-box">
                    <Link to="/">
                        <span>Signup with Google</span>
                        <img src={GoogleLogo} alt="twareffa login" />
                    </Link>
                </div>
                <div className="account-recovery">
                    <Link to='/create-account'>
                        <span>Already have an account?</span><br />
                        <span>Login instead</span>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default RegisterForm;