import React from 'react';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import { useState } from 'react'
import "./App.css";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import LoginForm from './components/LoginPage/loginform';
import CreateUserForm from './components/CreateUserForm/CreateUserForm';
import CreateEventForm from './components/CreateEventForm/createEventForm';
import Nav from './components/Nav/Nav';

const HeaderLayout = () => {
  return (
    <div>
      <Nav />
      <Outlet />
    </div>
  )
}

const router = createBrowserRouter([
  {
    element: <HeaderLayout />,
    children: [
      // {
      //   path: '/',
      //   element: <HomePage />,
      // },
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
    ]
  }

])

function App() {

  return (
    <RouterProvider router={router}></RouterProvider>
  )
}

export default App


