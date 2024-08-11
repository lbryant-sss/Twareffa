import "./Navbar.css";
import { Link } from "react-router-dom";
import Menubar from "../../assets/icons/menubar.svg";
import CloseMenuIcon from "../../assets/icons/close-menu.svg";

import { useState } from "react";

function Navbar(){

    const [showNav, setShowNav] = useState(false);

    const toggleNav = () =>{
        setShowNav(prevState => !prevState);
    }

    return(
        <>
            <div className="navbar-wrapper">
                <header>
                    <div className="logo">
                        <span>
                            <Link to="/Twareffa">twareffa</Link>
                        </span>
                    </div>
                    <div className="menu-icon">
                        <img src={showNav ? CloseMenuIcon : Menubar} alt="Menubar" onClick={toggleNav} />
                    </div>
                    <nav className={`slider ${showNav ? "show" : "hide"} `}>
                        <div className="menu">
                                <div className="menu-list">
                                    <ul className="menu-items">
                                        <li>
                                            <Link to="/Twareffa">Home</Link>
                                        </li>
                                        <li>
                                            <Link to="/Twareffa">Find a Job</Link>
                                        </li>
                                        <li>
                                            <Link to="/Twareffa">Post</Link>
                                        </li>
                                    </ul>
                                </div>
                                <div className="auth-links-div">
                                    <ul className="menu-items">
                                        <li>
                                            <Link to="/Twareffa/login">Login</Link>
                                        </li>
                                        <li>
                                            <Link to="/Twareffa/signup">Create account</Link>
                                        </li>
                                    </ul>
                            </div>
                        </div>
                    </nav>
                </header>
            </div>
        </>
    )
}

export default Navbar;