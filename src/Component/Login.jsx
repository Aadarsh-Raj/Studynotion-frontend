import React, { useState } from "react";
import "./Style/contact.css";
import "./Style/signup.css";
import { StroreFunction } from "../Store/store";
import { useNavigate } from "react-router-dom";
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
    setLoader,
  } = StroreFunction();
  const navigate = useNavigate();
  const loginUser = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      setDialogMessage("Add data please");
      setDialogError(true);
      setDialogAppear(true);
      return;
    }
    setLoader(true);
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
      setLoader(false);
      setDialogMessage(loginData.message);
      setDialogAppear(true);
      if (loginData.success) {
        console.log(loginData)
        setDialogError(false);
        setUserName(loginData.userName);
        setToken(loginData.token);
        console.log(loginData.token)
      } else {
        setDialogError(true);
        return;
      }
      navigate("/");
    } catch (error) {
      setLoader(false);
      setDialogMessage(error);
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
            <input
              type="email"
              placeholder="Enter email address"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="email-box form-box-item">
            <label htmlFor="">Password</label>{" "}
            <input
              type="password"
              placeholder="Enter password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="submit-box">
            <input type="submit" value="Login Account" />
          </div>
        </form>
        <div className="signup-image-container">
          <img
            src="https://study-notion-five-mu.vercel.app/static/media/signup.acaf50bcb11d9aec44b4.webp"
            alt=""
            loading="lazy"
          />
        </div>
      </div>
    </>
  );
};

export default Login;
