import React from 'react';
import { createBrowserRouter } from "react-router";
import Root from '../layout/Root/Root';
import ErrorPage from '../components/ErrorPage/ErrorPage';
import About from '../components/About/About';
import Career from '../components/Career/Career';
import Home from '../layout/Home/Home';
import CategoryNews from '../layout/CategoryNews';


export const router = createBrowserRouter([
  {
    path: "/",
    loader: ()=> fetch('/categories.json'),
    Component: Root,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
        {
            index: true,
            path: '/',
            Component: Home
        },
        {
          path: '/category/:id',
          loader: ()=> fetch('/news.json'),
          Component: CategoryNews,
        },
        {
          path: '/about',
          Component: About
        },
        {
          path: '/career',
          Component: Career
        }
      
    ]
  },
]);

