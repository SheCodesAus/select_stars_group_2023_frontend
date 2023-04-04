import React, { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import './createMentorForm.css';

function CreateMentorForm() {

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

    const [credentials, setCredentials] = useState({
        first_name: '',
        last_name: '',
        email: '',
        bio: '',
        image: '',
        level: '',
        location: '',
        can_travel: false,
        mentor_tech_stack: [],
    });

    const navigate = useNavigate();
    

    const handleChange = (event) => {
        const { id, value } = event.target;
        const checked = event.target.checked

        if(id == "can_travel" ){
            // console.log(can_travel);
            var travel = false;
            if(checked){
                travel = true;
            } 

            setCredentials((prevCredentials) => ({
                ...prevCredentials,
                [id]: travel
            }));
 

        } else if (id == "mentor_tech_stack" ) {

            // var techStackObject = {};
            var techStackId = {};
            const tech_stack_array = [...credentials.mentor_tech_stack];

            if(checked){
                for(var i = 0; i < techStack.length; i++){
                    if(techStack[i].name == value){
                        // techStackObject = techStack[i];
                        techStackId = techStack[i].id;
                    }
                }

                // tech_stack_array.push(techStackObject);
                tech_stack_array.push(techStackId);

            } else {
                tech_stack_array.splice(credentials.mentor_tech_stack.indexOf(value), 1);
            }


            setCredentials((prevCredentials) => ({
                ...prevCredentials,
                [id]: tech_stack_array
            }));

        } else {
            setCredentials((prevCredentials) => ({
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
        console.log(JSON.stringify(credentials));
        // console.log(token);
        const response = await fetch(`${import.meta.env.VITE_API_URL}mentor/`, {
            method: "post",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `token ${token}`
            },
            body: JSON.stringify(credentials),
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

    

    return (
        <div className='mentor-page'>
            <div className="background-image"></div>
            <h1>
                Create New Mentor
            </h1>
            <form className='mentor-form'>
                <div className='mentor_details'>
                    <label htmlFor='first_name'>First name:</label>
                    <input
                        type="text"
                        id="first_name"
                        placeholder="Enter first name"
                        onChange={handleChange}
                    />
                </div>
                <div className='mentor_details'>
                    <label htmlFor='last_name'>Last name:</label>
                    <input
                        type="text"
                        id="last_name"
                        placeholder="Enter last name"
                        onChange={handleChange}
                    />
                </div>
                <div className='mentor_details'>
                    <label htmlFor='email'>Email:</label>
                    <input
                        type="text"
                        id="email"
                        placeholder="Enter email"
                        onChange={handleChange}
                    />
                </div>
                <div className='mentor_details'>
                    <label htmlFor='location'>Location:</label>
                    <input
                        type="text"
                        id="location"
                        placeholder="Location"
                        onChange={handleChange}
                    />
                </div>
                {/* <div className='mentor_details'>
                    <label htmlFor='can_travel'>Can travel?</label>
                    <select id="dropdown" onChange={handleChange}>
                        <option value="">--Select an option--</option>
                        <option value="true">Yes</option>
                        <option value="false">No</option>
                    </select>
                </div> */}

                <div className='mentor_details'>
                    <label htmlFor='can_travel'>Can travel?</label>
                    
                    <input
                        type="checkbox"
                        id="can_travel"
                        name="can_travel"
                        // value="Yes"
                        // defaultChecked={isChecked}
                        onChange={handleChange}
                    />
               
                    
    
                </div>
            
                <div className='mentor_details'>
                    <label htmlFor='level'>Mentor Level:</label>
                    <input
                        type="text"
                        id="level"
                        placeholder="Mentor level"
                        onChange={handleChange}
                    />
                </div>
                <div className='mentor_details'>
                    <label htmlFor='bio'>Bio:</label>
                    <input
                        type="text"
                        id="bio"
                        placeholder="Write your bio"
                        onChange={handleChange}
                    />
                </div>
                <div className='mentor_details'>
                    <label htmlFor='image'>Profile picture:</label>
                    <input
                        type="url"
                        id="image"
                        placeholder="Link"
                        onChange={handleChange}
                    />
                </div>

                <div className='mentor_details'>
                    <label htmlFor='mentor_tech_stack'>Tech stack:</label>
                   <ul id="mentor_tech_stack">
                        {techStack.map(({name}, index) => {
                            return (
                                <li key={index}>
                                    <input
                                    type="checkbox"
                                    id="mentor_tech_stack"
                                    name={name}
                                    value={name}
                                    // checked={mentorTechState[index]}
                                    onChange= {handleChange}
                                    
                                    />

                                    <label htmlFor="mentor_tech_stack">{name}</label>
                                    
                                </li>
                            )
                        })}
                   </ul>
                </div>
{/*                 
                <div className='mentor_details'>
                    <label htmlFor='mentor_tech_stack'>Skills:</label>
                    <input
                        type="text"
                        id="mentor_tech_stack"
                        placeholder="Skills stack"
                        onChange={handleChange}
                    />
                </div> */}

                {/* <div className='mentor_details'>
                    <label htmlFor='interview'>Interview:</label>
                    <select id="dropdown" onChange={handleChange}>
                        <option value="">-- Select an option --</option>
                        <option value="true">Yes</option>
                        <option value="false">No</option>
                    </select>
                </div>
                <div className='mentor_details'>
                    <label htmlFor='offer'>Offer:</label>
                    <select id="dropdown" onChange={handleChange}>
                        <option value="">--Select an option--</option>
                        <option value="true">Yes</option>
                        <option value="false">No</option>
                    </select>
                </div>
                <div className='mentor_details'>
                    <label htmlFor='contract_sent'>Contract sent:</label>
                    <select id="dropdown" onChange={handleChange}>
                        <option value="">--Select an option--</option>
                        <option value="true">Yes</option>
                        <option value="false">No</option>
                    </select>
                </div>
                <div className='mentor_details'>
                    <label htmlFor='contract_return'>Contract return:</label>
                    <select id="dropdown" onChange={handleChange}>
                        <option value="">--Select an option--</option>
                        <option value="true">Yes</option>
                        <option value="false">No</option>
                    </select>
                </div>
                <div className='mentor_details'>
                    <label htmlFor='onboarding_completed'>Onboarding completed:</label>
                    <select id="dropdown" onChange={handleChange}>
                        <option value="">--Select an option--</option>
                        <option value="true">Yes</option>
                        <option value="false">No</option>
                    </select> */}
                {/* </div> */}
                <div className='mentor_details'>
                    <button type="submit" onClick={handleSubmit}>Create</button>
                </div>
            </form>
        </div>
    )
};

export default CreateMentorForm;