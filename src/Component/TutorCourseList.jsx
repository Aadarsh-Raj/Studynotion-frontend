import React, { useEffect, useState } from "react";
import { StroreFunction } from "../Store/store";
import CourseItem from "./CourseItem";
import "./Style/tutorcourse.css";
const TutorCourseList = () => {
  const {
    apiUrl,
    user,
    token,
    setToken,
    setLoader,
    setDialogError,
    setDialogMessage,
    setDialogAppear,
  } = StroreFunction();
  const [ownCourse, setOwnCourse] = useState([]);
  useEffect(() => {
    if (token && user?.userId) {
      fetchCoursesOfTutor();
    }
  }, [token, user, setToken]);

  const fetchCoursesOfTutor = async () => {
    try {
      const response = await fetch(
        `${apiUrl}/course/getcourses/${user.userId}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const data = await response.json();
      setOwnCourse(data.result);
    } catch (error) {
      setLoader(false);
      setDialogError(true);
      setDialogMessage("Please try again later.");
      setDialogAppear(true);
    }
  };
  return (
    <>
      <div className="tutor-course-lists">
        <h2>Your Courses</h2>
        {ownCourse.length > 0 ? (
          <>
            {ownCourse.map((ele) => (
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
            ))}
          </>
        ) : (
          "No courses available"
        )}
      </div>
    </>
  );
};

export default TutorCourseList;
