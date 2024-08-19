
import Navbar from '../../../components/navigation/Navbar';
import RightSideBar from '../../../components/rightsidebar/RightsideBar';
import "../signin/Signin.css";
import ResetPasswordForm from '../../../components/forms/reset/ResetPasswordForm';

function ResetPassword(){
    return (
        <section>
            <div className='home-content-wrapper'>
                <div className="nav-wrapper">
                    <Navbar />
                </div>
                <div className="auth-wrapper middle-wrapper">
                    <div className="auth-box">
                        <ResetPasswordForm />
                    </div>
                </div>
                <div className="rightsidebar other-content-right">
                    <RightSideBar />
                </div>
            </div>
        </section>
    );
};

export default ResetPassword;
