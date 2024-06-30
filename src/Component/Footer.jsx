import React from "react";
import "./Style/footer.css";
import { Link } from "react-router-dom";
import { FaSquareFacebook } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { FaSquareXTwitter } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io5";
import GradientText from "./GradientText"
const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="footer-direct-child">
          <div className="footer-box">
            <div className="logo-container">
              <Link to="/">
                <span>S</span>tudyNotion
              </Link>
            </div>
           <div className="footer-box-down">
           <h5>Company</h5>
            <Link to="/about">
              <p>About</p>
            </Link>
            <Link to="/signup">
              <p>Careers</p>
            </Link>
            <Link to="/">
              <p>Affliates</p>
            </Link>
            <div className="social-media-icons">
            <FaSquareFacebook />
            <FcGoogle />
            <FaSquareXTwitter />
            <IoLogoYoutube />

            </div>
           </div>
          </div>
          <div className="footer-box">
            <div className="footer-box-up">
              <h5>Resources</h5>
              <Link to="/">
                <p>Articles</p>
              </Link>
              <Link to="/">
                <p>Blog</p>
              </Link>
              <Link to="/">
                <p>Chart Sheet</p>
              </Link>
              <Link to="/">
                <p>Code challenges</p>
              </Link>
              <Link to="/">
                <p>Docs</p>
              </Link>
              <Link to="/">
                <p>Projects</p>
              </Link>
              <Link to="/">
                <p>Videos</p>
              </Link>
              <Link to="/">
                <p>Workspaces</p>
              </Link>
            </div>
            <div className="footer-box-down">
              <h5>Support</h5>
              <Link to="/contact">
                <p>Help Center</p>
              </Link>
            </div>
          </div>
          <div className="footer-box">
            <div className="footer-box-up">
              <h5>Plans</h5>
              <Link to="/">
                <p>Paid memberships</p>
              </Link>
              <Link to="/">
                <p>For students</p>
              </Link>
              <Link to="/">
                <p>Business solutions</p>
              </Link>
            </div>
            <div className="footer-box-down">
              <h5>Community</h5>
              <Link to="/contact">
                <p>Forums</p>
              </Link>
              <Link to="/">
                <p>Chapters</p>
              </Link>
              <Link to="/">
                <p>Events</p>
              </Link>
            </div>
          </div>
        </div>
        <div className="hr-line">
          
        </div>
        <div className="footer-direct-child">
          <div className="footer-box">
            <div className="footer-box-up">
            <h5>Subjects</h5>
            <Link to="/">
              <p>AI</p>
            </Link>
            <Link to="/">
              <p>Cloud Computing</p>
            </Link>
            <Link to="/">
              <p>Code Foundations</p>
            </Link>
            <Link to="/">
              <p>Computer Science</p>
            </Link>
            <Link to="/">
              <p>Cybersecurity</p>
            </Link>
            <Link to="/">
              <p>Data Analytics</p>
            </Link>
            <Link to="/">
              <p>Data Visualization</p>
            </Link>
            <Link to="/">
              <p>Developer Tools</p>
            </Link>
            <Link to="/">
              <p>DevOps</p>
            </Link>
            <Link to="/">
              <p>Game Development</p>
            </Link>
            <Link to="/">
              <p>IT</p>
            </Link>
            <Link to="/">
              <p>Machine Learning</p>
            </Link>
            <Link to="/">
              <p>Math</p>
            </Link>
            <Link to="/">
              <p>Mobile Development</p>
            </Link>
            <Link to="/">
              <p>Web Design</p>
            </Link>
            <Link to="/">
              <p>Web Development</p>
            </Link>
            </div>
          </div>
          <div className="footer-box">
           <div className="footer-box-up">
           <h5>Languages</h5>
            <Link to="/">
              <p>Bash</p>
            </Link>
            <Link to="/">
              <p>C++</p>
            </Link>
            <Link to="/">
              <p>C#</p>
            </Link>
            <Link to="/">
              <p>Go</p>
            </Link>
            <Link to="/">
              <p>HTML & CSS</p>
            </Link>
            <Link to="/">
              <p>Java</p>
            </Link>
            <Link to="/">
              <p>JavaScript</p>
            </Link>
            <Link to="/">
              <p>Kotlin</p>
            </Link>
            <Link to="/">
              <p>PHP</p>
            </Link>
            <Link to="/">
              <p>Python</p>
            </Link>
            <Link to="/">
              <p>R</p>
            </Link>
            <Link to="/">
              <p>Ruby</p>
            </Link>
            <Link to="/">
              <p>SQL</p>
            </Link>
            <Link to="/">
              <p>Swift</p>
            </Link>
           </div>
          </div>
          <div className="footer-box">
           <div className="footer-box-up">
           <h5>Career building</h5>
            <Link to="/">
              <p>Career paths</p>
            </Link>
            <Link to="/">
              <p>Career services</p>
            </Link>
            <Link to="/">
              <p>Interview prep</p>
            </Link>
            <Link to="/">
              <p>Professional certification</p>
            </Link>
            <Link to="/">
              <p>-</p>
            </Link>
            <Link to="/catalog">
              <p>Full Catalog</p>
            </Link>
            <Link to="/blog">
              <p>Beta Content</p>
            </Link>
           </div>
          </div>
        </div>
      </footer>
        <div className="developer-footer">
          Created by <Link to="https://www.linkedin.com/in/aadarsh-raj-80b862216/"><GradientText tag="Aadarsh Raj" /> </Link>
        </div>
    </>
  );
};

export default Footer;
