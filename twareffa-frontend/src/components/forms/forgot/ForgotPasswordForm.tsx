import "../login/LoginForm.css";


function ForgotPasswordForm(){
    return(
        <> 
            <div className="login-form-container">
                <div className="native-login-box">
                    <form action="POST">
                        <div className="input">
                            <label htmlFor="">Enter your email</label>
                            <input className="text-input" placeholder="youremail@email.com" type="email" name="" id="" required />
                        </div>
                        <div className="submit-button">
                            <input type="submit" value="Send Password Reset Link" />
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default ForgotPasswordForm;