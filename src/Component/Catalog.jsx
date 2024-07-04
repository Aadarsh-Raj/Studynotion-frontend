import React, { useEffect, useState } from "react";
import { StroreFunction } from "../Store/store";
import CourseItem from "./CourseItem";
import "./Style/catalog.css";
import { Link } from "react-router-dom";
import Wishlistbtn from "./Wishlistbtn";
const Catalog = () => {
  const { token, fetchAllCourses, ownCourse } = StroreFunction();
  useEffect(() => {
    fetchAllCourses();
  }, []);
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
                    createdAt={ele.createdAt.split("T")[0]}
                    price={ele.price}
                    instructor={ele.instructor}
                    totalRating={ele.totalRating? ele.totalRating : 0}
                    ratingAndReviews={
                      ele.ratingAndReviews ? ele.ratingAndReviews : 0
                    }
                    thumbnail={ele.thumbnail}
                    key={ele._id}
                    courseId={ele._id}
                    updatedAt={ele.updatedAt.split("T")[0]}
                    studentsEnrolled={ele.studentsEnrolled}
                    whatYouWillLearn={ele.whatYouWillLearn}
                  />
                </div>
                {token ? (
                  <Wishlistbtn key={ele._id} courseId={ele._id} />
                ) : (
                  <Link to="/login">
                    <Wishlistbtn key={ele._id} courseId={ele._id} />
                  </Link>
                )}
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
