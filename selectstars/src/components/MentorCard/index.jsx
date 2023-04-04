import{ useState, useEffect }from "react";
import React from "react";
import { Link } from "react-router-dom";
import './card.css';  


function MentorCard(props) {
    const { mentorsData } = props;
    const { techStack } = props;

   

    let tech_stack_names = [];

    for (let i = 0; i < mentorsData.mentor_tech_stack.length ; i ++){
      for (let j = 0; j < techStack.length ; j++) {
        if(mentorsData.mentor_tech_stack[i] == techStack[j].id){
          tech_stack_names.push(techStack[j].name);
        }
      }
    }

    

return (

<div className="mentorProfile_card">
  <Link to={`/mentordetails/${mentorsData.id}`}>
    <ol>
      <h3><img src={mentorsData.image} alt="Profile picture" /></h3>

      <h3 class="mentorname">{mentorsData.first_name} {mentorsData.last_name}</h3>
      <h3>Tech Stack: {tech_stack_names}</h3>
      <h3>Mentor type: {mentorsData.level}</h3>
      {/* <h5>Location:</h5><span>{mentorsData.location}</span> */}
      <h3>Willing to travel: {mentorsData.can_travel}</h3>
    {/* <h3>Offer to Position:  {mentorsData.location}</h3> */}
    </ol>
  </Link>
</div>

);}

export default MentorCard;
