import React, { useEffect, useState } from "react";
import "./Style/reviewcarditem.css";
import { StroreFunction } from "../Store/store";
import ReviewContainer from "./ReviewContainer";
const ReviewCardItem = (props) => {
  const [title, setTitle] = useState("User");

  const { findUserName } = StroreFunction();

  const fetchUserName = async () => {
    try {
      const response = await findUserName(props.user);
      setTitle(response);
    } catch (error) {}
  };
  useEffect(() => {
    fetchUserName();
    return () => {};
  }, [findUserName, props.user]);
  return (
    <>
      <div className="review-card-item">
        <div className="review-date">{props.reviewDate}</div>
        <ReviewContainer rating={props.rating} courseId={props.courseId} />
        <h2>{title}</h2>
        <div>{props.review}</div>
      </div>
    </>
  );
};

export default ReviewCardItem;
