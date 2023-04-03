import React, { useState } from "react";
import MentorCard from "../MentorCard/mentorCard";
import './mentorDetails.css'; 
// import { mentors } from "../../../dummydata";


function MentorDetails() {
  const [completedSteps, setCompletedSteps] = useState([]);

  const handleStepClick = (stepNumber) => {
    if (completedSteps.includes(stepNumber)) {
      setCompletedSteps(completedSteps.filter((step) => step !== stepNumber));
    } else {
      setCompletedSteps([...completedSteps, stepNumber]);
    }
  };

  return (
    <div className="mentor-details-container">
      <h2>A Mentor's Details</h2>
      <div className="step-container">
        <button
          className={`step-button ${completedSteps.includes(1) ? "completed" : ""}`}
          onClick={() => handleStepClick(1)}
        >
          1
        </button>
        <button
          className={`step-button ${completedSteps.includes(2) ? "completed" : ""}`}
          onClick={() => handleStepClick(2)}
        >
          2
        </button>
        <button
          className={`step-button ${completedSteps.includes(3) ? "completed" : ""}`}
          onClick={() => handleStepClick(3)}
        >
          3
        </button>
        <button
          className={`step-button ${completedSteps.includes(4) ? "completed" : ""}`}
          onClick={() => handleStepClick(4)}
        >
          4
        </button>
        <button
          className={`step-button ${completedSteps.includes(5) ? "completed" : ""}`}
          onClick={() => handleStepClick(5)}
        >
          5
        </button>
        <button
          className={`step-button ${completedSteps.includes(6) ? "completed" : ""}`}
          onClick={() => handleStepClick(6)}
        >
          6
        </button>
      </div>
    </div>
  );
}

export default MentorDetails;