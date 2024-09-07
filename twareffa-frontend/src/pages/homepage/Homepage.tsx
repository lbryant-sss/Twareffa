import "./Homepage.css";
import Navbar from "../../components/navigation/Navbar";
import Overlay from "../../components/navigation/Overlay";
import Joblist from "../../components/jobs/Joblist";
import RightSideBar from "../../components/rightsidebar/RightsideBar";
import SearchBar from "../../components/searchbar/SearchBar";
function Homepage() {
    return (
        <>
            <section>
                <Overlay />
                <div className="home-content-wrapper">
                    <div className="search-bar">
                        <SearchBar />
                    </div>
                    <div className="nav-wrapper">
                        <Navbar />
                    </div> 
                    <div className="middle-wrapper">
                        <div className="joblist">
                            <Joblist />
                        </div>
                    </div>
                    <div className="other-content-right">
                        <RightSideBar />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Homepage;