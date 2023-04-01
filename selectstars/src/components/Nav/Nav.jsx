import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './nav.css';


function Nav() {
    const location = useLocation();
    // const isLoggedIn = location.state?.isLoggedIn || false;

    const logout = () => {
        localStorage.clear();
        window.location.href = '/';
    };

    const [isUserSignedIn, setIsUserSignedIn] = useState(false);
    const token = window.localStorage.getItem("token");

    useEffect(() => {
        // console.log("useEffect called");
        

        if( token !== null){
            setIsUserSignedIn(prevState => {
                return {
                    ...prevState,
                    isUserSignedIn : !isUserSignedIn
                }
            });
        }
        
    }, [token]);



    //make the nav bar NOT show on the landing login page.

    return (
        <nav className='main-nav-container'>
            <Link to="/">
                <img src="https://shecodes.com.au/wp-content/uploads/2020/02/Purple_no_circle.svg" alt="Logo" />
            </Link>
            <div className='nav-tabs'>
                {/* {isLoggedIn && ( */}
                <>
                    <Link to="/" className="nav-item">Home</Link>
                    <Link to="/register" className="nav-item">Create User</Link>
                    <Link to="/mentor" className="nav-item">Create Mentor</Link>
                    <Link to="/event" className="nav-item">Create Event</Link>
                    <Link to="/mentorlist" className="nav-item">Mentors</Link>
                    {/* <Link to="/profile" onClick={logout} className="nav-item">Mentors</Link> */}
                </>
                {/* )} */}
                {/* {!isLoggedIn && ( */}
                {isUserSignedIn?<p className="nav-login">Logged In</p>:<Link to="/login" className="nav-login">Login</Link>}
                {/* <Link to="/login" className="nav-login">Login</Link> */}
                <Link to="/user/change-password/" className="nav-item">Change Password</Link>
                {/* )} */}
            </div>
        </nav>
    );
};

export default Nav;

