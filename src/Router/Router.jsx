import React from 'react';
import {
  createBrowserRouter,
} from "react-router";

import Root from '../Root/Root';
import ErrorPage from '../Pages/ErrorPage/ErrorPage';
import Home from '../Pages/Home/Home';

export const router = createBrowserRouter([
    {
      path: "/",
      Component: Root,
      errorElement: <ErrorPage></ErrorPage>,
      children:[
        {
            index: true,
            loader: () => fetch('booksData.json'),
            path:'/',
            element: <Home></Home>,
        },

      ]
    },
    // {
    //     path: '*',
    //     Component: ErrorPage,
    // }
  ]);