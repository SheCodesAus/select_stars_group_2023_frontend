import { useState, useEffect } from "react";
import './EventCard.css';

function EventCard(props) {
  const { eventData } = props


  return (
    <div className="event-card">
      <img src={eventData.image}></img>
      <h2>{eventData.event_type}</h2>
      <h4>City: {eventData.location}</h4>
      <h4>Description: {eventData.description}</h4>
      <h4>Start time: {eventData.start_date}</h4>
      <h4>End time: {eventData.end_date}</h4>
      <h4>Mentors: {eventData.mentors}</h4>
      <ul>
        {eventData.mentors.map((mentorsData, key) => {
          return <li key={key}>{mentorsData.amount}</li>;
        })}
      </ul>
    </div>

  );
}

export default EventCard;
