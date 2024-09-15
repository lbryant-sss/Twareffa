
import Navbar from '../../../components/navigation/Navbar';
import RightSideBar from '../../../components/rightsidebar/RightsideBar';


function PrivateUserprofile(){
    return (
        <section>
            <div className='home-content-wrapper'>
                <div className="nav-wrapper">
                    <Navbar />
                </div>
                <div className="auth-wrapper middle-wrapper">
                    <div className="profile">
                        <h2>
                            This is where the user profile info goes that they only can see
                        </h2>
                    </div>
                </div>
                <div className="rightsidebar other-content-right">
                    <RightSideBar />
                </div>
            </div>
        </section>
    );
};

export default PrivateUserprofile;