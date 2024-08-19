
import "../login/LoginForm.css";


function ResetPasswordForm(){
    return(
        <> 
            <div className="login-form-container">
                <div className="native-login-box">
                    <form action="POST">
                        <div className="input">
                            <label htmlFor="">Create new password</label>
                            <input className="text-input" placeholder="new password" type="email" name="" id="" required />
                        </div>
                        <div className="input">
                            <label htmlFor="">Confirm Password</label>
                            <input className="text-input" placeholder="confirm password" type="password" name="" id="" required />
                        </div>
                        <div className="submit-button">
                            <input type="submit" value="Reset Password" />
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default ResetPasswordForm;