import{ useState, useEffect }from "react";
import './mentorCard.css';  


function MentorCard(props) {
    const {mentorsData} = props
    


return (

<div className="mentorProfile_card">
  <ol>
  <h3>{mentorsData.first_name} {mentorsData.last_name}</h3>
  <h3><img src={mentorsData.image} alt="Profile picture" /></h3>
  <h3>Tech Stack: {mentorsData.skills}</h3>
  <h3>Offer to Position:  {mentorsData.location}</h3>
  <h3>Status: {mentorsData.events}</h3>
  </ol>
</div>

);}

export default MentorCard;
