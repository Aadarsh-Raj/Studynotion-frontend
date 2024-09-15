import React, { useEffect, useState } from "react";
import ProgressBar from "./ProgressBar";
import { IoTimeOutline } from "react-icons/io5";
import "./Style/courseitem.css";
import { BsGlobe2 } from "react-icons/bs";
import { MdOutlineUnfoldMoreDouble } from "react-icons/md";
import ReviewContainer from "./ReviewContainer";
import { StroreFunction } from "../Store/store";
import { Link } from "react-router-dom";
import EnrollmentBtn from "./EnrollmentBtn";
import ReviewCardItem from "./ReviewCardItem";
import ProfileUpdateBox from "./ProfileUpdateBox";

const buttonStyle = {
  transform: "translateY(0)",
  boxShadow: "0 0.4rem 0.1rem 0.019rem #fff",
};

const openButtonStyle = {
  transform: "translateY(0.4rem)",
  boxShadow: "0 0 0 0 #fff",
};
const CourseItem = (props) => {
  const [openDetails, setOpenDetails] = useState(false);
  const [teacherName, setTeacherName] = useState("Not found");
  const {
    user,
    token,
    findUserName,
    setCourseEditDisplay,
    setEditCourseId,
    setEditCourseTutor,
    setUpdateBoxTag,
    setUpdateBoxDisplay,
  } = StroreFunction();
  const toggleDetails = () => {
    setOpenDetails(!openDetails);
  };

  useEffect(() => {
    fetchTeacherName();
  }, []);
  const fetchTeacherName = async () => {
    try {
      const result = await findUserName(props.instructor);
      if (result) {
        setTeacherName(result);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const displayEditContainer = () => {
    setCourseEditDisplay(true);
    setEditCourseId(props.courseId);
    setEditCourseTutor(props.instructor);
  };
  const openPopup = (tag) => {
    setUpdateBoxDisplay((prev) => !prev);
    setUpdateBoxTag(tag);
  };
  return (
    <>
      <div className="course-item">
        <div className="course-item-inner-box">
          <div className="course-item-box course-item1">
            <div className="course-logo">
              <img src={props.thumbnail[0]} alt="" />
            </div>
            <div className="course-details">
              <div className="course-name">{props.coursename}</div>
              <div className="course-description">
                {props.courseDescription}
              </div>
            </div>
          </div>
          <div
            className="course-item2 course-item-box"
            title={`Course Duration is ${props.courseDuration} months`}
          >
            {props.courseDuration} M
          </div>
          <div className="course-item3 course-item-box">
            <div className="progress-details">{props.courseProgress}%</div>
            <div className="progress-bar-box">
              <ProgressBar progress={props.courseProgress} />
            </div>
          </div>
        </div>

        {openDetails && (
          <>
            <div className="course-more-details-container">
              <div className="course-more-details-box course-logo">
                <img src={props.thumbnail[0]} alt="" />
                <div className="price-container">₹ {props.price}</div>
              </div>
              <div className="course-more-details-box course-name">
                <h1>{props.coursename}</h1>
                {props.instructor === user?.userId && (
                  <button alt="Click to" onClick={displayEditContainer}>
                    <i>E</i>
                    <i>d</i>
                    <i>i</i>
                    <i>t</i>
                  </button>
                )}
              </div>
              <div className="course-more-details-box course-description">
                {props.courseDescription}
              </div>
              <div className="course-more-details-box course-rating-container">
                <div className="course-rating">
                  <ReviewContainer
                    rating={props.totalRating}
                    courseId={props.courseId}
                  />
                  <button type="button" onClick={() => openPopup("review")}>
                    Add Review
                  </button>
                  <ProfileUpdateBox courseId={props.courseId} />
                </div>
                <div className="course-enrolled-students">
                  {props.studentsEnrolled.length} student{"(s)"} enrolled
                </div>
              </div>
              <div className="course-more-details-box course-instructor">
                Created by <span>{teacherName}</span>
              </div>
              <div className="course-more-details-box course-date-language-container">
                <div className="course-creation-date">
                  <IoTimeOutline />
                  {props.createdAt}
                </div>
                <div className="course-creation-language">
                  <BsGlobe2 /> English
                </div>
              </div>
              <div className="course-more-details-box course-learning">
                <h2>What You will learn</h2>
                <p>
                  {props.whatYouWillLearn
                    ? props.whatYouWillLearn
                    : "No learning added"}
                </p>
              </div>
              <div className="course-more-details-box course-reviews">
                {props.ratingAndReviews?.map((ele) => (
                  <ReviewCardItem
                    key={"reviewcard" + props.courseId}
                    review={ele.reviews ? ele.reviews : "No reveiws"}
                    rating={ele.rating ? ele.rating : 0}
                    reviewDate={ele.createdAt.split("T")[0]}
                    user={ele.user}
                    courseId={props.courseId}
                  />
                ))}
              </div>

              <div className="course-more-details-box enroll-btn">
                {token ? (
                  <EnrollmentBtn
                    key={props.courseId}
                    courseId={props.courseId}
                    studentEnrolled={props.studentsEnrolled.includes(
                      user.userId
                    )}
                    amount={props.price}
                  />
                ) : (
                  <Link to="/login">
                    <EnrollmentBtn
                      key={props.courseId}
                      courseId={props.courseId}
                    />
                  </Link>
                )}
              </div>
            </div>
          </>
        )}

        <button className="open-course-btn" onClick={toggleDetails}>
          <span style={openDetails ? openButtonStyle : buttonStyle}>
            {openDetails ? "Close" : "Open"} <MdOutlineUnfoldMoreDouble />
          </span>
        </button>
      </div>
    </>
  );
};

export default CourseItem;
