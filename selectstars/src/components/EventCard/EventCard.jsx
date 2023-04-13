import { useState, useEffect } from "react";
import './EventCard.css';
import { Link } from 'react-router-dom';
import dayjs from "dayjs";



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
    // console.log(typeof(eventData.start_date))

    let startDate = dayjs(eventData.start_date).format("h:mma, DD MMMM YY");
    let endDate = dayjs(eventData.end_date).format("h:mma, DD MMMM YY");
  return (
    <div className="event-card">
      <img src={eventData.image}></img>
      <h2>{eventData.title}</h2>

      <div className="event_type">{eventData.event_type}</div>
      <div className="info-heading">{eventData.location}</div>
      <div className="description">{eventData.description}</div>
      <h6>Tech Stack:</h6><span> <div className="info">
        {tech_stack_names.map((tech_stack, key)=> {
          return (
            <li key={key}>{`${tech_stack} `}</li>
          )
        })} 
        </div></span>


        <h6>Mentors:</h6>
          <span> 

          {mentor_names.length == 0 ? (

          <div className="info no-mentor">No Mentors assigned to event yet</div>

          ) : (
            <div className="info">
              {mentor_names.map((names, key)=> {
              return (
                <li key={key}>{`${names} `}</li>
              )
              })} 

            </div>
            
          )}
           
          </span>
        <div className="date">
          <div className="info-heading">Start Date: <div className="info-date">{startDate}</div></div>

        </div>
        <div className="date">
        <div className="info-heading">End Date: <div className="info-date">{endDate}</div></div>

        </div>
      
     

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