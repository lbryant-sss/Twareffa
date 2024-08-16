import { Link } from "react-router-dom";
import GoogleLogo from "../../../assets/images/google-logo-9827.png";
import "../login/LoginForm.css";


function RegisterForm(){
    return(
        <> 
            <div className="login-form-container">
                <div className="native-login-box">
                    <form action="POST">
                        <div className="input">
                            <label htmlFor="">Create Account</label>
                            <input className="text-input" placeholder="youremail@email.com" type="email" name="" id="" required />
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
                            <input className="text-input" placeholder="password" type="password" name="" id="" required />
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