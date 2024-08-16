import { Link } from "react-router-dom";
import GoogleLogo from "../../../assets/images/google-logo-9827.png";
import "./LoginForm.css";


function LoginForm(){
    return(
        <> 
            <div className="login-form-container">
                <div className="native-login-box">
                    <form action="POST">
                        <div className="input">
                            <label htmlFor="">Login</label>
                            <input className="text-input" placeholder="youremail@email.com" type="email" name="" id="" required />
                        </div>
                        <div className="input">
                            <label htmlFor="">Password</label>
                            <input className="text-input" placeholder="password" type="password" name="" id="" required />
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