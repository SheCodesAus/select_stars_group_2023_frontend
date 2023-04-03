import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import MentorCard from "../MentorCard/mentorCard";
import './allMentors.css';


  
function MentorProfile() {
  // const [mentorsData, setMentorData] = useState( [] ); 

  // useEffect(() => {
  //   fetch(`${import.meta.env.VITE_API_URL}mentor/`)

  //   .then((results) => {
      
  //     return results.json();
  //   }).then((data) => {
  //     setMentorData(data);
  //   });
  // }, []);

  return (
    <div className="allMentors-page">
  
        <div className="background-image"></div>
  
        <div className="allMentorsPage-title">
          <h1>All Mentors</h1>
        </div>
        </div>
        );
};

export default MentorProfile;
