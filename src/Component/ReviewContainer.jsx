import React, { useState } from "react";
import { Rating } from "react-simple-star-rating";
import "./Style/reviewcontainer.css";
import { StroreFunction } from "../Store/store";
const ReviewContainer = (props) => {
  const [rating, setRating] = useState(0);
  const {
    user,
    apiUrl,
    token,
    setDialogAppear,
    setDialogError,
    dialogAppear,
    setDialogMessage,
    setLoader,
    fetchOwnProfile,
    fetchAllCourses,
  } = StroreFunction();
  const changeRating = async (rate) => {
    setLoader(true);
    try {
      const response = await fetch(
        `${apiUrl}/course/rating/upload?${props.courseId}=${rating}`,
        {
          method:"PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const data = await response.json();
      await fetchOwnProfile();
      await fetchAllCourses();
      setLoader(false);
      setDialogError(!data.success);
      setDialogMessage(data.message);
      setDialogAppear(true);
    } catch (error) {
      setLoader(false);
      setDialogError(true);
      setDialogMessage("Something went wrong");
      setDialogAppear(true);
    }
  };

  // Catch Rating value
  const handleRating = (rate) => {
    setRating(rate);
    changeRating();
  };

  return (
    <>
      <div className="review-container" title="You have rated">
        <Rating onClick={handleRating} size={20} initialValue={Math.floor(props.rating)} />
      </div>
    </>
  );
};

export default ReviewContainer;
