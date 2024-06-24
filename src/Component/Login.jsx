import React, { useState } from "react";
import "./Style/contact.css";
import "./Style/signup.css";
import { StroreFunction } from "../Store/store";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const {
    apiUrl,
    setToken,
    setUserName,
    setDialogAppear,
    setDialogMessage,
    setDialogError,
  } = StroreFunction();
  const loginUser = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      setDialogMessage("Add data please");
      setDialogError(true);
      setDialogAppear(true);
      return;
    }
    try {
      const response = await fetch(`${apiUrl}/user/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });
      const loginData = await response.json();
      setUserName(loginData.userName);
      setToken(loginData.token);
      setDialogMessage(loginData.message);
      setDialogError(false);
      setDialogAppear(true);
    } catch (error) {
      setDialogMessage("Something went wrong");
      setDialogError(true);
      setDialogAppear(true);
    }
  };
  return (
    <>
      <div className="signup-page login-page">
        <form className="signup-form contact-form" onSubmit={loginUser}>
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
