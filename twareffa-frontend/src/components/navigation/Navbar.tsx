import "./Navbar.css";
import { Link } from "react-router-dom";
import Menubar from "../../assets/icons/menubar.svg";
import CloseMenuIcon from "../../assets/icons/close-menu.svg";

import HomeIcon from "../../assets/icons/nav-icons/home.svg";
import DashboardIcon from "../../assets/icons/nav-icons/dashboard.svg";
import MessagesIcon from "../../assets/icons/nav-icons/messages.svg";
import NotificationsIcon from "../../assets/icons/nav-icons/notifications.svg";
import ProfileIcon from "../../assets/icons/nav-icons/profile.svg";
import SearchIcon from "../../assets/icons/nav-icons/search.svg";
import WalletIcon from "../../assets/icons/nav-icons/wallet.svg";
import WorkIcon from "../../assets/icons/nav-icons/work.svg";


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
                        <img src={showNav ? Menubar : Menubar} alt="Menubar" onClick={toggleNav} />
                    </div>
                    <nav className={`slider ${showNav ? "show" : "hide"} `}>
                        <div className="menu">
                                <div className="menu-list">
                                    <ul className={`menu-items ${showNav ? "show" :"hide"}`}>
                                        <li>
                                            <Link to="/Twareffa">
                                                <span>Home</span>
                                                <div className="icon">
                                                    <img src={HomeIcon} />
                                                </div>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/Twareffa">
                                                <span>Jobs</span>
                                                <div className="icon">
                                                    <img src={WorkIcon} />
                                                </div>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/Twareffa">
                                                <span>Messages</span>
                                                <div className="icon">
                                                    <img src={MessagesIcon} />
                                                </div>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/Twareffa">
                                                <span>My Profile</span>
                                                <div className="icon">
                                                    <img src={ProfileIcon} />
                                                </div>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/Twareffa">
                                            <span>Wallet</span>
                                            <div className="icon">
                                                <img src={WalletIcon} />
                                            </div>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/Twareffa">
                                            <span>Search</span>
                                                <div className="icon">
                                                    <img src={SearchIcon} />
                                                </div>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                                <div className={`auth-links-div ${showNav ? "show" : "hide"} `}>
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