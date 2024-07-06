import React, { useState } from "react";
import "./Style/contact.css";
import "./Style/signup.css";
import { StroreFunction } from "../Store/store";
import { useNavigate } from "react-router-dom";
const Signup = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cPassword, setCPassword] = useState("");
  const [role, setRole] = useState(true);
  
  const {
    apiUrl,
    setToken,
    setUserName,
    setDialogAppear,
    setDialogMessage,
    setDialogError,
    setLoader
  } = StroreFunction();
  const navigate = useNavigate();
  const loginUser = async (e) => {
    e.preventDefault();
    if (!email || !password || !firstName || !lastName) {
      setDialogMessage("Add all data please");
      setDialogError(true);
      setDialogAppear(true);
      return;
    }
    if (password !== cPassword) {
      setDialogMessage("Password didn't matched");
      setDialogError(true);
      setDialogAppear(true);
      return;
    }
    const userInputs = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
      role: role ? "student" : "instructor",
    };
    setLoader(true)
    try {
      const response = await fetch(`${apiUrl}/user/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...userInputs,
        }),
      });
      const data = await response.json();

      setDialogMessage(data.message);
      setDialogAppear(true);

      if (!data.success) {
        setDialogError(true);
        return;
      }

      if (data.success) {
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
          setLoader(false)
          setDialogMessage(loginData.message);
          setDialogAppear(true);
          if (loginData.success) {
            setDialogError(false);
          } else {
            setDialogError(true);
            return;
          }
          setUserName(loginData.userName);
          setToken(loginData.token)
          localStorage.setItem("studynotion", loginData.token);
          navigate("/");
        } catch (error) {
          setDialogMessage("Something went wrong");
          setDialogError(true);
          setDialogAppear(true);
        }
      } else {
        setDialogMessage("Unable to Login");
        setDialogError(true);
        setDialogAppear(true);
      }
    } catch (error) {
      setLoader(false);
      setDialogError(true);
      setDialogMessage("Please try again later.");
      setDialogAppear(true);
    }
  };
  return (
    <>
      <div className="signup-page">
        <form className="signup-form contact-form" onSubmit={loginUser}>
          <h1>Join the millions learning to code with StudyNotion for free</h1>
          <p className="signup-heading-para">
            Build skills for today, tomorrow and beyond.{" "}
            <span>Education to future-proof your career.</span>
          </p>
          <div className="user-type-switch form-box-item">
            <div className="toggle-button-cover">
              <div
                id="button-3"
                className="button r"
                onClick={(e) => {
                  setRole((prev) => !prev);
                }}
              >
                <input className="checkbox" type="checkbox" />
                <div className="knobs"></div>
                <div className="layer"></div>
              </div>
            </div>
          </div>
          <div className="form-name-container">
            <div className="first-name-box form-box-item">
              <label htmlFor="">First Name</label>{" "}
              <input
                type="text"
                placeholder="Enter first name"
                onChange={(e) => {
                  setFirstName(e.target.value);
                }}
              />
            </div>
            <div className="last-name-box form-box-item">
              <label htmlFor="">Last Name</label>
              <input
                type="text"
                placeholder="Enter last name"
                onChange={(e) => {
                  setLastName(e.target.value);
                }}
              />
            </div>
          </div>
          <div className="email-box form-box-item">
            <label htmlFor="">Email Address</label>{" "}
            <input
              type="text"
              placeholder="Enter email address"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>

          <div className="form-name-container">
            <div className="first-name-box form-box-item">
              <label htmlFor="">Create Password</label>{" "}
              <input
                type="password"
                placeholder="Enter Password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </div>
            <div className="last-name-box form-box-item">
              <label htmlFor="">Confirm Password</label>
              <input
                type="text"
                placeholder="Confirm Password"
                onChange={(e) => {
                  setCPassword(e.target.value);
                }}
              />
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
            loading="lazy"
          />
        </div>
      </div>
    </>
  );
};

export default Signup;
