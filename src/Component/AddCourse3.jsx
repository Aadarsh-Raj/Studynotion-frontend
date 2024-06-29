import React from "react";
import { StroreFunction } from "../Store/store";
import "./Style/addcourse3.css";
const AddCourse3 = () => {
  const {
    addCourse1,
    addDescription,
    addLearning,
    addInstructorName,
    coursePrice,
    courseImagPreview,
  } = StroreFunction();
  return (
    <>
      <div className="addcourse-3">
        <div className="final-box">
          <h5>Course Name: </h5> <p>{addCourse1}</p>
        </div>
        <div className="final-box">
          <h5>Description: </h5> <p>{addDescription}</p>
        </div>
        <div className="final-box">
          <h5>What You will Teach: </h5> <p>{addLearning}</p>
        </div>
        <div className="final-box">
          <h5>Instructor: </h5> <p>{addInstructorName}</p>
        </div>
        <div className="final-box">
          <h5>Price: </h5> <p>{coursePrice}</p>
        </div>
        <div className="final-box">
          <h5>Images: </h5>{" "}
          <div>
            <div className="imgae-preview-container">
              {courseImagPreview.length > 0 && (
                <>
                  {courseImagPreview.map((ele, index) => (
                    <img
                      src={ele}
                      alt=""
                      key={Math.floor(Math.random() * 1000) + ele}
                    />
                  ))}
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddCourse3;
