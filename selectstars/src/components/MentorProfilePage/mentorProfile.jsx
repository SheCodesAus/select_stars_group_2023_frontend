import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
// import { mentors } from "../../../dummydata";
import MentorCard from "../MentorCard/mentorCard";
import './mentorProfile.css';


function MentorProfile() {
  const [mentorsData, setMentorData] = useState( [] ); 

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}mentor/`)
    .then((results) => {
      
      return results.json();
    }).then((data) => {
      setMentorData(data);
    });

    
  }, []);

  return (
    <div className="mentorProfilePage">
      <div className="mentorProfilePageBackground"></div>
      {mentorsData.map((mentor, key) => {
        return <MentorCard key={key} mentorsData={mentor} />
      })}

    </div>


  );
}

export default MentorProfile;


