import "./Joblist.css";
import ShareIcon from "../../assets/icons/share.svg";
import { Link } from "react-router-dom";

function Joblist(){
    return(
        <>
            <section className="joblist-section">
                <div className="joblist-wrapper">
                    <Link to='/username'>
                        <div className="joblist-card">
                            <div className="job-metadata">
                                <span className="user-dp">
                                    <img src="" alt="dp" />
                                </span>
                                <span className="user-name">
                                    Brian Mungai 
                                </span>
                                <span className="created-at">3 min ago</span>
                            </div>
                            <div className="job-content">
                                <span>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam sunt, nobis soluta neque architecto facilis est reprehenderit eveniet mollitia repellendus! Quod, nihil ut a necessitatibus optio omnis dignissimos facere in?
                                </span>
                            </div>
                            <div className="job-pay">
                                <span>
                                    Location
                                </span>
                                <span>
                                    Pay: Ksh. 500
                                </span> 
                                <span className="share-icon">
                                    <img src={ShareIcon} alt="" />
                                </span>
                            </div>
                        </div>
                    </Link>
                </div>
            </section>
        </>
    )
}

export default Joblist;