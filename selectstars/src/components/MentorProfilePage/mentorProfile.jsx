import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
// import { mentors } from "../../../dummydata";
import MentorCard from "../MentorCard/mentorCard";
import './mentorProfile.css';


// remember to insert [] for usestate and uncomment the use effect once API up (Jen did this)


function MentorProfile() {

  const [mentorData, setMentorData] = useState([]);


  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}api-token-auth/`,)
    .then((results) => {
    return results.json();
  }).then((data) => {
    setMentorData(data);
  });
}, []);

    fetch(`${import.meta.env.VITE_API_URL}mentors`)
      .then((results) => {
        return results.json();
      }).then((data) => {
        setMentorData(data);
      });
  }, []);


  return (
    <div className="mentorProfilePage">
      <div className="mentorProfilePageBackground"></div>
      {mentorData.map((Mentor, key) => {
        return <MentorCard key={key} mentorData={Mentor} />
      })}

    </div>


  );
}

export default MentorProfile;


