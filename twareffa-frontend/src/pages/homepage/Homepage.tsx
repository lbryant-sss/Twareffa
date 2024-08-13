import "./Homepage.css";
import Navbar from "../../components/navigation/Navbar";
import Overlay from "../../components/navigation/Overlay";


function Homepage(){
    return(
        <>
            <section>
                <Overlay />
                <Navbar />
                <h1>TWAREFFA</h1>
            </section>
        </>
    )
}

export default Homepage;