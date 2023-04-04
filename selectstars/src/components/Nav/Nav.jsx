import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './nav.css';

function Nav() {
  const location = useLocation();
  const [isUserSignedIn, setIsUserSignedIn] = useState(false);
  const token = window.localStorage.getItem('token');

  useEffect(() => {
    if (token !== null) {
      setIsUserSignedIn(true);
    } else {
      setIsUserSignedIn(false);
    }
  }, [token]);

  const logout = () => {
    localStorage.clear();
    setIsUserSignedIn(false);
  };

  return (
    <nav className='main-nav-container'>
      <div className='nav-tabs'>
        <Link to='/' className='logo'>
          <img src='https://shecodes.com.au/wp-content/uploads/2020/02/Purple_no_circle.svg' alt='Logo' />
        </Link>
        {isUserSignedIn ? (
          <>
            <Link to='/' className='nav-item'>
              Home
            </Link>
            <Link to='/register' className='nav-item'>
              Create User
            </Link>
            <Link to='/mentor' className='nav-item'>
              Create Mentor
            </Link>
            <Link to='/event' className='nav-item'>
              Create Event
            </Link>
            <Link to='/mentorlist' className='nav-item'>
              Mentors
            </Link>
            {/* <Link to='/profile' className='nav-item'>
              Profile
            </Link> */}
            <button onClick={logout} className='nav-logout'>
              Logout
            </button>
          </>

        ) : (
          <Link to='/login' className='nav-login'>
            Login
          </Link>
        )}

      </div>
    </nav>
  );
}

export default Nav;
