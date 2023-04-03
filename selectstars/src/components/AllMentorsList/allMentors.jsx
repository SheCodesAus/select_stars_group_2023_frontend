import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import MentorCard from "../MentorCard/mentorCard";
import './allMentors.css';



  
function MentorProfile(props) {
  const { id } = useParams();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [search, setSearch] = useState("")

  useEffect(() => {
    const isLoggedIn = true;
    if (!isLoggedIn) {
        history.push('/login');
    } else {
        setIsLoggedIn(true);
        fetch(`${import.meta.env.VITE_API_URL}event/`)
            .then((results) => {
                return results.json();
            })
            .then((data) => {
                setEventData(data)
            })
    }
}, []);
// useEffect(() => {
//   if (search == "") {
//       setFilterData(mentorsData)
//   } else if (search.length > 0) {
//       const data = mentorsData.filter((event) => mentor.mentor_type.toLowerCase().includes(search.toLowerCase()))
//       setFilterData(data)
//   }
// }, [search, mentorsData]);

// const handleChange = (mentor) => {
//   setSearch(mentor.target.value)
// }


  return isLoggedIn ? (
    <div className="allMentors-page">
  
        <div className="background-image"></div>
  
        <div className="allMentorsPage-title">
          <h1>All Mentors</h1>
        </div>
        </div>
      ) : null;
};

export default MentorProfile;
