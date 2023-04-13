import React, { useState, useEffect } from "react";
import MentorCard from "../MentorCard";
import "./allMentors.css";

function MentorProfile() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [search, setSearch] = useState("");
  const [mentorsData, setMentorsData] = useState([]);
  const [techStack, setTechStack] = useState([]);
  const [filteredMentorsData, setFilteredMentorsData] = useState([]);

  useEffect(() => {
    const isLoggedIn = true;
    if (!isLoggedIn) {
      history.push("/login");
    } else {
      setIsLoggedIn(true);
      fetch(`${import.meta.env.VITE_API_URL}mentor`)
        .then((results) => {
          return results.json();
        })
        .then((data) => {
          setMentorsData(data);
          setFilteredMentorsData(data);
        });
    }
  }, []);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}tech_stack/`)
      .then((results) => {
        return results.json();
      })
      .then((data) => {
        setTechStack(data);
      });
  }, []);


  useEffect(() => {
    if (search === "") {
      setFilteredMentorsData(mentorsData);
    } else {
      const filteredData = mentorsData.filter((mentor) =>
        mentor.first_name && mentor.first_name.toLowerCase().includes(search.toLowerCase())
      );
      setFilteredMentorsData(filteredData);
    }
  }, [search, mentorsData]);
  

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  return isLoggedIn ? (
    <div className="allMentors-page">
    
      <div className="allMentorsPage-title">
        <div className="purple-cover"></div>
        <h1>All Mentors</h1>
        <input
          type="search"
          value={search}
          onChange={handleSearch}
          placeholder="Search by mentor name"
          className="searchFilter"
        />
      </div>
    
      <div className="allMentorSection">
        {filteredMentorsData.map((mentorData, key) => {
          return <MentorCard key={key} mentorsData={mentorData} techStack={techStack} />;
        })}
      </div>
    </div>
  ) : null;
}

export default MentorProfile;
