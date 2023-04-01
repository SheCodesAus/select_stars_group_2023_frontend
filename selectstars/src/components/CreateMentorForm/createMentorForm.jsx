import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import './createMentorForm.css';

function CreateMentorForm() {
    const [credentials, setCredentials] = useState({
        fist_name: '',
        last_name: '',
        email: '',
        level: '',
        bio: '',
        image: '',
        skills: '',
        feedback: true,
        offboarding: true,
    });

    const navigate = useNavigate();

    const handleChange = (event) => {
        const { id, value } = event.target;
        setCredentials((prevCredentials) => ({
            ...prevCredentials,
            [id]: value
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(event.first_name);

        postData().then((response)=>{
            window.localStorage.setItem("token", response.token)
            navigate('');
        } )
    };


    const postData = async () => {
        const response = await fetch(`${import.meta.env.VITE_API_URL}mentor/`, {
            method: "post",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(credentials),
        });
        const data = await response.json();
        console.log(data);
        navigate("/success");
    };

    return (
        <div className='mentor-page'>
            <div className="background-image"></div>
            <h1>
                Create a new mentor
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
                    <label htmlFor='img'>Profile picture:</label>
                    <input
                        type="url"
                        id="profile_img"
                        placeholder="Link"
                        onChange={handleChange}
                    />
                </div>
                <div className='mentor_details'>
                    <label htmlFor='skills'>Skills:</label>
                    <input
                        type="text"
                        id="skills"
                        placeholder="Skills stack"
                        onChange={handleChange}
                    />
                </div>
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