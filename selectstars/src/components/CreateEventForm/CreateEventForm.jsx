import React, { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import './createEventForm.css';



function CreateEventForm() {

    const [techStack, setTechStack] = useState([]);

    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_URL}tech_stack/`)
        .then((results) => {
            return results.json();
        })
        .then((data) => {
            setTechStack(data);
        })
    }, []);

    // console.log("techStack: ", techStack);

    const [eventDetails, setEventDetails] = useState({
        title: '',
        start_date: '',
        end_date:'',
        location: 'Sydney',
        event_type:'Flash',
        description:'',
        image: 'https://shecodes.com.au/wp-content/uploads/2022/07/SheCodes_1-e1657863957172.png',
        event_tech_stack: [],
       

    });

    // const [credentials, setCredentials] = useState({
    const navigate = useNavigate();
    

    const handleChange = (event) => {
        const { id, value } = event.target;
        const checked = event.target.checked

        // if(id == "can_travel" ){
        //     // console.log(can_travel);
        //     var travel = false;
        //     if(checked){
        //         travel = true;
        //     } 

        //     setCredentials((prevCredentials) => ({
        //         ...prevCredentials,
        //         [id]: travel
        //     }));
 

        // } else if (id == "mentor_tech_stack" ) {
            if (id == "event_tech_stack" ) {
            // var techStackObject = {};
            let techStackId = {};
            const tech_stack_array = [...eventDetails.event_tech_stack];

            if(checked){
                for(let i = 0; i < techStack.length; i++){
                    if(techStack[i].name == value){
                        // techStackObject = techStack[i];
                        techStackId = techStack[i].id;
                    }
                }

                // tech_stack_array.push(techStackObject);
                tech_stack_array.push(techStackId);

            } else {
                tech_stack_array.splice(eventDetails.mentor_tech_stack.indexOf(value), 1);
            }


            setEventDetails((prevCredentials) => ({
                ...prevCredentials,
                [id]: tech_stack_array
            }));

        } else {
            setEventDetails((prevCredentials) => ({
                ...prevCredentials,
                [id]: value
            }));

        }

        
    };

    // const [mentorTechState, setMentorTechState] = useState(new Array(techStack.length).fill(false));
    // // const [mentorTechState, setMentorTechState] = useState({mentor_tech_stack: []});

    // const handleOnMultiCheck = (position) => {
    //     const updatedCheckedState = mentorTechState.map((item, index) =>
    //         index === position ? !item : item
    //     ); 

    //     setMentorTechState(updatedCheckedState);

    //     const checkedStack = updatedCheckedState.reduce(
    //         (currentState, index) => {
    //             if (currentState === true) {
    //                 setCredentials((prevCredentials) => ({
    //                     ...prevCredentials,
    //                     mentor_tech_stack: [...prevCredentials, techStack[index]]
    //                 }));
    //             }
                  
    //         }
            
    //     )

    //     // if(checkedState === true) {
    //     //     setMentorTechState(techStack[index]);
    //     //     // setCredentials((prevCredentials) => ({
    //     //     //     ...prevCredentials,
    //     //     //     9: techStack[index]
    //     //     // }));
    //     // }
    // }

    // const handleChange = (event) => {
    //     const { id, value } = event.target;
    //     setCredentials((prevCredentials) => ({
    //         ...prevCredentials,
    //         [id]: value
    //     }));
    // };

    // const [isChecked, setIsChecked] = useState({can_travel: false});

    // const handleOnChecked = () => {
    //     setIsChecked(!isChecked);
    // };

    // console.log(techStack);

    const postData = async () => {
        const token = window.localStorage.getItem("token");
        console.log(JSON.stringify(eventDetails));
        // console.log(token);
        const response = await fetch(`${import.meta.env.VITE_API_URL}event/`, {
            method: "post",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `token ${token}`
            },
            body: JSON.stringify(eventDetails),
        });

        // console.log('here')

        if (response.status !== 201) {
            throw new Error(response.statusText);
        }
        return response.json();
    
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        postData().then((response)=>{
            // if(response.status == 201){
                navigate("/");
            // }
            
        } )
    };

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

//EVENT ORIGINAL START
    // const navigate = useNavigate();
    // const handleChange = (event) => {
    //     const { id, value } = event.target;
    //     setEventDetails((prevEventDetails) => ({
    //         ...prevEventDetails,
    //         [id]: value
    //     }));
    // };

    // // const handleMentorChange = (event) => {
    // //     console.log(parseFloat(event.target.value))
    // //     setEventDetails((prevEventDetails) => ({
    // //         ...prevEventDetails,
    // //         [event.target.id]: [parseFloat(event.target.value)]
    // //     }));
    // // };

    // const handleSubmit = (event) => {
    //     event.preventDefault();
    //     console.log('Entering event details', eventDetails);

    //    postData().then((response)=>{
    //     console.log(response)
    //         if (response.detail == 'Invalid token.'){
    //             alert ('Please login to create event')
    //             navigate('/login')
    //         }
    //         else {navigate("/")};
    //     })
    // };
    


    // const postData = async ()  => {
    //     const token = window.localStorage.getItem('token')
    //     const response = await 
    //     fetch(`${import.meta.env.VITE_API_URL}event/`, {
    //         method: 'post',
    //         headers: {                                 
    //             'Content-Type': "application/json",  
    //             'Authorization':`token ${token}`          
    //         },
    //         body: JSON.stringify(eventDetails)
    //     });
    //     return response.json();
    // };


    return (
        <div className="event-page">
            <div className="background-image"></div>
            <h1>Create An Event</h1>

            <form>
                <div className="eventField">
                    <label htmlFor='image'>Image:</label>
                    <input type="url" placeholder="Add Event Image or Empty for Default Image" id="image" onChange={handleChange} />
                </div>

                <div className="eventField">
                    <label htmlFor='event_name'>Event Name:</label>
                    <input type="text" placeholder="Enter name of event" id="title" onChange={handleChange} />
                </div>

                <div className="eventField">
                    <label htmlFor='description'>Description:</label>
                    <input type="text" placeholder="Enter description" id="description" onChange={handleChange} />
                </div>

                <div className="eventField">
                    <label htmlFor='location'>Location:</label>
                    <select id='location' onChange={handleChange}> 
                    <option value="">--Select an option--</option>
                    <option value="Sydney">Sydney</option>
                    <option value="Brisbane">Brisbane</option>
                    <option value="Perth">Perth</option>
                </select>
                </div>

                <div className="eventField">
                  
                    <label htmlFor='type'>Event Type:</label>
                    <select id='event_type' onChange={handleChange}>
                    <option value="">--Select an option--</option>
                    <option value="Flash">Flash</option>
                    <option value="Plus">Plus</option>
                    <option value="One Day Workshop">One Day Workshop</option>
                </select>
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

                <div className='eventField' >
                    <label className='tech_label' htmlFor='event_tech_stack'>Tech stack:</label>
                    <ul id="event_tech_stack">
                        {techStack.map(({name}, index) => {
                            return (
                                <li key={index}>
                                    <input
                                    type="checkbox"
                                    id="event_tech_stack"
                                    name={name}
                                    value={name}
                                    // checked={mentorTechState[index]}
                                    onChange= {handleChange}
                                    />
                                    <label htmlFor="event_tech_stack">{name}</label>

                                </li>
                            )
                        })}
                    </ul>
                </div>

                <div className='eventField'>
                    <button type="submit" onClick={handleSubmit}>Create Event</button>
                </div>
            </form>

        </div>

    )

};

export default CreateEventForm; 