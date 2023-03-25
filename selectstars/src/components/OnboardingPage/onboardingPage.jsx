import React, { useState } from "react";
import './onboardingPage.css'; 


function OnboardingSteps() {

  const checkboxData = [
    { id: '1', label: 'Invited to Interview' },
    { id: '2', label: 'Offered Position' },
    { id: '3', label: 'Sent Contract' },
    { id: '4', label: 'Received Contract' },
    { id: '5', label: 'Invite to Event' },
    { id: '6', label: 'Onboard Complete' },
  ];

  const [checkedValues, setCheckedValues] = useState([]);
  const [lastCheckedIndex, setLastCheckedIndex] = useState(-1);

  const handleCheckboxChange = (event) => {
    const value = parseInt(event.target.value);
    if (lastCheckedIndex === -1 || value === lastCheckedIndex + 1) {
      if (checkedValues.includes(value)) {
        setCheckedValues(checkedValues.filter((v) => v !== value));
        setLastCheckedIndex(-1);
      } else {
        setCheckedValues([...checkedValues, value]);
        setLastCheckedIndex(value);
      }
    }
  };

  return (
    <form>
      {checkboxData.map((checkbox, index) => (
        <label key={checkbox.id} className="checkbox-label">
          <input
            type="checkbox"
            value={index}
            checked={checkedValues.includes(index)}
            onChange={handleCheckboxChange}
          />
          {checkbox.label}
        </label>
      ))}
    </form>
  );
};

export default OnboardingSteps;
