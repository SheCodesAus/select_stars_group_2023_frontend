import{ useState, useEffect }from "react";
import { useParams } from "react-router-dom";
import { mentors } from "../../../dummydata";
import MentorCard from "../MentorCard/mentorCard";
import './mentorProfile.css';

// remember to insert [] for usestate and uncomment the use effect once API up

function MentorProfile() {
  const [mentorData, setMentorData] = useState(mentors);

//   useEffect(() => {
//     fetch(`${import.meta.env.VITE_API_URL}mentors`)
//     .then((results) => {
//     return results.json();
//   }).then((data) => {
//     setMentorData(data);
//   });
// }, []);

return (

<div className="mentorProfilePage">
 
{mentorData.map((Mentor, key) => {
            return <MentorCard key={key} mentorData={Mentor} />
          })}
  
</div>


);}  

export default MentorProfile;


