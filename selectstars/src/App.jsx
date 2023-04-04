import React from 'react';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import { useState } from 'react';
import "./App.css";
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import LoginForm from './components/LoginPage/LoginForm';
import CreateUserForm from './components/CreateUserForm/createUserForm';
import CreateEventForm from './components/CreateEventForm/createEventForm';
import CreateMentorForm from './components/CreateMentorForm/createMentorForm';
import Nav from './components/Nav/Nav';
import HomePage from './components/HomePage/HomePage';
import NotFound from './components/Custom404/NotFound';
import ChangePasswordForm from './components/ChangePassword/changePasswordForm';
import MentorProfile from './components/AllMentorsList/allMentors';
import MentorDetails from './components/MentorDetailsPage/mentorDetails';
import MentorAddEvent from './components/MentorAddEventPage/index';

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
        path: '/mentordetails/:id',
        element: <MentorDetails />,
      },
      {
        path: '/mentordetails/:id/addEvent',
        element: <MentorAddEvent />,
      }
      ,

      {
        path: '/mentorlist',
        element: <MentorProfile />,
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


