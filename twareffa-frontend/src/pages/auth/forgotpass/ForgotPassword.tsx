import Navbar from '../../../components/navigation/Navbar';
import RightSideBar from '../../../components/rightsidebar/RightsideBar';
import "../signin/Signin.css";
import ForgotPasswordForm from '../../../components/forms/forgot/ForgotPasswordForm';

function ForgotPassword(){
    return(
        <>
        <section>
            <div className='home-content-wrapper'>
                <div className="nav-wrapper">
                    <Navbar />
                </div>
                <div className="auth-wrapper middle-wrapper">
                    <div className="auth-box">
                        <ForgotPasswordForm />
                    </div>
                </div>
                <div className="rightsidebar other-content-right">
                    <RightSideBar />
                </div>
            </div>
        </section>
        </>
    )
}

export default ForgotPassword;