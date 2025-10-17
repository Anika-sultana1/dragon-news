import React from 'react';
import { createBrowserRouter } from "react-router";
import Root from '../layout/Root/Root';
import Home from '../layout/Home/Home';
import ErrorPage from '../components/ErrorPage/ErrorPage';


export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
        {
            index: true,
            path: '/',
            Component: Home,
        },
      
    ]
  },
]);

