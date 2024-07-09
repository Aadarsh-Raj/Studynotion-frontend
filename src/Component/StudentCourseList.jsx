import React, { useEffect, useState } from "react";
import { StroreFunction } from "../Store/store";
import CourseItem from "./CourseItem";
import "./Style/tutorcourse.css";
const StudentCourseList = () => {
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
   return null;
  }, [token, user, setToken]);

  const fetchCoursesOfTutor = async () => {
    setLoader(true)
    try {

      const response = await fetch(
        `${apiUrl}/course/getcourse/enrolled/${user?.userId}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const data = await response.json();
      console.log(data)
      setLoader(false)
      if(data.success){

        setOwnCourse(data.result);
      }
    } catch (error) {
        console.log(error);
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
            ))}
          </>
        ) : (
          "No courses available"
        )}
      </div>
    </>
  );
};

export default StudentCourseList;
