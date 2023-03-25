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
            <div className="title">
                <h1>All Events</h1>
            </div>
            <div className="event-card">
                <h2>{eventData.title}</h2>
                <h4>Event Type: {eventData.event_type}</h4>
                <h4>City: {eventData.location}</h4>
                <h4>Description: {eventData.description}</h4>
                <h4>Start time: {eventData.start_date}</h4>
                <h4>End time: {eventData.end_date}</h4>
                <h4>Mentors: {eventData.end_date}</h4>
                <ul>
                    {eventData.mentors.map((mentorsData, key) => {
                        return <li key={key}>{mentorsData.amount}</li>;
                    })}
                </ul>
            </div>
        </div >
    )
};


export default HomePage;