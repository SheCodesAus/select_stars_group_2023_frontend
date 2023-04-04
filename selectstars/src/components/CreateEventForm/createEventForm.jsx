import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './createEventForm.css';

function CreateEventForm() {
    const [eventDetails, setEventDetails] = useState({
        eventName: '',
        eventDate: '',
        eventLocation: '',
        eventType:'',
        description:''

    });

    const navigate = useNavigate();

    const handleChange = (event) => {
        const { id, value } = event.target;
        setEventDetails((prevEventDetails) => ({
            ...prevEventDetails,
            [id]: value
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Entering event details', eventDetails);

    //    {postData().then((response)=>{
    //         if (response.detail == 'invalid token.'){
    //             alert ('Please login to create event')
    //             navigate('/login')
    //         }
    //         else {navigate('/event/${response.id}')};
    //     })
    // };
     };


    const postData = async ()  => {
        const token = window.localStorage.getItem('token')
        const response = await 
        fetch(`${import.meta.env.VITE_API_URL}event/`, {
            method: 'post',
            headers: {                                 
                'Content-Type': "application/json",  
                'Authorization':`token ${token}`          
            },
            body: JSON.stringify(eventDetails)
        });
        return response.json();
    };


    return (
        <div className="event-page">
            <div className="background-image"></div>
            <h1>Create An Event</h1>
            <form>
                <div className="eventField">
                    <label htmlFor='image'>Image:</label>
                    <input type="url" placeholder="Link of image" id="event_image" onChange={handleChange} />
                </div>

                <div className="eventField">
                    <label htmlFor='event_name'>Event Name:</label>
                    <input type="text" placeholder="Enter name of event" id="event_name" onChange={handleChange} />
                </div>

                {/* <div className="eventField">
                    <label htmlFor='event_date'>Event Date:</label>
                    <input type="date" placeholder="Enter date of event" id="event_date" onChange={handleChange} />
                </div> */}

                <div className="eventField">
                    <label htmlFor='location'>Location:</label>
                    <select id='location' onChange={handleChange}> 
                    <option value="sydney">Sydney</option>
                    <option value="brisbane">Brisbane</option>
                    <option value="perth">Perth</option>
                </select>
                </div>

                <div className="eventField">
                    <label htmlFor='type'>Event Type:</label>
                    <select id='type' onChange={handleChange}>
                    <option value="flash">Flash</option>
                    <option value="plus">Plus</option>
                    <option value="one day workshop">One Day Workshop</option>
                </select>
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
                    <label htmlFor='start_date'>Start Date:</label>
                    <input type="datetime-local" placeholder="Start Date" id="start_date" onChange={handleChange} />
                </div>

                <div className="eventField">
                    <label htmlFor='end_date'>End Date:</label>
                    <input type="datetime-local" placeholder="End Date" id="end_date" onChange={handleChange} />
                </div>

                <div className='eventField'>
                    <button type="submit" onClick={handleSubmit}>Create Event</button>
                </div>
            </form>
        </div>

    )

};

export default CreateEventForm; 