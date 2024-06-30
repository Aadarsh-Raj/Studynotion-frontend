import React from "react";
import { StroreFunction } from "../Store/store";
import "./Style/profile.css";
const Profile = () => {
  const { user } = StroreFunction();

  return (
    <>
      <div className="profile-container">
        Name:{user.userName} <br />
        Email: {user.userEmail} <br />
        Type: {user.userRole.toUpperCase()}
      </div>
    </>
  );
};

export default Profile;
