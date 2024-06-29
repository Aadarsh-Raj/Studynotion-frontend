import React, { useEffect, useState } from "react";
import { StroreFunction } from "../Store/store";
import CourseItem from "./CourseItem";
import { MdAssignmentAdd } from "react-icons/md";
import "./Style/catalog.css"
const Catalog = () => {
  const { apiUrl, user, token, setToken } = StroreFunction();
  const [ownCourse, setOwnCourse] = useState([]);
  useEffect(() => {
    if (token && user?.userId) {
      console.log("Arya");
      fetchAllCourses();
    }
  }, [token, user, setToken]);
  const fetchAllCourses = async () => {
    try {
      const response = await fetch(`${apiUrl}/course/courses`, {
        method: "GET",
      });
      const data = await response.json();
      setOwnCourse(data.result);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="catalog-container">
        {ownCourse.length > 0 ? (
          <>
            {ownCourse.map((ele) => (
                <div className="course-list-item" key={ele._id +"courselist"}>
                  <div className="course-lists">
                  <CourseItem
                    coursename={ele.courseName}
                    courseDescription={ele.courseDescription}
                    courseDuration={ele.courseDuration}
                    courseProgress={ele.courseProgress}
                    createdAt={ele.createdAt}
                    price={ele.price}
                    instructor={ele.instructor}
                    ratingAndReviews={ele.ratingAndReviews}
                    thumbnail={ele.thumbnail}
                    key={ele._id}
                    updatedAt={ele.updatedAt}
                  />
                  </div>
                  <div
                    className="enroll-course-btn"
                    title="Enroll course"
                    key={ele._id}
                  >
                    <MdAssignmentAdd />
                  </div>
                </div>
            ))}
          </>
        ) : (
          "No courses available"
        )}
      </div>
    </>
  );
};

export default Catalog;
