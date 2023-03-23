import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './nav.css';


function Nav() {
    const location = useLocation();
    const isLoggedIn = location.state?.isLoggedIn || false;

    const logout = () => {
        localStorage.clear();
        window.location.href = '/';
    }

    return (
        <nav className='main-nav-container'>
            <Link to="/">
                <img src="https://shecodes.com.au/wp-content/uploads/2020/02/Purple_no_circle.svg" alt="Logo" />
            </Link>
            {isLoggedIn && (
                <>
                    {/* <Link to="/" className="nav-item">Home</Link> */}
                    <Link to="/register" className="nav-item">Create User</Link>
                    {/* <Link to="/event" className="nav-item">Create Event</Link> */}
                    {/* <Link to="/profile" onClick={logout} className="nav-item">Mentors</Link> */}
                </>
            )}
            {!isLoggedIn && (
                <>
                    <Link to="/login" className="nav-item">Login</Link>
                </>
            )}
        </nav>
    );
}

export default Nav;
