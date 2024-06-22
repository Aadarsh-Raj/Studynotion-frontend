import React from "react";
import "./Style/about.css";
import GradientText from "./GradientText";
const About = () => {
  return (
    <>
      <div className="about-page">
        <div className="about-landing-page">
          <div className="about-landing-first-container">
            <div className="about-landing-content-box">
              <h1>
                Driving Innovation in Online Education for a{" "}
                <GradientText tag="Brighter Future" />{" "}
              </h1>
              <p>
                Studynotion is all the forefront of driving innovation in online
                education. We're passionate about creating a brighter future by
                offering cutting-edge courses, leveraging emerging technologies,
                and nurturing a vibrant learning community.
              </p>
            </div>
          </div>
          <div className="about-lading-image-box">
            <img
              src="https://study-notion-five-mu.vercel.app/static/media/aboutus1.86606deea209badf5925.webp"
              alt=""
            />
            <img
              src="https://study-notion-five-mu.vercel.app/static/media/aboutus2.0a1cd797ce3a69e81830.webp"
              alt=""
            />
            <img
              src="https://study-notion-five-mu.vercel.app/static/media/aboutus3.f5cfba861877ea03735d.webp"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
