import React, { useState } from "react";
import "./Style/addcourse.css"
import { Stepper, Step, StepButton, Button, Typography } from "@mui/material";
import AddCourse1 from "./AddCourse1";
import AddCourse2 from "./AddCourse2";
import AddCourse3 from "./AddCourse3";
import "./Style/addcoursecontainer.css";
import { StroreFunction } from "../Store/store";
import { useNavigate } from "react-router-dom";
const steps = ["Step One", "Step Two", "Step Three"];

const AddCourse = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [completed, setCompleted] = useState({});
  const navigate = useNavigate();
  const {
    addCourse1,
    addDescription,
    addLearning,
    coursePrice,
    courseImage,
    courseImagPreview,
    setDialogAppear,
    setDialogMessage,
    setDialogError,
    apiUrl,
    token,
    setAddCourse1,
    setAddDescription,
    setAddLearning,
    setCoursePrice,
    setCourseImage,
    setCourseImagePreview,
    setLoader
  } = StroreFunction();
  const handleStep = (step) => () => {
    setActiveStep(step);
  };

  const handleComplete = (e) => {
    e.preventDefault();
    const newCompleted = completed;
    newCompleted[activeStep] = true;
    setCompleted(newCompleted);
    if (activeStep < steps.length - 1) {
      setActiveStep(activeStep + 1);
    } else {
      if (
        addCourse1 == "" ||
        addDescription == "" ||
        addLearning == "" ||
        coursePrice < 0 ||
        courseImagPreview.length < 1
      ) {
        setDialogMessage("Please add all required (*) fields");
        setDialogError(true);
        setDialogAppear(true);
        handleReset();
        return;
      }
      addCourseToDb();
    }
  };

  const addCourseToDb = async () => {
    const formData = new FormData();
    formData.append("courseName", addCourse1);
    formData.append("courseDescription", addDescription);
    formData.append("whatYouWillLearn", addLearning);
    formData.append("price", coursePrice);
    courseImage.forEach((file) => {
      formData.append("thumbnail", file);
    });
    setLoader(true)
    try {
      const response = await fetch(`${apiUrl}/course/create`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      });

      const data = await response.json();
      if (data.success) {
        setAddCourse1("");
        setAddDescription("");
        setAddLearning("");
        setCoursePrice(0);
        setCourseImage([]);
        setCourseImagePreview([]);
        setLoader(false)
        setDialogMessage(data.message);
        setDialogError(false);
        setDialogAppear(true);
        handleReset();
        navigate(`/addcourse/${token}`);
      } else {
        setLoader(false)
        setDialogMessage(data.message);
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

  const handleReset = () => {
    setActiveStep(0);
    setCompleted({});
  };

  const isStepComplete = (step) => completed[step];

  const renderStepContent = (step) => {
    switch (step) {
      case 0:
        return <AddCourse1 />;
      case 1:
        return <AddCourse2 />;
      case 2:
        return <AddCourse3 />;
      default:
        return <Typography>Unknown step</Typography>;
    }
  };
  return (
    <>
      <div className="course-creation-container">
        <Stepper
          nonLinear
          activeStep={activeStep}
          sx={{
            "& .MuiStepLabel-label": {
              color: "white", // Change label color to white
            },
            "&.Mui-completed .MuiStepLabel-label": {
              color: "white", // Change completed label color to white
            },
          }}
        >
          {steps.map((label, index) => (
            <Step key={label} completed={isStepComplete(index)}>
              <StepButton onClick={handleStep(index)}>{label}</StepButton>
            </Step>
          ))}
        </Stepper>
        <div>
          {renderStepContent(activeStep)}
          <div className="add-course-nav-container">
            <Button
              disabled={activeStep === 0}
              onClick={() => setActiveStep(activeStep - 1)}
            >
              Back
            </Button>
            {completed[activeStep] ? (
              <Typography variant="caption" style={{ display: "inline-block" }}>
                Step {activeStep + 1} already completed
              </Typography>
            ) : (
              <Button
                variant="contained"
                color="primary"
                onClick={handleComplete}
              >
                {activeStep === steps.length - 1 ? "Finish" : "Complete Step"}
              </Button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default AddCourse;
