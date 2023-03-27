import{ useState, useEffect }from "react";
import { useParams } from "react-router-dom";
import { mentors } from "../../../dummydata";
import MentorCard from "../MentorCard/mentorCard";
import './mentorProfile.css';



function MentorProfile() {
  const [mentorData, setMentorData] = useState(mentors);


return (

<div className="mentorProfilePage">
 
{mentorData.map((Mentor, key) => {
            return <MentorCard key={key} mentorData={Mentor} />
          })}
  
</div>


);}  

export default MentorProfile;


