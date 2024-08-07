import React from "react";
import { MdAssignmentAdd } from "react-icons/md";
import { StroreFunction } from "../Store/store";
import { AiOutlineFileDone } from "react-icons/ai";
import "./Style/enrollbtn.css";
const EnrollmentBtn = (props) => {
  const {
    apiUrl,
    user,
    token,
    setLoader,
    setDialogMessage,
    setDialogError,
    setDialogAppear,
    fetchOwnProfile,
    fetchAllCourses,
  } = StroreFunction();

  const enrollStudent = async () => {
    setLoader(true);
    try {
      const response = await fetch(
        `${apiUrl}/course/enroll/${props.courseId}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const data = await response.json();
      await fetchOwnProfile();
      await fetchAllCourses();
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
      setDialogMessage("Failed to add to wishlist. Please try again later.");
      setDialogAppear(true);
    }
  };
  const warn = () => {
    setDialogError(true);
    setDialogMessage("Please login first");
    setDialogAppear(true);
  };
  return (
    <>
      <div
        className="enroll-course-btn"
        title="Enroll course"
        onClick={user ? enrollStudent : warn}
      >
        {!props.studentEnrolled ? (
          <>
            <span>Enroll Yourself</span>
            <MdAssignmentAdd />{" "}
          </>
        ) : (
          <>
            <span style={{ color: "green" }}>Already Enrolled</span>{" "}
            <AiOutlineFileDone color="green" />
          </>
        )}
      </div>
    </>
  );
};

export default EnrollmentBtn;
