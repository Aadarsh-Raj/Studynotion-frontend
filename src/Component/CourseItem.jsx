import React from "react";
import ProgressBar from "./ProgressBar";
import "./Style/courseitem.css";
const CourseItem = (props) => {
  return (
    <>
      <div className="course-item">
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
    </>
  );
};

export default CourseItem;
