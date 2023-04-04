import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './createEventForm.css';

function CreateEventForm() {
    const [eventDetails, setEventDetails] = useState({
        // eventName: '',
        // eventDate: '',
        // eventLocation: '',

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
    

      postData().then((response)=>{
                // window.localStorage.setItem("token", response.token)
                navigate('');
        })
    };

        const postData = async () => {
            const token = window.localStorage.getItem("token")
            const response = await fetch(`${import.meta.env.VITE_API_URL}event/`, {
                method: "post",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `token ${token}`
                },
                body: JSON.stringify(eventDetails),
            });
            const data = await response.json();
            console.log(data);
            navigate("/success");
    };



    return (
        <div className="event-page">
            <div className="background-image"></div>
            <h1>Create An Event</h1>
            <form>
                <div className="eventField">
                    <label htmlFor='image'>Image:</label>
                    <input type="url" placeholder="Link of image" id="image" onChange={handleChange} />
                </div>

                <div className="eventField">
                    <label htmlFor='title'>Event Name:</label>
                    <input type="text" placeholder="Enter name of event" id="title" onChange={handleChange} />
                </div>

                <div className="eventField">
                    <label htmlFor='type'>Event Type:</label> 
                    <select name='event_type' id='event_type' onChange={handleChange}>
                        <option value="flash">Flash</option>
                        <option value="one day workshop">One Day Workshop</option>
                        <option value="plus">Plus</option>
                </select>
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
                    <label htmlFor='mentor'>Mentors Assigned:</label>
                    <input type="text" placeholder="Assign a mentor" id="mentor" onChange={handleChange} />
                </div>

                <div className="eventField">
                    <label htmlFor='start_date'>Start time:</label>
                    <input type="datetime-local" placeholder="Start time" id="start_date" onChange={handleChange} />
                </div>

                <div className="eventField">
                    <label htmlFor='end_date'>End time:</label>
                    <input type="datetime-local" placeholder="End time" id="end_date" onChange={handleChange} />
                </div>

                <div className="eventField">
                    <label htmlFor='event_tech_stack'>Event tech Stack:</label> 
                    <select name='event_tech_stack' id='event_tech_stack' onChange={handleChange}>
                        <option value="HTML">HTML</option>
                        <option value="CSS">CSS</option>
                        <option value="React">React</option>
                        <option value="Django">Django</option>
                        <option value="DRF">DRF</option>
                        <option value="JavaScript">JavaScript</option>
                </select>
                </div>



                <div className='eventField'>
                    <button type="submit" onClick={handleSubmit}>Create Event</button>
                </div>
            </form>
        </div>

    )

};

export default CreateEventForm 