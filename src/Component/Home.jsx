import React from "react";
import "./Style/home.css";
import { FaArrowRight } from "react-icons/fa";
import GradientText from "./GradientText";

const Home = () => {
  return (
    <>
      <div className="home-page">
        <div className="landing-page">
          <div className="landing-page-content-box">
            <div className="instructor-btn">Become an Instructor <FaArrowRight /></div>
            <h1>
              Empower Your Future with <GradientText tag="Coding Skills" />
            </h1>
            <p>
              With our online coding courses, you can learn at your own pace,
              from anywhere in the world, and get access to a wealth of
              resources, icluding hands-on projects, quizzes, and personaized
              feedback from instructors.
            </p>
            <div className="landing-page-btn-container">
              <button className="landing-page-btn">Learn More</button>
              <button className="landing-page-btn">Book a Demo</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
