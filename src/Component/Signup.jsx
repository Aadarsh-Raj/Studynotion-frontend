import React from "react";
import "./Style/contact.css"
import "./Style/signup.css"
const Signup = () => {
  return (
    <>
      <div className="signup-page">
        <form className="signup-form contact-form">
          <h1>Join the millions learning to code with StudyNotion for free</h1>
          <p className="signup-heading-para">
            Build skills for today, tomorrow and beyond.{" "}
            <span>Education to future-proof your career.</span>
          </p>
          <div className="user-type-switch form-box-item">
          <div className="toggle-button-cover">
        <div id="button-3" className="button r">
          <input className="checkbox" type="checkbox" />
          <div className="knobs"></div>
          <div className="layer"></div>
        </div>
      </div>
          </div>
          <div className="form-name-container">
            <div className="first-name-box form-box-item">
              <label htmlFor="">First Name</label>{" "}
              <input type="text" placeholder="Enter first name" />
            </div>
            <div className="last-name-box form-box-item">
              <label htmlFor="">Last Name</label>
              <input type="text" placeholder="Enter last name" />
            </div>
          </div>
          <div className="email-box form-box-item">
            <label htmlFor="">Email Address</label>{" "}
            <input type="text" placeholder="Enter email address" />
          </div>

          <div className="form-name-container">
            <div className="first-name-box form-box-item">
              <label htmlFor="">Create Password</label>{" "}
              <input type="password" placeholder="Enter Password" />
            </div>
            <div className="last-name-box form-box-item">
              <label htmlFor="">Confirm Password</label>
              <input type="text" placeholder="Confirm Password" />
            </div>
          </div>
          <div className="submit-box">
            <input type="submit" value="Create Account" />
          </div>
        </form>
        <div className="signup-image-container">
          <img
            src="https://study-notion-five-mu.vercel.app/static/media/signup.acaf50bcb11d9aec44b4.webp"
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default Signup;
