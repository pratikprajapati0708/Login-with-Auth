import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Username from './components/Username';
import Register from './components/Register';
import Recovery from './components/Recovery';
import Reset from './components/Reset';
import PageNotFound from './components/PageNotFound';
import Password from './components/Password';

import './App.css';

function App() {
  const router = createBrowserRouter([
    {
        path : '/',
        element : <Username></Username>
    },
    {
        path : '/register',
        element : <Register></Register>
    },
    {
        path : '/recovery',
        element : <Recovery></Recovery>
    },
    {
        path : '/reset',
        element : <Reset></Reset>
    },
    {
        path : '/password',
        element : <Password></Password>
    },
    {
        path : '/404',
        element : <PageNotFound></PageNotFound>
    },
])

  return (
    <main>
        <RouterProvider router={router}></RouterProvider>
    </main>
  );
}

export default App;
