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

  // return (
  //   <div className="allMentorPage">
  //     <div className="allMentorPage-Background"></div>
  //     {mentorsData.map((mentor, key) => {
  //       return <MentorCard key={key} mentorsData={mentor} />
  //     })}
  //   </div>
  // );
}

export default MentorProfile;
