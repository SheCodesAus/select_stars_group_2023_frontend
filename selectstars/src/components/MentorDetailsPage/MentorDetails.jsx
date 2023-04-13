import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import './mentorDetails.css'; 

// import { mentors } from "../../../dummydata";



function MentorDetails(){

  const { id } = useParams();
  const { id:mentorId } = useParams();

  // FETCHING ALL DATA
  const [mentorDetailData, setmentorDetailData ] = useState({mentor_tech_stack : []})
  const [techStack, setTechStack] = useState([]);
  const [events, setEvents] = useState([]);
  const [onboardingArray, setOnboardingArray] = useState([]);
  const [onboarding, setOnboarding] = useState();
  



  let onboarding_steps = 
  ["interview", "offer", "contract_sent",
  "contract_return","onboarding_completed", "feedback",
  "offboarding"]

  let onboarding_titles = 
  ["Invited to Interview", "Offered Position", "Sent Contract",
  "Contract Received","Onboarding Complete", "Feedback shared",
  "Offboarded"] 
  
  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}onboarding/`)
    .then((results) => {
        return results.json();
    })
    .then((data) => {
      // console.log(data);
      //put condition if response.detail is invalid (doesn't equal 200), if equals 200, do filter
      const updatedData = data.filter(data => data.mentor == mentorId);
      
      console.log(data);
      console.log(updatedData);
      console.log(updatedData[0]);
      setOnboardingArray(updatedData);
      setOnboarding(updatedData[0]);
    })
  }, []);


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




  // ADDING EVENT TO MENTOR AND CREATING A NEW ONBOARDING TABLE

  // let eventId = '';
  const handleChange = (event) => {
    const { id, value } = event.target;

    console.log("id: ", id);
    console.log("value: ", value);

    setOnboarding((prevOnboarding) => ({
      ...prevOnboarding,
      
      interview: true,
      offer: false,
      contract_sent: false,
      contract_return: false,
      onboarding_completed: false,
      feedback: false,
      offboarding: false,
      mentor : mentorId,
    }));

    // if (id == "event") {
    //   eventId = value;

    // } 

    if (id == "event") {
      console.log("if event value: ", value);
      setOnboarding((prevOnboarding) => ({
        ...prevOnboarding,
        [id]: value
      }));

    } 

  };

  const postData = async () => {
    const token = window.localStorage.getItem("token");
    console.log(onboarding);
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
    // event.preventDefault();
    // const { id, value } = event.target;

  
    // setOnboarding((prevOnboarding) => ({
    //   ...prevOnboarding,
    //   event: eventId
    // }));

    

    postData().then((response)=>{
        
    } )

    window.location.reload(false);


  };



  // ONBOARDING


  const handleCheckboxChange = (event) => {

    const { id } = event.target;
    const checked = event.target.checked;

    // console.log("updateOnboarding",id);
    console.log("updateOnboarding",checked);

    if(checked){
      setOnboarding((prevOnboarding) => ({
        ...prevOnboarding,
        [id]: true
      }));
      // console.log("updateOnboarding check",onboarding.interview);
    } else {
      setOnboarding((prevOnboarding) => ({
        ...prevOnboarding,
        [id]: false
      }));
    }

    console.log("onboarding: ", onboarding);
    
  };

  const handleOnboardingSubmit = (event) => {
    event.preventDefault();
    putData().then((response)=>{
        
    } )
  };



  const putData = async () => {
    const token = window.localStorage.getItem("token");
    // console.log(JSON.stringify(onboarding));
    // console.log(onboardingId);
    const response = await fetch(`${import.meta.env.VITE_API_URL}onboarding/${onboarding.id}/`, {
        method: "PUT",
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


  let eventName = '';
  // let eventID = '';
  
  if(typeof(onboarding) !== 'undefined'){
    for (let i = 0; i < events.length; i ++){
      // console.log(onboardingArray[0].event);
  
      if(onboarding.event == events[i].id){ 
        eventName = events[i].title;
        // console.log(eventName);
      }
    }
    
  }
  
  
  let result = [];
  if(typeof(onboarding) !== 'undefined'){
    result = Object.values(onboarding);
    for (let i = 0; i < onboarding.length; i++){
      console.log("result[i]: ", result[i]);
      if(result[i] != true && result[i] != false ){
        result.splice(result.indexOf(i), 1);
      }
      
    }
  }

  let tech_stack_names = [];
    for (let i = 0; i < mentorDetailData.mentor_tech_stack.length ; i ++){
      for (let j = 0; j < techStack.length ; j++) {
        if(mentorDetailData.mentor_tech_stack[i] == techStack[j].id){
          tech_stack_names.push(techStack[j].name);
        }
      }
    }

  let can_travel = mentorDetailData.can_travel ? "Yes" : "No";

  // console.log("onboardingArray[0].event:", onboardingArray[0].event);

  return(
  
    <div className="mentor-detail-page">
      <div id="mentor-detail-title">
        <div className="purple-cover"></div>
        <h1 >{mentorDetailData.first_name} {mentorDetailData.last_name}</h1>
        

      </div>
     

      <section className="mentor-detail">

      <section  className="onboardingMainBox">
          <section className="borderOnboarding">

          {typeof(onboardingArray[0]) == 'undefined' ? (

            <div>
                <h3>Assign {mentorDetailData.first_name} to event</h3>
              <div className="add_mentor_event">
              <label htmlFor='add_mentor_event'></label>
                <select id='event' onChange={handleChange}>
                <option value="">--  Select Event  --</option>
                    {events.map((events) => {
                      return <option key={events.id} value={events.id} > {events.title}</option>
                        })};
                </select>

              <div className='add_mentor_event-btn'>
                <button type="submit" onClick={handleSubmit}>Add</button>
                </div>
              </div> 
            </div>

            

          ) : ( 
            <div className="assigned-event">
              <h3>Assigned event: </h3>
              <p>{eventName} </p>
              
            </div>

          )}

                    
          <div className='onboarding_container'>
            
            {typeof(onboardingArray[0]) !== 'undefined' ? (

      
              <div>
                <h3>Onboarding steps:</h3>
                <ul id="onboarding_checkboxes">
                      {onboarding_steps.map((key, index) => {
                          return (
                              <li key={index}>
                                  <label htmlFor="steps" className="checkbox-label">{onboarding_titles[index]}</label>
                                  <input
                                  type="checkbox"
                                  id= {onboarding_steps[index]}
                                  name= {onboarding_steps[index]}
                                  value={index}
                                  checked={result[index + 1]}
                                  onChange= {handleCheckboxChange}
                                  disabled={result[index] != true && onboarding_steps[index] != "interview"}
                                  />

                                  {/* <label htmlFor="steps" className="checkbox-label">{onboarding_titles[index]}</label> */}
                                
                              </li>
                          )
                      })}
                </ul>
                <div className='save-btn'>
                    <button type="submit" onClick={handleOnboardingSubmit}>Save</button>
                </div>

              </div>

            ) : ( 
              <div>
        
                <p>An event needs to be assigned, before the onboarding process can start</p>

              </div>

            )}
              
              

            </div>  
            
          </section>
        </section>


        <section className="mentorInfoBox">
            <h3><img src={mentorDetailData.image} alt="Profile picture" id="profile_pic"/></h3> 
         
            <div className="mentorInfo">
              <div className="bio">
                  {/* <h6 id="bio-title">Bio:</h6> */}
                  <span id="bio-detail">{mentorDetailData.bio}</span>
              </div>
              <div className="info-box">
                <div>
                  <h6>Email:</h6>
                  <span>{mentorDetailData.email}</span>
                </div>
                
                <div>
                  <h6>Tech Stack:</h6> 
                  <div className="info">
                    {tech_stack_names.map((tech_stack, key)=> {
                      return (
                        <li key={key}>{`${tech_stack} `}</li>
                        )
                    })} 
                  </div>
                </div>
                <div>
                  <h6>Mentor type:</h6>
                  <span>{mentorDetailData.level}</span>
                </div>
                <div>
                  <h6>Location:</h6>
                  <span>{mentorDetailData.location}</span>
                </div>
                <div>
                  <h6>Willing to travel:</h6>
                  <span>{can_travel}</span>
                </div>

              </div>
              
            </div>          
        </section>

        



      </section>
       
    </div>


 /* <form>
            {checkboxData.map((checkbox, index) => (
              <label key={checkbox.id} className="checkbox-label">
                <input
                  type="checkbox"
                  value={index}
                  checked={checkedValues.includes(index)}
                  onChange={handleCheckboxChange}
                />
                {checkbox.label}
              </label>
            ))}
        </form> */
        /* <Link className="" to={`/mentordetails/:id/addEvent`}>Add Mentor To Event</Link> */
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
  //   console.log("event.target.value: ", event.target.value)
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
);}


export default MentorDetails;