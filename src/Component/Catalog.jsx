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
                    coursename={
                      ele.courseName ? ele.courseName : "Course not found"
                    }
                    courseDescription={
                      ele.courseDescription
                        ? ele.courseDescription
                        : "Course not found"
                    }
                    courseDuration={
                      ele.courseDuration
                        ? ele.courseDuration
                        : "Course not found"
                    }
                    courseProgress={
                      ele.courseProgress
                        ? ele.courseProgress
                        : 0
                    }
                    createdAt={ele.createdAt?.split("T")[0]}
                    price={ele.price ? ele.price : "Course not found"}
                    instructor={
                      ele.instructor ? ele.instructor : "Course not found"
                    }
                    totalRating={ele.totalRating ? ele.totalRating : 0}
                    ratingAndReviews={
                      ele.ratingAndReviews ? ele.ratingAndReviews : 0
                    }
                    thumbnail={ele.thumbnail ? ele.thumbnail : ""}
                    key={ele._id}
                    courseId={ele._id}
                    updatedAt={ele.updatedAt?.split("T")[0]}
                    studentsEnrolled={
                      ele.studentsEnrolled ? ele.studentsEnrolled : []
                    }
                    whatYouWillLearn={
                      ele.whatYouWillLearn
                        ? ele.whatYouWillLearn
                        : "Course not found"
                    }
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
          <>
            <p
              style={{
                textAlign: "center",
                fontWeight: "bolder",
                padding: "2rem",
              }}
            >
              No courses available
            </p>
          </>
        )}
      </div>
    </>
  );
};

export default Catalog;
