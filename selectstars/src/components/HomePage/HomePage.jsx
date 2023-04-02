import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom"
import './HomePage.css';
import EventCard from '../EventCard/EventCard';

function HomePage(props) {
    const [eventData, setEventData] = useState([]);
    const [filterData, setFilterData] = useState([]);
    const { id } = useParams();
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [search, setSearch] = useState("")

    useEffect(() => {
        const isLoggedIn = true;
        if (!isLoggedIn) {
            history.push('/login');
        } else {
            setIsLoggedIn(true);
            fetch(`${import.meta.env.VITE_API_URL}event/`)
                // fetch(`${import.meta.env.VITE_API_URL}events/${id}`)
                .then((results) => {
                    return results.json();
                })
                .then((data) => {
                    setEventData(data)
                })
        }
    }, []);

    useEffect(() => {
        if (search == "") {
            setFilterData(eventData)
        } else if (search.length > 0) {
            const data = eventData.filter((event) => event.event_type.toLowerCase().includes(search.toLowerCase()))
            setFilterData(data)
        }
    }, [search, eventData]);

    const handleChange = (event) => {
        setSearch(event.target.value)
    }

    return isLoggedIn ? (
        <div className="home-page">
            <div className="background-image"></div>
            <div className="title">
                <h1>All Events</h1>
            </div>
            <input type="search" id="search" value={search} onChange={handleChange} placeholder="Search by event type" className="searchFilter">
            </input>
            <div className="Homepage">
                {filterData.map((event, key) => {
                    return <EventCard key={key} eventData={event} />
                })}

            </div>
        </div >
    ) : null;
};


export default HomePage;