import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './createEventForm.css';

function CreateEventForm() {
    const [eventDetails, setEventDetails] = useState({
        eventName: '',
        eventDate: '',
        eventLocation: '',

    });

    const navigate = useNavigate();

    const handleChange = (event) => {
        const { id, value } = event.target;
        setEventDetails((prevDetails) => ({
            ...prevDetails,
            [id]: value
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Entering event details', eventDetails);

    };

    return (
        <div className="event-page">
            <h1>Create an event</h1>
            <form>
                <div className="eventField">
                    <label htmlFor='image'>Image:</label>
                    <input type="url" placeholder="Link of image" id="event_image" onChange={handleChange} />
                </div>

                <div className="eventField">
                    <label htmlFor='event_name'>Event Name:</label>
                    <input type="text" placeholder="Enter name of event" id="event_name" onChange={handleChange} />
                </div>

                <div className="eventField">
                    <label htmlFor='event_date'>Event Date:</label>
                    <input type="date" placeholder="Enter date of event" id="event_date" onChange={handleChange} />
                </div>

                <div className="eventField">
                    <label htmlFor='location'>Location:</label>
                    <input type="text" placeholder="Enter location" id="location" onChange={handleChange} />
                </div>

                <div className="eventField">
                    <label htmlFor='description'>Description:</label>
                    <input type="text" placeholder="Enter description" id="description" onChange={handleChange} />
                </div>

                <div className="eventField">
                    <label htmlFor='assigned_mentor'>Mentors Assigned:</label>
                    <input type="text" placeholder="Assign a mentor" id="assigned_mentor" onChange={handleChange} />
                </div>

                <div className="eventField">
                    <label htmlFor='start_date'>Start time:</label>
                    <input type="datetime-local" placeholder="Start time" id="start_date" onChange={handleChange} />
                </div>

                <div className="eventField">
                    <label htmlFor='end'>End time:</label>
                    <input type="datetime-local" placeholder="End time" id="end_date" onChange={handleChange} />
                </div>

                <div className='eventField'>
                    <button type="submit" onClick={handleSubmit}>Create Event</button>
                </div>
            </form>
        </div>

    )

};

export default CreateEventForm 