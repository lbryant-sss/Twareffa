import { Link } from "react-router-dom";
import GoogleLogo from "../../../assets/images/google-logo-9827.png";
import "../login/LoginForm.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../../services/api";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../../../services/constants";


import { AxiosError } from "axios"; 

interface RegisterFormProps {
    route: string;
    method: string;
}

function RegisterForm({route, method}: RegisterFormProps){
    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false);
    const [email, setEmail] = useState<string>("")
    const [birthday, setBirthday] = useState<string>("");
    const [gender, setGender] = useState<string>("");
    const [dp, setDp] = useState<File | null> (null);
    const [dpPreview, setDpPreview] = useState<string>("");
    const [phone, setPhone] = useState<string>("");
    const navigate = useNavigate();

    const isLogin = method === "register";

    const handleFileChange = (e: any) => {
        const file = e.target.files?.[0];

        if (file) {
            setDp(file);

            const reader = new FileReader();
            reader.onloadend = () => {
                setDpPreview(reader.result as string);
            };
            reader.readAsDataURL(file);
        };
    }


    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        setLoading(true);
        e.preventDefault();

        const formData = new FormData();
        formData.append("username", username);
        formData.append("email", email);
        formData.append("password", password);

         // Append the profile fields directly to the form data (not as a nested object)
        formData.append("profile.gender", gender);  // Flattening the profile fields
        formData.append("profile.birthday", birthday);
        formData.append("profile.phone", phone);
        
        if (dp) formData.append("profile.profile_picture", dp);  // Make sure to append this as profile_picture
        
          
        try{
            const res = await api.post(route, formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });
            
            if (method === "login"){
                localStorage.setItem(ACCESS_TOKEN, res.data.access);
                localStorage.setItem(REFRESH_TOKEN, res.data.refresh);
                navigate("/Twareffa");
            } else {
                navigate("/Twareffa/login");
            }

        } catch (error: unknown){
            const axiosError = error as AxiosError;
            if (axiosError.response){
                console.log("Server Error: ", axiosError.response.data);
                alert(JSON.stringify(axiosError.response.data));
            } else{
                console.log("Error during registration: ", axiosError);
                alert("Error during registration. Try Again.")
            }
        } finally {
            setLoading(false);
        }
    }


    return(
        <> 
            <div className="login-form-container">
                <div className="native-login-box">
                    <form onSubmit={handleSubmit}>
                        <div className="input">
                            <label htmlFor="">Choose a Username</label>
                            <input 
                                className="text-input" 
                                placeholder="username" 
                                type="text" 
                                name="username" 
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                required />
                        </div>
                        <div className="input">
                            <label htmlFor="">Enter your email address</label>
                            <input 
                                className="text-input" 
                                placeholder="youremail@mail.com" 
                                type="email" 
                                name="email" 
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required />
                        </div>
                        <div className="input">
                            <label htmlFor="">Enter your phone number</label>
                            <input 
                                className="text" 
                                placeholder="07...." 
                                type="tel" 
                                name="phone" 
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                            />
                        </div> 
                        <div className="input">
                            <label htmlFor="">Upload Profile Photo</label>
                            <input 
                                type="file" 
                                name="dp" 
                                accept="image/*"
                                onChange={handleFileChange}
                            />
                            {dpPreview && <img src={dpPreview} alt="Profile Picture" />}
                        </div> 
                        <div className="input checkbox">
                            <label htmlFor="">Are you:</label>
                            <div className="sex">
                            <label htmlFor="male">Male</label>
                                <input
                                type="radio"
                                id="male"
                                name="gender"
                                value="Male"
                                checked={gender === "Male"}  // Controlled input
                                onChange={(e) => setGender(e.target.value)}  // Set gender in state
                                />

                                <label htmlFor="female">Female</label>
                                <input
                                type="radio"
                                id="female"
                                name="gender"
                                value="Female"
                                checked={gender === "Female"}  // Controlled input
                                onChange={(e) => setGender(e.target.value)}  // Set gender in state
                                />
                            </div>
                        </div> <br />
                        <div className="input">
                            <label htmlFor="">Birthday</label>
                            <input 
                                className="text-input" 
                                placeholder="birthday" 
                                type="date" 
                                name="birthday"
                                value={birthday}
                                onChange={(e) => setBirthday(e.target.value)}
                                required 
                            />
                        </div> <br />
                        <div className="input">
                            <label htmlFor="">Choose Password</label>
                            <input 
                                className="text-input" 
                                placeholder="password" 
                                type="password" 
                                name="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required />
                        </div>
                        <div className="submit-button">
                            <input type="submit" value="Register" />
                        </div>
                    </form>
                </div>
                <div className="google-login-box">
                    <Link to="/">
                        <span>Signup with Google</span>
                        <img src={GoogleLogo} alt="twareffa login" />
                    </Link>
                </div>
                <div className="account-recovery">
                    <Link to='/create-account'>
                        <span>Already have an account?</span><br />
                        <span>Login instead</span>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default RegisterForm;