import React, { useState } from "react";
import MentorCard from "../MentorCard/mentorCard";
import './mentorDetails.css'; 
import { mentors } from "../../../dummydata";


function MentorDetails() {
  // const checkboxData = [
  //   { id: '1', label: 'Invited to Interview' },
  //   { id: '2', label: 'Offered Position' },
  //   { id: '3', label: 'Sent Contract' },
  //   { id: '4', label: 'Received Contract' },
  //   { id: '5', label: 'Invite to Event' },
  //   { id: '6', label: 'Onboard Complete' },
  // ];

  // const [checkedValues, setCheckedValues] = useState([]);
  // const [lastCheckedIndex, setLastCheckedIndex] = useState(-1);
  // const [selectedMentorIndex, setSelectedMentorIndex] = useState(-1);

  // const handleCheckboxChange = (event) => {
  //   const value = parseInt(event.target.value);
  //   if (lastCheckedIndex === -1 || value === lastCheckedIndex + 1) {
  //     if (checkedValues.includes(value)) {
  //       setCheckedValues(
  //         checkedValues.filter((v) => v !== value)
  //       );
  //       setLastCheckedIndex(
  //         checkedValues.length > 1
  //           ? checkedValues[checkedValues.length - 2]
  //           : -1
  //       );
  //     } else {
  //       setCheckedValues([...checkedValues, value]);
  //       setLastCheckedIndex(value);
  //     }
  //     setSelectedMentorIndex(-1);
  //   }
  // };
  // const handleMentorCardClick = (index) => {
  //   if (index === selectedMentorIndex) {
  //     setSelectedMentorIndex(-1);
  //   } else {
  //     setSelectedMentorIndex(index);
  //   }
  // };

  // return (
  //   <div className="onboarding-container">
  //     <form>
  //       {checkboxData.map((checkbox, index) => (
  //         <label key={checkbox.id} className="checkbox-label">
  //           <input
  //             type="checkbox"
  //             value={index}
  //             checked={checkedValues.includes(index)}
  //             onChange={handleCheckboxChange}
  //           />
  //           {checkbox.label}
  //         </label>
  //       ))}
  //     </form>

  //     <div className="mentors-container">
  //       {mentors.map((mentorData, index) => (
  //         <MentorCard key={index} mentorData={mentorData} 
  //         selected={index === selectedMentorIndex}
  //         onClick={() => handleMentorCardClick(index)}/>
  //       ))}
  //     </div>
  //   </div>
  // );
};


export default MentorDetails;