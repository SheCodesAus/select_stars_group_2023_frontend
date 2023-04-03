import React from 'react';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import { useState } from 'react'
import "./App.css";
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import LoginForm from './Components/LoginPage/LoginForm';
import CreateUserForm from './Components/CreateUserForm/createUserForm';
import CreateEventForm from './Components/CreateEventForm/createEventForm';
import CreateMentorForm from './Components/CreateMentorForm/createMentorForm';
import Nav from './Components/Nav/Nav';
import HomePage from './Components/HomePage/HomePage';
import NotFound from './Components/Custom404/NotFound';
import ChangePasswordForm from './Components/ChangePassword/changePasswordForm';
import MentorProfiles from './Components/AllMentorsList/allMentors';
import MentorDetails from './Components/MentorDetailsPage/mentorDetails';

const HeaderLayout = () => {
  return (
    <>
      <Nav />
      <Outlet />
    </>
  )
}

const router = createBrowserRouter([
  {
    element: <HeaderLayout />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: '/login',
        element: <LoginForm />,
      },
      {
        path: '/register',
        element: <CreateUserForm />,
      },

      {
        path: '/event',
        element: <CreateEventForm />,
      },

      {
        path: '/mentor',
        element: <CreateMentorForm />,    
      },
      {
        path: '/onboarding',
        element: <OnboardingSteps />,    
      },

      {
        path: '/mentorlist',
        element: <MentorProfiles />,
      },

      {
        path: '*',
        element: <NotFound />,
      },

      {
        path: '/user/change-password/',
        element: <ChangePasswordForm />,
      },
  
    ]

  }

]);

function App() {

  return (
    <RouterProvider router={router}></RouterProvider>
  )
};

export default App


