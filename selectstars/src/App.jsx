import React from 'react';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import { useState } from 'react';
import "./App.css";
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import CreateUserForm from './components/CreateUserForm/CreateUserForm';
import LoginForm from './components/LoginPage/LoginForm';
import CreateEventForm from './components/CreateEventForm/CreateEventForm';
import CreateMentorForm from './components/CreateMentorForm/CreateMentorForm';
import Nav from './components/Nav/Nav';
import HomePage from './components/HomePage/HomePage';
import NotFound from './components/Custom404/NotFound';
import ChangePasswordForm from './components/ChangePassword/ChangePasswordForm';
import MentorProfile from './components/AllMentorsList/AllMentors';
import MentorDetails from './components/MentorDetailsPage/MentorDetails';
import MentorAddEvent from './components/MentorAddEventPage/Index';

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


