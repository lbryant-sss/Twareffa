import "./Homepage.css";
import Navbar from "../../components/navigation/Navbar";
import Overlay from "../../components/navigation/Overlay";
import Joblist from "../../components/jobs/Joblist";


function Homepage() {
    return (
        <>
            <section>
                <Overlay />
                <div className="home-content-wrapper">
                    <div className="nav-wrapper">
                        <Navbar />
                    </div> 
                    <div className="middle-wrapper">
                        <div className="joblist">
                            <Joblist />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Homepage;