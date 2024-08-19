import Navbar from '../../../components/navigation/Navbar';
import RightSideBar from '../../../components/rightsidebar/RightsideBar';
import "../../../pages/auth/signin/Signin.css";
import "./JobDetail.css";
function JobDetailComponent(){
    return(
        <>
            <p>Details</p>
        </>
    )
}

function JobDetail() {
    return (
        <section>
            <div className='home-content-wrapper'>
                <div className="nav-wrapper">
                    <Navbar />
                </div>
                <div className="auth-wrapper middle-wrapper job-detail-container">
                    <div className="job-detail-box">
                        <JobDetailComponent />
                    </div>
                </div>
                <div className="rightsidebar other-content-right">
                    <RightSideBar />
                </div>
            </div>
        </section>
    );
};

export default JobDetail;
