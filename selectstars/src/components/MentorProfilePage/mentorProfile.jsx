import{ useState, useEffect }from "react";
import { useParams } from "react-router-dom";

function mentorProfile() {
  const [mentorData, setMentorData] = useState({});
  const { id } = useParams();

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}mentors/${id}`)
    .then((results) => {
    return results.json();
  }).then((data) => {
    setMentorData(data);
  });
}, []);

return (
<div>
  <h2>{mentorData.title}</h2>
  <h3>Created at: {mentorData.date_created}</h3>
  <h3>{`Status:${mentorData.is_open}`}</h3>
  <h3>Pledges:</h3>
  <ul>{
    mentorData.pledges.map((pledgeData, key) =>{
      return (
      <li>
      ${pledgeData.amount} from {pledgeData.supporter}
      </li>
      );
      })}
    </ul>
    
  </div>);}
    
    
  export default MentorPage;
