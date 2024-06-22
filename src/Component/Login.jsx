import React from "react";
import "./Style/contact.css";
import "./Style/signup.css";
const Login = () => {
  return (
    <>
      <div className="signup-page login-page">
        <form className="signup-form contact-form">
          <h1>Welcome Back</h1>
          <p className="signup-heading-para">
            Build skills for today, tomorrow and beyond.{" "}
            <span>Education to future-proof your career.</span>
          </p>
          <div className="email-box form-box-item">
            <label htmlFor="">Email Address</label>{" "}
            <input type="text" placeholder="Enter email address" />
          </div>

          <div className="email-box form-box-item">
            <label htmlFor="">Password</label>{" "}
            <input type="password" placeholder="Enter password" />
          </div>
          <div className="submit-box">
            <input type="submit" value="Login Account" />
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

export default Login;
