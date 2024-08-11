import "./Homepage.css";
import Navbar from "../../components/navigation/Navbar";
import Overlay from "../../components/navigation/Overlay";


function Homepage(){
    return(
        <>
            <section>
                <Overlay />
                <Navbar />
            </section>
        </>
    )
}

export default Homepage;