import React, { useEffect, useState } from "react";
import { StroreFunction } from "../Store/store";
import CourseItem from "./CourseItem";
import "./Style/catalog.css";
import { Link } from "react-router-dom";
import Wishlistbtn from "./Wishlistbtn";
const Catalog = () => {
  const { apiUrl, user, token, setToken } = StroreFunction();
  const [ownCourse, setOwnCourse] = useState([]);
  useEffect(() => {
      fetchAllCourses();
  }, []);
  const fetchAllCourses = async () => {
    try {
      const response = await fetch(`${apiUrl}/course/courses`, {
        method: "GET",
      });
      const data = await response.json();
      console.log(data)
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
              <div className="course-list-item" key={ele._id + "courselist"}>
                <div className="course-lists">
                  <CourseItem
                    coursename={ele.courseName}
                    courseDescription={ele.courseDescription}
                    courseDuration={ele.courseDuration}
                    courseProgress={ele.courseProgress}
                    createdAt={ele.createdAt.split('T')[0]}
                    price={ele.price}
                    instructor={ele.instructor}
                    ratingAndReviews={ele.ratingAndReviews}
                    thumbnail={ele.thumbnail}
                    key={ele._id}
                    courseId={ele._id}
                    updatedAt={ele.updatedAt.split('T')[0]}
                    studentsEnrolled = {ele.studentsEnrolled}
                    whatYouWillLearn = {ele.whatYouWillLearn}
                  />
                </div>
                {
                  user ? <Wishlistbtn
                  key={ele._id}
                  courseId={ele._id}
                /> : <Link to="/login"><Wishlistbtn
                key={ele._id}
                courseId={ele._id}
              /></Link>
                }
                
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
