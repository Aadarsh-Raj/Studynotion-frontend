import React from "react";
import "./ProgressBar.css"; // Import your CSS file for styling

const ProgressBar = (props) => {
  return (
    <div className="progress-container">
      <div className="progress-bar" style={{ width: `${props.progress}%` }}>
      </div>
    </div>
  );
};

export default ProgressBar;
