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

  // FETCHING ALL DATA
  const [mentorDetailData, setmentorDetailData ] = useState({mentor_tech_stack : []})
  const [techStack, setTechStack] = useState([]);
  const [events, setEvents] = useState([]);
  const [onboardingArray, setOnboardingArray] = useState([]);
  // const [onboardingId, setOnboardingId] = useState(0);
  // const [onboarding, setOnboarding] = useState({
  //   // id: '',
  //   // interview: true,
  //   // offer: false,
  //   // contract_sent: false,
  //   // contract_return: false,
  //   // onboarding_completed: false,
  //   // feedback: false,
  //   // offboarding: false,
  //   // mentor: '',
  //   // event: '',

  // });

  const [onboarding, setOnboarding] = useState();

  // console.log(onboarding);


  let onboarding_steps = 
  ["interview", "offer", "contract_sent",
  "contract_return","onboarding_completed", "feedback",
  "offboarding"]
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

  

  // console.log("onboardingArray[0]: ", onboardingArray[0]);

  // let tempId = 0;
  // let onboardingObject = {};
  // for (let i = 0; i < onboardingArray.length; i ++){
  //   // console.log("mentorId: ", mentorId);
  //   // console.log("onboardingArray[i].mentor: ", onboardingArray[i].mentor);
  //   if(onboardingArray[i].mentor == mentorId ){

  //     tempId = onboardingArray[i].id
  //     onboardingObject = onboardingArray[i];
      
  //   }
  // }

  // // console.log("tempId: ", tempId);

  // useEffect(() => {



  //   setOnboardingId({onboardingId: tempId});

  //   // setOnboardingId(prevState => {
  //   //   return {
  //   //       ...prevState,
  //   //       onboardingId : tempId
  //   //   }
  //   // });

  //   // setOnboardingId({onboardingId: tempId}, function (){
  //   //   console.log("onboardingId: ", onboardingId)
  //   // });

  //   // console.log("onboardingId: ", onboardingId);
  

  // },[tempId]);


//   this.setState({value: event.target.value}, function () {
//     console.log(this.state.value);
// });


  // let onboardingIdValue = Object.values(onboardingId); 

  // useEffect(() => {
       
    
   
  //     fetch(`${import.meta.env.VITE_API_URL}onboarding/5/`)
  //     .then((results) => {
  //         return results.json();
  //     })
  //     .then((data) => {
  //       setOnboarding(data);
  //     })
  //     // ${onboardingIdValue}
  
  //   // const values = Object.values(onboardingObject)
  //   // console.log("values: ", values)

  //   // setOnboarding((prevOnboarding) => ({
  //   //   ...prevOnboarding,
  //   //   id: values[0],
  //   //   interview: values[1],
  //   //   offer: values[2],
  //   //   contract_sent: values[3],
  //   //   contract_return: values[4],
  //   //   onboarding_completed: values[5],
  //   //   feedback: values[6],
  //   //   offboarding: values[7],
  //   //   mentor: values[8],
  //   //   event: values[9],
  //   // }));

  
   
  // }, []);

  // console.log("onboarding: ", onboarding)


  // ADDING EVENT TO MENTOR AND CREATING A NEW ONBOARDING TABLE

  const handleChange = (event) => {
    const { id, value } = event.target;

    if (id == "event") {
      setOnboarding((prevOnboarding) => ({
        ...prevOnboarding,
        [id]: value
      }));

    } 

    setOnboarding((prevOnboarding) => ({
      ...prevOnboarding,
      mentor : mentorId,
      interview: true,
      offer: false,
      contract_sent: false,
      contract_return: false,
      onboarding_completed: false,
      feedback: false,
      offboarding: false,
    }));

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
    postData().then((response)=>{
        
    } )
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

  //update the onboarding fields and call the putData function to update database

  // const updateOnboarding = (event) => {
  //   const { id } = event.target;
  //   const checked = event.target.checked;

  //   // console.log("updateOnboarding",id);
  //   // console.log("updateOnboarding",checked);

  //   if(checked){
  //     setOnboarding((prevOnboarding) => ({
  //       ...prevOnboarding,
  //       [id]: true
  //     }));

  //     // console.log("updateOnboarding check",onboarding.interview);

  //     event.preventDefault();
  //     putData().then((response)=>{
  //       // if(response.status == 201){
  //           // navigate("/");
  //       // }
        
  //     } )

  //   }

  // };


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
  
      if(onboarding.event == events[i].id){ // Sarah fix to get the correct event name
        eventName = events[i].title;
        // console.log(eventName);
      }
    }
    
  }
  


 
  // let onboardingObjectArray = []

  // for (let i = 0; i < onboarding_steps.length; i++){
  //   let step = onboarding_steps[i];
  //   onboardingObjectArray.push(onboardingObject.${step});
  // }

  // let stepBoolean = onboardingObject

  // let onboardingObject = onboardingArray[3]
  let result = [];

  if(typeof(onboarding) !== 'undefined'){
    result = Object.values(onboarding);
    for (let i = 0; i < result.length; i++){
      if(result[i] != true && result[i] != false ){
        result.splice(result.indexOf(i), 1);
      }
      // console.log("result: ", result);
    }
  }
  

  // console.log(result);

  

  // console.log("nan", isNaN(+onboarding.event));
  // console.log(typeof(onboarding.event) === 'undefined');
  let tech_stack_names = [];
    for (let i = 0; i < mentorDetailData.mentor_tech_stack.length ; i ++){
      for (let j = 0; j < techStack.length ; j++) {
        if(mentorDetailData.mentor_tech_stack[i] == techStack[j].id){
          tech_stack_names.push(techStack[j].name);
        }
      }
    }

  let can_travel = mentorDetailData.can_travel ? "Yes" : "No";
  return(
  
    <>
      
      <section className="">
          <section className="mentorInfoBox">
            <div className="mentoravatar">
              <h3><img src={mentorDetailData.image} alt="Profile picture" id="profile_pic"/></h3> 
            </div>
            <div className="mentorInfo">
              <h1 className="mentorname">{mentorDetailData.first_name} {mentorDetailData.first_name}</h1>
              <div>
                <h6>Tech Stack:</h6>
                <span>{tech_stack_names}</span>
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
          </section>

            <section  className="onboardingManBox">
            <section className="borderOnboarding">
            <h3>Assign {mentorDetailData.first_name} to event: {eventName}</h3>
            {/* {
              isNaN(onboarding.event) && */}
            <div className="add_mentor_event">
              <label htmlFor='add_mentor_event'></label>
                <select id='event' onChange={handleChange}>
                <option value="">--  Select Event  --</option>
                    {events.map((events) => {
                      return <option key={events.id} value={events.id} > {events.title}</option>
                        })};
                </select>
            </div>    
                      
                      
              <div className='onboarding_container'>
            <label htmlFor='onboarding_checkboxes'>Onboarding steps:</label>
            <ul id="onboarding_checkboxes">
                  {onboarding_steps.map((key, index) => {
                      return (
                          <div key={index}>
                              <input
                              type="checkbox"
                              id= {onboarding_steps[index]}
                              name= {onboarding_steps[index]}
                              value={index}
                              checked={result[index +1]}
                              onChange= {handleCheckboxChange}
                              // disabled={onboarding.key != true && onboarding_steps[index] != "interview"}
                              />

                          
                              <label htmlFor="steps" className="checkbox-label">{onboarding_steps[index]}</label>
                              
                          </div>
                      )
                  })}
            </ul>
            <div className='save-btn'>
                  <button type="submit" onClick={handleOnboardingSubmit}>Save</button>
            </div>

            </div>  
            </section>
            </section>

          </section>

        {/* <form>
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
        </form> */}
        {/* <Link className="" to={`/mentordetails/:id/addEvent`}>Add Mentor To Event</Link> */}
    </>
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