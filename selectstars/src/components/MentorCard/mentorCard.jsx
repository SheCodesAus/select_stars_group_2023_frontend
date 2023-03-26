import{ useState, useEffect }from "react";
import './mentorCard.css';  


function MentorCard(props) {
    const {mentorData} = props
    


return (

<div className="mentorProfile_card">
  <ol>
  
  <h3><img src={mentorData.image} alt="Profile picture" /></h3>
  <h3>Name: {mentorData.first_name} {mentorData.last_name}</h3>
  <h3>Tech Stack: {mentorData.skills}</h3>
  <h3>Offer to Position:  {mentorData.location}</h3>
  <h3>Status: {mentorData.events}</h3>
  </ol>
</div>

);}

export default MentorCard;
