import Navbar from "../../../components/navigation/Navbar"
import RegisterForm from "../../../components/forms/register/RegisterForm"
import RightSideBar from "../../../components/rightsidebar/RightsideBar"

function Register(){

    return(
        <>
            <section>
            <div className='home-content-wrapper'>
                <div className="nav-wrapper">
                    <Navbar />
                </div>
                <div className="auth-wrapper middle-wrapper">
                    <div className="auth-box">
                        <RegisterForm route="/auth/api/user/register" method="register"/>
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

export default Register;