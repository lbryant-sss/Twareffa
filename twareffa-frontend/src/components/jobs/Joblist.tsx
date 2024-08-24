import "./Joblist.css";
import ShareIcon from "../../assets/icons/share.svg";
import { Link } from "react-router-dom";

//Job Samples API
import JobSamples, {Job} from "./samples/JobSamples";

//User data samples
import publicUserData from "../userData/publicUserData";

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
                                    <img src="" alt="dp" />
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
                            <div className="job-pay">
                                <span>
                                    {job.town}, {job.location}
                                </span>
                                <span>
                                    Pay: Ksh. {job.bid_amount}
                                </span> 
                                <span className="share-icon">
                                    <img src={ShareIcon} alt="" />
                                </span>
                            </div>
                        </div>
                    </Link>
                </div>
            </section>
            //);
        ))}
        </>
    )
}

export default Joblist;