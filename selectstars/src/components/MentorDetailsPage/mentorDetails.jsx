import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import './mentorDetails.css'; 
// import { mentors } from "../../../dummydata";



function MentorDetails(){

  const navigate = useNavigate();

  const { id } = useParams();
  const { id:mentorId } = useParams();
  // console.log(mentorId)
  const [mentorDetailData, setmentorDetailData ] = useState({mentor_tech_stack : []})/*({ events : []});*/
  const [techStack, setTechStack] = useState([]);
  const [events, setEvents] = useState([]);
  const [onboarding, setOnboarding] = useState({
    interview: false,
    offer: false,
    contract_sent: false,
    contract_return: false,
    onboarding_completed: false,
    feedback: false,
    offboarding: false,
    mentor: mentorId,
    event: '',

  });


  

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}mentor/${id}`)
    .then((results) => {
        return results.json();
  })
    .then((data) => {
        setmentorDetailData(data)
    })


  },[]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}tech_stack/`)
    .then((results) => {
        return results.json();
    })
    .then((data) => {
        setTechStack(data);
    })
  }, []);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}event/`)
    .then((results) => {
        return results.json();
    })
    .then((data) => {
      setEvents(data);
    })
  }, []);

  // useEffect(() => {
  //   fetch(`${import.meta.env.VITE_API_URL}onboarding/`)
  //   .then((results) => {
  //       return results.json();
  //   })
  //   .then((data) => {
  //     setEvents(data);
  //   })
  // }, []);

  // let eventItems = events.array.map((item) =>
  //       <option key={item}>{item}</option>
  // );

  const handleChange = (event) => {
    const { id, value } = event.target;
    console.log(id);
    console.log(value);

    if (id == "event") {
      setOnboarding((prevOnboarding) => ({
        ...prevOnboarding,
        [id]: value
      }));

    } 

  };

  const postData = async () => {
    const token = window.localStorage.getItem("token");
    console.log(JSON.stringify(onboarding));
    // console.log(token);
    const response = await fetch(`${import.meta.env.VITE_API_URL}onboarding/`, {
        method: "post",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `token ${token}`
        },
        body: JSON.stringify(onboarding),
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


  return(
    <>
      <section className="">   
        <h3><img src={mentorDetailData.image} alt="Profile picture" /></h3>             
        <h1>{mentorDetailData.first_name} {mentorDetailData.first_name}</h1>
        <h3>Tech Stack: {mentorDetailData.mentor_tech_stack}</h3>
        <h3>Mentor type: {mentorDetailData.level}</h3>
        {/* <h5>Location:</h5><span>{mentorsData.location}</span> */}
        <h3>Willing to travel: {mentorDetailData.can_travel}</h3>

        <div className="add_mentor_event">
            <label htmlFor='add_mentor_event'>Add mentor to event:</label>
            <select id='event' onChange={handleChange}>
                <option value=""> </option>
                {events.map((events) => {
                    return <option key={events.id} value={events.id} > {events.title}</option>
                })}
            </select>
        </div>
        <div className='add_mentor_event'>
            <button type="submit" onClick={handleSubmit}>Add</button>
         </div>
        
        {/* <Link className="" to={`/mentordetails/:id/addEvent`}>Add Mentor To Event</Link> */}
      </section>
    </>
  )
  // const checkboxData = [
  //   { id: '1', label: 'Invited to Interview' },
  //   { id: '2', label: 'Offered Position' },
  //   { id: '3', label: 'Sent Contract' },
  //   { id: '4', label: 'Received Contract' },
  //   { id: '5', label: 'Invite to Event' },
  //   { id: '6', label: 'Onboard Complete' },
  // ];

  // const [checkedValues, setCheckedValues] = useState([]);
  // const [lastCheckedIndex, setLastCheckedIndex] = useState(-1);
  // const [selectedMentorIndex, setSelectedMentorIndex] = useState(-1);

  // const handleCheckboxChange = (event) => {
  //   const value = parseInt(event.target.value);
  //   if (lastCheckedIndex === -1 || value === lastCheckedIndex + 1) {
  //     if (checkedValues.includes(value)) {
  //       setCheckedValues(
  //         checkedValues.filter((v) => v !== value)
  //       );
  //       setLastCheckedIndex(
  //         checkedValues.length > 1
  //           ? checkedValues[checkedValues.length - 2]
  //           : -1
  //       );
  //     } else {
  //       setCheckedValues([...checkedValues, value]);
  //       setLastCheckedIndex(value);
  //     }
  //     setSelectedMentorIndex(-1);
  //   }
  // };
  // const handleMentorCardClick = (index) => {
  //   if (index === selectedMentorIndex) {
  //     setSelectedMentorIndex(-1);
  //   } else {
  //     setSelectedMentorIndex(index);
  //   }
  // };

  // return (
  //   <div className="onboarding-container">
  //     <form>
  //       {checkboxData.map((checkbox, index) => (
  //         <label key={checkbox.id} className="checkbox-label">
  //           <input
  //             type="checkbox"
  //             value={index}
  //             checked={checkedValues.includes(index)}
  //             onChange={handleCheckboxChange}
  //           />
  //           {checkbox.label}
  //         </label>
  //       ))}
  //     </form>

  //     <div className="mentors-container">
  //       {mentors.map((mentorData, index) => (
  //         <MentorCard key={index} mentorData={mentorData} 
  //         selected={index === selectedMentorIndex}
  //         onClick={() => handleMentorCardClick(index)}/>
  //       ))}
  //     </div>
  //   </div>
  // );
};


export default MentorDetails;