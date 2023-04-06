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

  let can_travel = mentorsData.can_travel ? "Yes" : "No";
    console.log(can_travel)
return (

<div className="mentorProfile_card">
  <Link to={`/mentordetails/${mentorsData.id}`}>
      <h3><img src={mentorsData.image} alt="Profile picture" /></h3>
      <section className="mentorCardText">
        <h3 className="mentorname">{mentorsData.first_name} {mentorsData.last_name}</h3>
        <div>
          <h6>Tech Stack:</h6>
          <span>{tech_stack_names}</span>
        </div>
        <div>
          <h6>Mentor type:</h6>
          <span>{mentorsData.level}</span>
        </div>
        <div>
          <h6>Location:</h6>
          <span>{mentorsData.location}</span>
        </div>
        <div>
          <h6>Willing to travel:</h6>
          <span>{can_travel}</span>
        </div>
      </section>
  </Link>
</div>

);}

export default MentorCard;
