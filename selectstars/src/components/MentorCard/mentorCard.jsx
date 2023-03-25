import{ useState, useEffect }from "react";

function MentorCard(props) {
    const {mentorData} = props
    


return (

<div className="mentorProfile-card">
 
  <h3><img src={mentorData.image}/></h3>
  <h3>Tech Stack{mentorData.skills}</h3>
  <h3>Offer to Position {mentorData.location}</h3>
  <h3>Status {mentorData.events}</h3>
  
</div>

);}  
  export default MentorCard;
