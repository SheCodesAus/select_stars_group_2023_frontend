import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom"
import './HomePage.css';

function HomePage(props) {
    const { eventData } = props
    // const [eventData, setEventData] = useState({ mentors: [] });
    // const { id } = useParams();
    // const [isLoggedIn, setIsLoggedIn] = useState(false);

    // useEffect(() => {
    //     const isLoggedIn = true;
    //     if (!isLoggedIn) {
    //         history.push('/login');
    //     } else {
    //         setIsLoggedIn(true);
    //         fetch(`${import.meta.env.VITE_API_URL}event/${id}`)
    //             .then((results) => {
    //                 return results.json();
    //             })
    //             .then((data) => {
    //                 setEventData(data)
    //             })
    //     }
    // }, []);

    // return isLoggedIn ? (

    return (
        <div className="home-page">
            <div className="title">
                <h1>All Events</h1>
            </div>
            <div className="event-card">
                <h2>Event: {eventData.image}</h2>
                <h2>Event: {eventData.event_type}</h2>
                <h4>City: {eventData.location}</h4>
                <h4>Description: {eventData.description}</h4>
                <h4>Start time: {eventData.start_date}</h4>
                <h4>End time: {eventData.end_date}</h4>
                {/* <h4>Mentors: {eventData.mentors}</h4> */}
                {/* <ul>
                    {eventData.mentors.map((mentorsData, key) => {
                        return <li key={key}>{mentorsData.amount}</li>;
                    })}
                </ul> */}
            </div>
        </div >
    )
    // ) : null;
};


export default HomePage;