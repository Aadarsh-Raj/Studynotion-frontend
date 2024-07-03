import React from "react";
import { StroreFunction } from "../Store/store";
import OTPVerificationCard from "./OtpVerificationCard";
import { IoMdCloseCircle } from "react-icons/io";

const ProfileUpdateBox = () => {
  const {
    apiUrl,
    token,
    user,
    updateBoxDisplay,
    setUpdateBoxDisplay,
    updateBoxTag,
    updateInputValue,
    setUpdateInputValue,
    fetchOwnProfile,
    setDialogAppear,
    setDialogMessage,
    setLoader,
    setDialogError,
  } = StroreFunction();
  // update for name, dob, gender, about
  const updateNormalFields = async () => {
    setLoader(true);
    try {
      const response = await fetch(
        `${apiUrl}/user/update/profile?${updateBoxTag}=${updateInputValue}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const data = await response.json();
      await fetchOwnProfile();
      if (data.success) {
        setDialogError(false);
      } else {
        setDialogError(true);
      }
      setLoader(false);
      setUpdateBoxDisplay(false);
      setUpdateInputValue("");
      setDialogMessage(data.message);
      setDialogAppear(true);
    } catch (error) {
      setLoader(false);
      setDialogError(true);
      setDialogMessage("Please try again later.");
      setDialogAppear(true);
    }
  };

  const updateVerifiedFields = async () => {
    try {
      const response = await fetch(
        `${apiUrl}/user/update/verified/profile?${updateBoxTag}=${updateInputValue}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const data = await response.json();
      await fetchOwnProfile();
      if (data.success) {
        setDialogError(false);
      } else {
        setDialogError(true);
      }
      setLoader(false);
      setUpdateBoxDisplay(false);
      setUpdateInputValue("");
      setDialogMessage(data.message);
      setDialogAppear(true);
    } catch (error) {
      setLoader(false);
      setDialogError(true);
      setDialogMessage("Please try again later.");
      setDialogAppear(true);
    }
  };
  const updateFor = () => {
    if (
      updateBoxTag === "name" ||
      updateBoxTag === "gender" ||
      updateBoxTag === "about" ||
      updateBoxTag === "dob"
    ) {
      updateNormalFields();
    } else if (
      updateBoxTag === "email" ||
      updateBoxTag === "phoneNumber" ||
      updateBoxTag === "password"
    ) {
      updateVerifiedFields();
    }
  };
  return (
    <>
      {updateBoxDisplay && (
        <div className="profile-update-container">
          <div className="close-btn" onClick={()=>setUpdateBoxDisplay(false)}>
          <IoMdCloseCircle color="red"/>
          </div>
          <div
            style={{
              color: "yellow",
              fontWeight: "bolder",
              textDecoration: "underline",
            }}
          >
            Update {updateBoxTag}
          </div>
          <div
            style={{
              display: "flex",
              gap: "1rem",
              padding: "1.5rem 0",
              alignItems: "center",
            }}
          >
            {updateBoxTag === "name" && (
              <input
                type="text"
                onChange={(e) => setUpdateInputValue(e.target.value)}
              />
            )}
            {updateBoxTag === "email" && (
              <>
                <OTPVerificationCard email={user.userEmail} />
              </>
            )}
            {updateBoxTag === "phoneNumber" && (
              <OTPVerificationCard email={user.userEmail} />
            )}
            {updateBoxTag === "dob" && (
              <input
                type="date"
                onChange={(e) => setUpdateInputValue(e.target.value)}
              />
            )}
            {updateBoxTag === "gender" && (
              <>
                <select
                  name=""
                  id=""
                  onChange={(e) => setUpdateInputValue(e.target.value)}
                >
                  <option defaultChecked defaultValue={"none"}>No selections</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </>
            )}
            {updateBoxTag === "about" && (
              <textarea name="" id="" rows={4} onChange={(e) => setUpdateInputValue(e.target.value)}></textarea>
            )}
            {updateBoxTag === "password" && (
              <OTPVerificationCard email={user.userEmail} />
            )}
            <button onClick={updateFor}>Update</button>
          </div>
        </div>
      )}
    </>
  );
};

export default ProfileUpdateBox;
