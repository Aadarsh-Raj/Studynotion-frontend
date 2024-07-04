import React from "react";
import { StroreFunction } from "../Store/store";
import "./Style/profile.css";
import ProfileUpdateBox from "./ProfileUpdateBox";
import { FaPenToSquare } from "react-icons/fa6";

const Profile = () => {
  const {
    user,
    apiUrl,
    token,
    fetchOwnProfile,
    setDialogAppear,
    setDialogMessage,
    setLoader,
    setDialogError,
    setUpdateBoxDisplay,
    updateBoxDisplay,
    setUpdateBoxTag,
  } = StroreFunction();
  console.log(user)
  const updateProfilePhoto = async (e) => {
    try {
      setLoader(true);
      const formData = new FormData();
      Array.from(e.target.files).forEach((file) => {
        formData.append("thumbnail", file);
      });
      const response = await fetch(`${apiUrl}/user/updatephoto`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      });

      const data = await response.json();

      await fetchOwnProfile();
      if (data.success) {
        setDialogError(false);
      } else {
        setDialogError(true);
      }
      setLoader(false);
      setDialogMessage(data.message);
      setDialogAppear(true);
    } catch (error) {
      setLoader(false);
      setDialogError(true);
      setDialogMessage("Please try again later.");
      setDialogAppear(true);
    }
  };
  
  const openInputBox = (tag) => {
    setUpdateBoxDisplay(!updateBoxDisplay);
    setUpdateBoxTag(tag);
  };
  return (
    <>
      <div className="profile-container">
        <div className="profile-photo-container">
          <div className="image-container">
            <img
            loading={"lazy"}
              src={
                user.userPhoto
                  ? user.userPhoto
                  : "https://t3.ftcdn.net/jpg/05/53/79/60/360_F_553796090_XHrE6R9jwmBJUMo9HKl41hyHJ5gqt9oz.jpg"
              }
              alt=""
            />
          </div>
          <div className="profile-photo-update-container">
            <div className="input-div">
              <input
                className="input"
                name="files[]"
                accept=".png, .jpg, .jpeg"
                type="file"
                onChange={updateProfilePhoto}
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1rem"
                height="1rem"
                strokeLinejoin="round"
                strokeLinecap="round"
                viewBox="0 0 24 24"
                strokeWidth="2"
                fill="none"
                stroke="currentColor"
                className="icon"
              >
                <polyline points="16 16 12 12 8 16"></polyline>
                <line y2="21" x2="12" y1="12" x1="12"></line>
                <path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3"></path>
                <polyline points="16 16 12 12 8 16"></polyline>
              </svg>{" "}
              <span>Upload</span>
            </div>
          </div>
        </div>
    
        <div className="profile-information-container">
          <ProfileUpdateBox />
          <div className="profile-information-box">
            <div className="profile-tag">
              <div
                className="profile-update-btn"
                title="Update name"
                onClick={() => openInputBox("name")}
              >
                <FaPenToSquare />
              </div>
              Name:
            </div>
            <div className="profile-value">
              {user.userName && user.userName}
            </div>
          </div>
          
          <div className="profile-information-box">
            <div className="profile-tag">
              <div
                className="profile-update-btn"
                title="Update email"
                onClick={() => openInputBox("email")}
              >
                <FaPenToSquare />
              </div>
              Email:
            </div>
            <div className="profile-value">
              {user.userEmail && user.userEmail}
            </div>
          </div>
          <div className="profile-information-box">
            <div className="profile-tag">
              <div
                className="profile-update-btn"
                title="Update number"
                onClick={() => openInputBox("phoneNumber")}
              >
                <FaPenToSquare />
              </div>
              Phone Number:
            </div>
            <div className="profile-value">
              {user.userPhoneNumber && user.userPhoneNumber}
            </div>
          </div>
          <div className="profile-information-box">
            <div className="profile-tag">
              <div
                className="profile-update-btn"
                title="Update password"
                onClick={() => openInputBox("password")}
              >
                <FaPenToSquare />
              </div>
              Password:
            </div>
            <div className="profile-value">xxxxxxxxxxxxx</div>
          </div>
          <div className="profile-information-box">
            <div className="profile-tag">
              <div style={{ visibility: "hidden" }}>
                <FaPenToSquare />
              </div>
              Role:
            </div>
            <div
              className="profile-value"
              style={{ textTransform: "capitalize" }}
            >
              {user.userRole && user.userRole}
            </div>
          </div>
          <div className="profile-information-box">
            <div className="profile-tag">
              <div
                className="profile-update-btn"
                title="Update date of birth"
                onClick={() => openInputBox("dob")}
              >
                <FaPenToSquare />
              </div>
              DOB:
            </div>
            <div className="profile-value">{user.userDob && user.userDob}</div>
          </div>
          <div className="profile-information-box">
            <div className="profile-tag">
              <div
                className="profile-update-btn"
                title="Update about"
                onClick={() => openInputBox("gender")}
              >
                <FaPenToSquare />
              </div>
              Gender:
            </div>
            <div className="profile-value">
              {user.userGender && user.userGender}
            </div>
          </div>
          <div className="profile-information-box">
            <div className="profile-tag">
              <div
                className="profile-update-btn"
                title="Update About"
                onClick={() => openInputBox("about")}
              >
                <FaPenToSquare />
              </div>
              About:
            </div>
            <div className="profile-value">
              {user.userAbout && user.userAbout}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
