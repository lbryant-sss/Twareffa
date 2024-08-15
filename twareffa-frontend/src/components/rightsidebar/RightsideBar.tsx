import { Link } from "react-router-dom";
import "./RightsideBar.css";

function RightSideBar(){

    return (
        <>
            <div className="sidebar">
                <div className="auth-links">
                    <ul className="auth-menu">
                        <li>
                            <Link to="/Twareffa/login">Login</Link>
                        </li>
                        <li>
                            <Link to="/Twareffa/signup">Create account</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default RightSideBar;