import CreatePostForm from "../../../components/forms/post-forms/CreatePostForm";
import Navbar from '../../../components/navigation/Navbar';
import RightSideBar from '../../../components/rightsidebar/RightsideBar';


function CreatePost(){
    return(
        <>
            <section>
            <div className='home-content-wrapper'>
                <div className="nav-wrapper">
                    <Navbar />
                </div>
                <div className="auth-wrapper middle-wrapper">
                    <div className="auth-box">
                    <CreatePostForm /> 
                    </div>
                </div>
                <div className="rightsidebar other-content-right">
                    <RightSideBar />
                </div>
            </div>
        </section>
        </>
    )
}

export default CreatePost;