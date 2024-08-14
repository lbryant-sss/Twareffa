import "./Homepage.css";
import Navbar from "../../components/navigation/Navbar";
import Overlay from "../../components/navigation/Overlay";


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
                        <ul>
                            <li>JKIA</li>
                        </ul>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Homepage;