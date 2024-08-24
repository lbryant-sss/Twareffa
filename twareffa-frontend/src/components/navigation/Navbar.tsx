import "./Navbar.css";
import { Link } from "react-router-dom";
import HomeIcon from "../../assets/icons/nav-icons/home.svg";
import MessagesIcon from "../../assets/icons/nav-icons/messages.svg";
import NotificationsIcon from "../../assets/icons/nav-icons/notifications.svg";
import ProfileIcon from "../../assets/icons/nav-icons/profile.svg";
import SearchIcon from "../../assets/icons/nav-icons/search.svg";
import WalletIcon from "../../assets/icons/nav-icons/wallet.svg";
import WorkIcon from "../../assets/icons/nav-icons/work.svg";
import BackPageIcon from "../../assets/icons/arrow_back.svg";


import { useState } from "react";

function Navbar(){

    const [showNav, setShowNav] = useState(false);

    const toggleNav = () =>{
        setShowNav(prevState => !prevState);
    }

    return(
        <>
            <div className="navbar-wrapper navbar-wrapper-fixed">
                <header>
                    <div className="logo">
                        <Link to="/Twareffa">
                            <span >twareffa</span>
                        </Link>
                    </div>
                    <div className="menu-icon">
                        <img src={showNav ?BackPageIcon :BackPageIcon} alt="Menubar" onClick={toggleNav} />
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
                                        <li className="messages">
                                            <Link to="/Twareffa">
                                                <span>Messages</span>
                                                <div className="icon">
                                                    <p className="message-couter">0</p>
                                                    <img src={MessagesIcon} />
                                                </div>
                                            </Link>
                                        </li>
                                        <li className="accounts-nav-button">
                                            <Link to="/Twareffa/login">
                                                <span>My Profile</span>
                                                <div className="icon">
                                                    <img src={ProfileIcon} />
                                                </div>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/Twareffa/wallet">
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
                                        <li className="notification-icon">
                                            <Link to="/Twareffa">
                                            <span>Notifications</span>
                                                <div className="icon">
                                                    <p className="note-counter">0</p>
                                                    <img src={NotificationsIcon} />
                                                </div>
                                            </Link>
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