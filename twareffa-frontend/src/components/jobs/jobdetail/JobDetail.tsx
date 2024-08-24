import React from 'react';
import Navbar from '../../../components/navigation/Navbar';
import RightSideBar from '../../../components/rightsidebar/RightsideBar';
import "../../../pages/auth/signin/Signin.css";
import "./JobDetail.css";

import DefaultProfilePicture from "../../../assets/icons/face_placeholder.svg";

// Job Sample Details
import JobSamples from '../samples/JobSamples';
import { useParams } from 'react-router-dom';

interface Job {
    jid: number;
    created_at: string;
    job_description: string;
    job_media_link: string;
    bid_amount: string;
    town: string;
    location: string;
    skills: string;
}

interface JobDetailComponentProps {
    job: Job;
}

const JobDetailComponent: React.FC<JobDetailComponentProps> = ({ job }) => {
    return (
        <div className='job-detail-card'>
            <div className="metadata">
                <div className="user-data">
                    <img src={DefaultProfilePicture} alt="User Profile"/>
                    <p className='user-name'>Brian Mungai</p>
                </div>
                <div className="post-data">
                    <p><strong>Posted</strong> {job.created_at}</p>
                </div>
            </div>
            <div className="job-content">
                <span>{job.job_description}</span>
                <img src={job.job_media_link} alt="Job media" style={{ width: '100%', height: 'auto' }} />
            </div>
            <div className="job-data">
                <p><strong>Pay:</strong> Ksh. {job.bid_amount}</p>
                <p><strong>Town:</strong> {job.town}</p>
                <p><strong>Location:</strong> {job.location}</p>
                <p><strong>Skills Required:</strong> {job.skills}</p>
            </div>
            <div className="user-verification-data">
                <div className="payment-verification verification">
                    <p>Payment: <span>Verified</span></p>
                    <div className='ver-svg'>
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960"><path d="m344-60-76-128-144-32 14-148-98-112 98-112-14-148 144-32 76-128 136 58 136-58 76 128 144 32-14 148 98 112-98 112 14 148-144 32-76 128-136-58-136 58Zm34-102 102-44 104 44 56-96 110-26-10-112 74-84-74-86 10-112-110-24-58-96-102 44-104-44-56 96-110 24 10 112-74 86 74 84-10 114 110 24 58 96Zm102-318Zm-42 142 226-226-56-58-170 170-86-84-56 56 142 142Z"/></svg>
                    </div>
                </div>
                <div className="identity-verification verification">
                    <p>Identity: <span>Verified</span></p>
                    <div className='ver-svg'>
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960"><path d="m344-60-76-128-144-32 14-148-98-112 98-112-14-148 144-32 76-128 136 58 136-58 76 128 144 32-14 148 98 112-98 112 14 148-144 32-76 128-136-58-136 58Zm34-102 102-44 104 44 56-96 110-26-10-112 74-84-74-86 10-112-110-24-58-96-102 44-104-44-56 96-110 24 10 112-74 86 74 84-10 114 110 24 58 96Zm102-318Zm-42 142 226-226-56-58-170 170-86-84-56 56 142 142Z"/></svg>
                    </div>
                </div>
                <div className="apply">
                    <span>Apply</span>
                </div>
            </div>
        </div>
    );
};

const Job = () => {
    const { jid } = useParams<{ jid: string }>();
    const job = JobSamples.find(job => job.jid === Number(jid));

    if (!job) {
        return <h3>Job not found</h3>;
    }

    return <JobDetailComponent job={job} />;
};

const JobDetail = () => {
    return (
        <section>
            <div className='home-content-wrapper'>
                <div className="nav-wrapper">
                    <Navbar />
                </div>
                <div className="auth-wrapper middle-wrapper job-detail-container">
                    <div className="job-detail-box">
                        <Job /> {/* Render the Job component here to fetch and display the job details */}
                    </div>
                </div>
                <div className="rightsidebar other-content-right">
                    <RightSideBar />
                </div>
            </div>
        </section>
    );
};

export default JobDetail;
