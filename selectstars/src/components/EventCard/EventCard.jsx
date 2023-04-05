import { useState, useEffect } from "react";
import './EventCard.css';
import { Link } from 'react-router-dom';



function EventCard(props) {
  const { eventData } = props

  function handleSubmit(event) {
    event.preventDefault();


  }


  return (
    <div className="event-card">
      <img src={eventData.image}></img>
      <h2>{eventData.title}</h2>
      <h2>{eventData.event_type}</h2>
      <h4>{eventData.location}</h4>
      <h4>{eventData.description}</h4>
      <h4>Start Date{eventData.start_date}</h4>
      <h4>End Date: {eventData.end_date}</h4>
      {/* <h4>Mentors: {eventData.mentors}</h4> */}

        <div className='Assign-Mentor'>
          <Link to='/mentorlist'>
            <button type="submit" onClick={handleSubmit}>Assign Mentor</button>
          </Link>
        </div>

</div>

  );
}

export default EventCard;


      // {<ul>
      //   {eventData.mentors.map((mentorsData, key) => {
      //     return <li key={key}>{mentorsData.amount}</li>;
      //   })}
      // </ul> */}

      // {