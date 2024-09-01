import "./WalletHome.css";
import { Link } from "react-router-dom";
function WalletLanding(){
    return(
        <>
            <section className="wallet-landing-page">
                <div className="wallet-wrapper">
                    <div className="wallet-header">
                        <div className="wallet-logo">
                            <span className="twareffa-logo">tw</span>
                            <span className="wallet-logo-text">twareffa wallet</span>
                        </div>
                    </div>
                    <div className="wallet-temporary-content">
                        <Link className="home-button" to="/Twareffa">Go back home</Link>
                        <span>Get paid directly on twareffa</span>
                        <span>Free transactions, safe and secure cash transfer.</span>
                        <span>Coming soon!</span>
                    </div>
                </div>
            </section>
        </>
    )
}

function WalletHome(){
    return(
        <>
            <WalletLanding />
        </>
    )
}

export default WalletHome;