import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import reportWebVitals from './reportWebVitals';
import './css/index.css';
import Home from './routes/home';
import Board from './routes/board'
import Error404 from './errors/404';
import Events from './routes/events';
import Leaderboard from './routes/leaderboard';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Login from './routes/login';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
        errorElement: <Error404 />,
    },
    {
        path: "/board",
        element: <Board />,
    },
    {
        path: "/events",
        element: <Events />,
    },
    {
        path: "/leaderboard",
        element: <Leaderboard />
    },
    // {
    //     path: "/login",
    //     element: <Login />
    // }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
