import React from "react";
import { StroreFunction } from "../Store/store";
import "./Style/signup.css"
import "./Style/contact.css"
const AddCourse1 = () => {
  const {
    addCourse1,
    setAddCourse1,
    addDescription,
    setAddDescription,
    addLearning,
    setAddLearning,
  } = StroreFunction();
  return (
    <>
      <div className="addcourse1-box">
        <form className="signup-form contact-form">
          <h1>Add Course</h1>
          <div className="email-box form-box-item">
            <label htmlFor="" className="required-label">Course name</label>{" "}
            <input
              type="text"
              placeholder="Add course name"
              required
              value={addCourse1}
              onChange={(e) => setAddCourse1(e.target.value)}
            />
          </div>
          <div className="email-box form-box-item">
            <label htmlFor="" className="required-label">Description</label>{" "}
            <textarea name="" id="" 
            value={addDescription}
            placeholder="Add description" rows={10} required onChange={(e)=>setAddDescription(e.target.value)}></textarea>
          </div>

          <div className="email-box form-box-item">
            <label htmlFor="" className="required-label">WhatYouWillTeach</label>{" "}
            <textarea name="" id="" placeholder="Add description"
            value={addLearning}
            rows={10} required onChange={(e)=>setAddLearning(e.target.value)}></textarea>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddCourse1;
