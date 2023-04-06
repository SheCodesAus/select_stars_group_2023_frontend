import { useState, useEffect } from "react";
import './EventCard.css';
import { Link } from 'react-router-dom';



function EventCard(props) {
  const { eventData } = props;
  
  const [techStack, setTechStack] = useState([]);
  const [mentorData, setMentorData ] = useState([]);

   
  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}tech_stack/`)
    .then((results) => {
        return results.json();
    })
    .then((data) => {
        setTechStack(data);
    })
  }, []);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}mentor/`)
    .then((results) => {
        return results.json();
    })
    .then((data) => {
        setMentorData(data);
    })
  }, []);

    let tech_stack_names = [];

    for (let i = 0; i < eventData.event_tech_stack.length ; i ++){
      for (let j = 0; j < techStack.length ; j++) {
        if(eventData.event_tech_stack[i] == techStack[j].id){
          tech_stack_names.push(techStack[j].name);
        }
      }
    }

    let mentor_names = [];

    for (let i = 0; i < eventData.mentors.length ; i ++){
      for (let j = 0; j < mentorData.length ; j++) {
        if(eventData.mentors[i] == mentorData[j].id){
          mentor_names.push(mentorData[j].first_name);
        }
      }
    }
    console.log(mentor_names)
  return (
    <div className="event-card">
      <img src={eventData.image}></img>
      <h2>{eventData.title}</h2>
      <h2>{eventData.event_type}</h2>
      <h4>{eventData.location}</h4>
      <h4>{eventData.description}</h4>
      <h6>Tech Stack:</h6><span>{tech_stack_names}</span>
      <h6>Mentors:</h6><span>{mentor_names}</span>
      <h4>Start Date: {eventData.start_date}</h4>
      <h4>End Date: {eventData.end_date}</h4>
      {/* <h4>Mentors: {eventData.mentors}</h4> */}

        <div className='Assign-Mentor'>
        <Link to="/mentorlist">
        <button>Assign a Mentor</button>
        </Link>

        </div>

</div>

  );

  };

export default EventCard;


      // {<ul>
      //   {eventData.mentors.map((mentorsData, key) => {
      //     return <li key={key}>{mentorsData.amount}</li>;
      //   })}
      // </ul> */}

      // {