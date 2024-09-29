import React, { useEffect, useState } from "react";
import api from "../../../services/api";

interface Profile {
  birthday: string;
  gender: string;
  phone: string;
  profile_picture: string;
}

interface User {
  id: number;
  email: string;
  username: string;
  profile: Profile;
}

function EditProfileForm() {
  const [user, setUser] = useState<User | null>(null);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    birthday: "",
    gender: "",
    phone: "",
    profile_picture: "" as string | File,
  });

  // Backend URL from environment variables
  const backendUrl = import.meta.env.VITE_API_URL;

  useEffect(() => {
    getUser();
  }, []);

  const getUser = () => {
    api
      .get("/auth/api/user/profile")
      .then((res) => res.data)
      .then((data) => {
        setUser(data);
        setFormData({
          username: data.username,
          email: data.email,
          birthday: data.profile.birthday,
          gender: data.profile.gender,
          phone: data.profile.phone,
          profile_picture: data.profile.profile_picture,
        });
      })
      .catch((err) => alert(err));
  };

  // Handle form input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle profile picture change
  const handleProfilePictureChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFormData({
        ...formData,
        profile_picture: e.target.files[0],
      });
    }
  };

  // Submit the form data to the backend
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Create a form data object to handle file uploads
    const updatedProfile = new FormData();
    updatedProfile.append("username", formData.username);
    updatedProfile.append("email", formData.email);
    updatedProfile.append("birthday", formData.birthday);
    updatedProfile.append("gender", formData.gender);
    updatedProfile.append("phone", formData.phone);
    if (typeof formData.profile_picture !== "string") {
      updatedProfile.append("profile_picture", formData.profile_picture);
    }

    try {
      const response = await api.put("/auth/api/user/edit-profile", updatedProfile, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      alert("Profile updated successfully!");
      setUser(response.data);
    } catch (error) {
      console.error(error);
      alert("Error updating profile.");
    }
  };

  return (
    <div>
      <h3>Edit Your Profile</h3>
      {user ? (
        <form onSubmit={handleSubmit}>
          <div>
            <label>Username: </label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Email: </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Birthday: </label>
            <input
              type="date"
              name="birthday"
              value={formData.birthday}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Gender: </label>
            <select name="gender" value={formData.gender} onChange={handleChange}>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div>
            <label>Phone: </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Profile Picture: </label>
            <input type="file" name="profile_picture" onChange={handleProfilePictureChange} />
            {formData.profile_picture && typeof formData.profile_picture === "string" && (
              <img
                src={`${backendUrl}${formData.profile_picture}`}
                alt="Current Profile Picture"
                style={{ width: "100px", height: "100px" }}
              />
            )}
          </div>
          <button type="submit">Save Changes</button>
        </form>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}


export default EditProfileForm;
