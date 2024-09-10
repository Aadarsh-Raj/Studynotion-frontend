import React from "react";
import "./Style/contact.css";
import { HiChatAlt2 } from "react-icons/hi";
import { IoMdGlobe } from "react-icons/io";
import { IoIosCall } from "react-icons/io";
import GradientText from "./GradientText";

const Contact = () => {
  return (
    <>
      <div className="contact-page">
        <div className="contact-left">
          <div className="contact-content-box">
            <h3>
              <HiChatAlt2 /> Chat on us
            </h3>
            <p>Our friendly team is here to help</p>
            <p>Info@studynotion.com</p>
          </div>
          <div className="contact-content-box">
            <h3>
              <IoMdGlobe />
              Visit us
            </h3>
            <p>Come and say hello at our office HQ.</p>
            <p>
              Akshay Nagar 1st Block 1st Cross, Rammurthy nagar,
              Bangalore-560016
            </p>
          </div>
          <div className="contact-content-box">
            <h3>
              <IoIosCall />
              Call us
            </h3>
            <p>Mon - Fri From 8am to 5am</p>
            <p>+91 123 456 7890</p>
          </div>
        </div>
        <div className="contact-right">
          <form action="" className="contact-form" >
            <h1>Got a Idea? We've got the skills. <GradientText tag="Let's team up" /></h1>
            <p>Tell us more about yourself and what you're got in mind</p>
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
            <div className="phone-box phone-box-item">
              <label htmlFor="">Phone Number</label>
              <input
                type="tel"
                pattern="[0-9]{10}"
                placeholder="Enter your phone number"
              />
            </div>
            <div className="message-box form-box-item">
              <label>Message</label>
              <textarea
                name=""
                id=""
                placeholder="Enter your message here"
                rows={10}
                cols={60}
              ></textarea>
            </div>
            <div className="submit-box">
                <input type="submit" />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
