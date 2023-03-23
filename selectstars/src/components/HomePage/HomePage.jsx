import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom"
import './HomePage.css';

function HomePage() {
    const [eventData, setEventData] = useState({ mentors: [] });
    const { id } = useParams();

    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_URL}event/${id}`)
            .then((results) => {
                return results.json();
            })
            .then((data) => {
                setEventData(data)
            })
    }, []);

    return (
        <div className="home-page">
            <h2>{eventData.title}</h2>
            <h4>Event Type: {eventData.event_type}</h4>
            <h4>City: {eventData.location}</h4>
            <h3>Description: {eventData.description}</h3>
            <h3>Start time: {eventData.start_date}</h3>
            <h3>End time: {eventData.end_date}</h3>
            <h4>Mentors: {eventData.end_date}</h4>
            <ul>
                {eventData.mentors.map((mentorsData, key) => {
                    return <li key={key}>{mentorsData.amount}</li>;
                })}
            </ul>
        </div>
    )
};


export default HomePage;