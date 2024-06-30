import React, { useState } from "react";
import ProgressBar from "./ProgressBar";
import { IoTimeOutline } from "react-icons/io5";
import "./Style/courseitem.css";
import { BsGlobe2 } from "react-icons/bs";

import { MdOutlineUnfoldMoreDouble } from "react-icons/md";
import ReviewContainer from "./ReviewContainer";
import { StroreFunction } from "../Store/store";
import { Link } from "react-router-dom";
import EnrollmentBtn from "./EnrollmentBtn";

const CourseItem = (props) => {
  const [openDetails, setOpenDetails] = useState(false);
  const {user} = StroreFunction();
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
            <div className="course-description">{props.courseDescription}</div>
          </div>
        </div>
        <div className="course-item2 course-item-box">
          {props.courseDuration}
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
              <div className="course-logo">
                <img src={props.thumbnail[0]} alt="" />
              </div>
              <div className="course-name">
                <h1>{props.coursename}</h1>
              </div>
              <div className="course-description">
                {props.courseDescription}
              </div>
              <div className="course-rating-container">
                <div className="course-rating">
                <ReviewContainer />
                </div>
                <div className="course-enrolled-students">
                  {props.studentsEnrolled.length} student{"(s)"} enrolled
                </div>
              </div>
              <div className="course-instructor">
                Created by 
              </div>
              <div className="course-date-language-container" >
                <div className="course-creation-date">
                <IoTimeOutline />
                {props.createdAt}
                </div>
                <div className="course-creation-language">
                  <BsGlobe2 /> English
                </div>
              </div>
              <div className="course-learning">
                <h2>What You will learn</h2>
                <p>{props.whatYouWillLearn ? props.whatYouWillLearn : "No learning added"}</p>
              </div>
              <div className="enroll-btn">
              {
                  user ? <EnrollmentBtn
                  key={props.courseId}
                  courseId={props.courseId}
                  studentEnrolled={props.studentsEnrolled.includes(user.userId)}
                /> : <Link to="/login"><EnrollmentBtn
                key={props.courseId}
                courseId={props.courseId}
              />Login</Link>
                }
              </div>
            </div>
          </>
        )}

        <button
          className="open-course-btn"
          onClick={() => setOpenDetails(!openDetails)}
        >
          <span
            style={{
              transform: openDetails
                ? "translate(0, 0.4rem)"
                : "translate(0, 0rem)",
              boxShadow: openDetails
                ? "0 0 0 0 #fff"
                : "0 0.4rem 0.1rem 0.019rem #fff",
            }}
          >
            {openDetails ? "Close" : "Open"} <MdOutlineUnfoldMoreDouble />
          </span>
        </button>
      </div>
    </>
  );
};

export default CourseItem;
