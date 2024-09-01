import "./Joblist.css";
import ShareIcon from "../../assets/icons/share.svg";
import { Link } from "react-router-dom";

//Job Samples API
import JobSamples, {Job} from "./samples/JobSamples";
import { useRef, useState } from "react";

//User data samples
 


//popup stuff
type ShareJobLinkPopupProps = {
    showPopup: boolean;
    handleClose: () => void;
}
function ShareJobLinkPopup({ showPopup, handleClose }: ShareJobLinkPopupProps){
    //Copy text to clipboard
    const linkRef = useRef<HTMLSpanElement | null>(null);

    const handleCopyLink = () => {
        if (linkRef.current) {
            navigator.clipboard
                .writeText(linkRef.current.textContent || "")
                .then(() => {
                    console.log("Text copied to clipboard");
                    alert("Link copied to clipboard");
                })
                .catch((err) => {
                    console.error("Failed to copy text: ", err);
                })
        }
    };

    return(
        <>
        <div className={`share-popup-link-overlay ${showPopup ? "show": ""}`}>
            <div className="share-link-popup">
                <div className="close-button" onClick={handleClose}>
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#222"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg>
                </div>
                <div className="share-job-link-text">
                    <span>Share this job</span>
                </div>
                <div className="link-content">
                    <span className="job-share-link" ref={linkRef}>
                        https://www.twareffa.com/jobid122413452345
                    </span>
                    <span className="share-link-icon copy-icon" onClick={handleCopyLink}>
                        <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 -960 960 960" width="24px" fill="#2593D5"><path d="M360-240q-33 0-56.5-23.5T280-320v-480q0-33 23.5-56.5T360-880h360q33 0 56.5 23.5T800-800v480q0 33-23.5 56.5T720-240H360Zm0-80h360v-480H360v480ZM200-80q-33 0-56.5-23.5T120-160v-560h80v560h440v80H200Zm160-240v-480 480Z"/></svg>
                    </span>
                    <span className="copy-success-message">Link copied</span>
                </div>
            </div>
        </div>
        </>
    )
}


function Joblist(){
    //Popup toggle
    const [showPopup, setShowPopup] = useState(false);
    const handlePopupClick = () => {
        setShowPopup(!showPopup);
    }
    return(
        <>
        
        //Associated Post User Public Data
            //return (
                <section className="joblist-section">
                {JobSamples.map((job: Job) => (
                    <div className="joblist-wrapper">
                        <Link to={`/Twareffa/${job.jid}`} key={job.jid}>
                            <div className="joblist-card">
                                <div className="job-metadata">
                                    <span className="user-dp">
                                        <img src="https://static.vecteezy.com/system/resources/thumbnails/002/387/693/small_2x/user-profile-icon-free-vector.jpg" alt="dp" />
                                    </span>
                                    <span className="user-name">
                                        Some Name 
                                    </span>
                                    <span className="created-at">
                                        {job.created_at}
                                    </span>
                                </div>
                                <div className="job-content">
                                    <span>
                                        {job.job_description}
                                    </span>
                                </div>
                                <div className="job-media">
                                    <img src={job.job_media_link} alt="" />
                                </div>
                                
                            </div>
                        </Link>
                        <div className="job-pay">
                            <span className="job-location">
                                {job.town}, {job.location}
                            </span>
                            <span className="bid-amount">
                                  Pay: Ksh. {job.bid_amount}
                            </span> 
                            <span className="share-icon" onClick={handlePopupClick}>
                                <img src={ShareIcon} alt="" />
                            </span>
                        </div>
                    </div>
                    ))}
            </section>
            
        
          {/* Show popup when share button is clicked */}
          <ShareJobLinkPopup showPopup={showPopup} handleClose={handlePopupClick} />
        </>
    )
}

export default Joblist;