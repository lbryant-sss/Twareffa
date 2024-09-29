import React, { useEffect, useState } from "react";
import api from "../../../services/api";
import { Link } from "react-router-dom";

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

function PrivateUserProfile() {
  const [user, setUser] = useState<User | null>(null);

  const backendUrl = import.meta.env.VITE_API_URL;
  
  useEffect(() => {
    getUser();
  }, []);

  const getUser = () => {
    api
      .get("/auth/api/user/profile")
      .then((res) => res.data)
      .then((data) => {
        setUser(data); // Update the user state with the fetched data
        console.log(data);
      })
      .catch((err) => alert(err));
  };

  return (
    <>
      <h3>This is the private profile</h3>
      {user ? (
        <div>
          <p>
            <strong>Make changes to your profile</strong>
            <Link to='/Twareffa/edit-profile'>
              <button>Edit Profile</button>
            </Link>
          </p>
          {/* Basic user details */}
          <p>Name: {user.username}</p>
          <p>Email: {user.email}</p>
          <p>ID: {user.id}</p>
          
          {/* Profile details (accessing nested fields) */}
          {user.profile && (
            <>
              <p>Birthday: {user.profile.birthday}</p>
              <p>Gender: {user.profile.gender}</p>
              <p>Phone: {user.profile.phone}</p>
              <img
                src={`${backendUrl}${user.profile.profile_picture}`}
                alt="Profile Picture"
                style={{ width: "100px", height: "100px" }}
              />
            </>
          )}
        </div>
      ) : (
        <p>Loading profile...</p>
      )}
    </>
  );
}

export default PrivateUserProfile;
