import React from 'react';
import Navbar from '../../../components/navigation/Navbar';
import RightSideBar from '../../../components/rightsidebar/RightsideBar';
import "./Signin.css";
import LoginForm from '../../../components/forms/login/LoginForm';

const Signin: React.FC = () => {
    return (
        <section>
            <div className='home-content-wrapper'>
                <div className="nav-wrapper">
                    <Navbar />
                </div>
                <div className="auth-wrapper middle-wrapper">
                    <div className="auth-box">
                        <LoginForm route="auth/api/token/" method='login' />
                    </div>
                </div>
                <div className="rightsidebar other-content-right">
                    <RightSideBar />
                </div>
            </div>
        </section>
    );
};

export default Signin;
