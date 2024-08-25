import "./Joblist.css";
import ShareIcon from "../../assets/icons/share.svg";
import { Link } from "react-router-dom";

//Job Samples API
import JobSamples, {Job} from "./samples/JobSamples";

//User data samples
 

function ShareJobLinkPopup(){
    return(
        <>
        <div className="share-popup-link-overlay">
            <div className="share-link-popup">
                <div className="close-button">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#222"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg>
                </div>
                <div className="share-job-link-text">
                    <span>Share this job</span>
                </div>
                <div className="link-content">
                    <span className="job-share-link">
                        https://www.twareffa.com/jobid122413452345
                    </span>
                    <span className="share-link-icon">copy</span>
                </div>
            </div>
        </div>
        </>
    )
}


function Joblist(){
    return(
        <>
        {JobSamples.map((job: Job) => (
        //Associated Post User Public Data
            //return (
                <section className="joblist-section">
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
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTD6pwtlWDEpDx_FdwpVqaeL-WTjgEtmrkoaQ&s" alt="" />
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
                            <span className="share-icon">
                                <img src={ShareIcon} alt="" />
                            </span>
                        </div>
                    </div>
            </section>
            //);
        ))};
          {/* Show popup when share button is clicked */}
          <ShareJobLinkPopup />
        </>
    )
}

export default Joblist;