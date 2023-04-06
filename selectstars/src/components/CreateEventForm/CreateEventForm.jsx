import React, { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import './createEventForm.css';



function CreateEventForm() {
    const [eventDetails, setEventDetails] = useState({
        title: '',
        start_date: '',
        end_date:'',
        location: 'Sydney',
        event_type:'Flash',
        description:'',
       

    });

    // const [mentors,setmentors] = useState([])

    
    // useEffect(() =>{
    //     const token = window.localStorage.getItem('token')
    //     fetch(`${import.meta.env.VITE_API_URL}mentor/`, {
    //         method: 'get',
    //         headers: {                                 
    //             'Content-Type': "application/json",  
    //             'Authorization':`token ${token}`          
    //         },
    //     }).then((data)=>{          // data = return of fetch
    //         return data.json()   // convert data to json
    //     }).then((mentors) => {      //mentors = data.json
    //         setmentors(mentors)     // setting state of mentors to all mentors
    //     })
    // },[])


    const navigate = useNavigate();
    const handleChange = (event) => {
        const { id, value } = event.target;
        setEventDetails((prevEventDetails) => ({
            ...prevEventDetails,
            [id]: value
        }));
    };

    // const handleMentorChange = (event) => {
    //     console.log(parseFloat(event.target.value))
    //     setEventDetails((prevEventDetails) => ({
    //         ...prevEventDetails,
    //         [event.target.id]: [parseFloat(event.target.value)]
    //     }));
    // };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Entering event details', eventDetails);

       postData().then((response)=>{
        console.log(response)
            if (response.detail == 'Invalid token.'){
                alert ('Please login to create event')
                navigate('/login')
            }
            else {navigate("/")};
        })
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
                    <input type="url" placeholder="Add Event Image or Leave Empty for Default Image" id="image" onChange={handleChange} />
                </div>

                <div className="eventField">
                    <label htmlFor='event_name'>Event Name:</label>
                    <input type="text" placeholder="Enter name of event" id="title" onChange={handleChange} />
                </div>

                <div className="eventField">
                    <label htmlFor='location'>Location:</label>
                    <select id='location' onChange={handleChange}> 
                    <option value="Sydney">Sydney</option>
                    <option value="Brisbane">Brisbane</option>
                    <option value="Perth">Perth</option>
                </select>
                </div>

                <div className="eventField">
                  
                    <label htmlFor='type'>Event Type:</label>
                    <select id='event_type' onChange={handleChange}>
                    <option value="Flash">Flash</option>
                    <option value="Plus">Plus</option>
                    <option value="One Day Workshop">One Day Workshop</option>
                </select>
                </div>

                <div className="eventField">
                    <label htmlFor='description'>Description:</label>
                    <input type="text" placeholder="Enter description" id="description" onChange={handleChange} />
                </div>
                
                {/* <div className="eventField">
                    <label htmlFor='mentors'>Mentors Assigned:</label>
                    <select id='mentors' onChange={handleMentorChange}>
                        {mentors.map((mentor) => {
                            return <option key={mentor.id} value={mentor.id}> {mentor.first_name} {mentor.last_name}</option>
                        })}
                    </select>
                </div> */}


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