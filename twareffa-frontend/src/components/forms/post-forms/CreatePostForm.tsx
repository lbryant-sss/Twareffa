import "../login/LoginForm.css";
import { useState, useRef } from "react";
import "./CreatePostForm.css";

function PostForm() {
    const [previewImage, setPreviewImage] = useState<string | null>(null);

    const fileInputRef = useRef<HTMLInputElement | null>(null);

    const handleImageIconClick = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {

            // Optionally, create a preview of the image
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreviewImage(reader.result as string);
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <>
            <div className="all-form-container">
                <div className="form-box">
                    <form action="POST">
                        <div className="post-content-box">
                            <div className="post-text input">
                                <textarea placeholder="I need someone who can..." style={{boxSizing: 'border-box'}}/>
                                {/* Display image preview */}
                                    {previewImage && (
                                        <div className="image-preview">
                                            <img src={previewImage} alt="Selected" style={{ maxWidth: '300px' }} />
                                        </div>
                                    )}
                                <span
                                    className="image-upload-button"
                                    onClick={handleImageIconClick}
                                > 
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
                                        <path d="M480-480ZM200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h320v80H200v560h560v-320h80v320q0 33-23.5 56.5T760-120H200Zm40-160h480L570-480 450-320l-90-120-120 160Zm440-320v-80h-80v-80h80v-80h80v80h80v80h-80v80h-80Z" />
                                    </svg>
                                </span>
                            </div>
                            <div className="post-addons">
                                <div className="media-post-field">
                                    {/* File input with change handler */}
                                    <input
                                        type="file"
                                        accept="image/*"
                                        style={{ display: 'none' }}
                                        ref={fileInputRef}
                                        onChange={handleFileChange} // File change handler
                                    />
                                </div>
                                <div className="extra-post-information">
                                    <div className="amount post-foot-additions">
                                        <label htmlFor="">Amount</label>
                                        <input type="number" name="" id="" required/>
                                    </div>
                                    <div className="location post-foot-additions">
                                        <label htmlFor="">Location</label>
                                        <input type="text"required />
                                    </div>
                                    <div className="skill post-foot-additions">
                                        <label htmlFor="">Skill</label>
                                        <input type="text" required/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="submit-button input">
                            <button type="submit">Post</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default PostForm;
