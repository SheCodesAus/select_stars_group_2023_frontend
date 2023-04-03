// import { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import MentorCard from "../MentorCard/mentorCard";
import './allMentors.css';


  
function MentorProfiles() {
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

        {/* <input type="search" 
          id="search" 
          value={search} 
          onChange={handleChange} 
          placeholder="Search by event type" 
          className="searchFilter">
        </input>
      
      <div className="all-mentors-page">
          {filterData.map((event, key) => {
              return <EventCard key={key} eventData={event} />
          })}

      </div> */}
  </div >
  );
};

export default MentorProfiles;
