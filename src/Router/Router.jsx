import React from 'react';
import {
  createBrowserRouter,
} from "react-router";

import Root from '../Root/Root';
import ErrorPage from '../Pages/ErrorPage/ErrorPage';

export const router = createBrowserRouter([
    {
      path: "/",
      Component: Root,
      errorElement: <ErrorPage></ErrorPage>,
      children:[
        {
            path:'/'
        }
      ]
    },
    // {
    //     path: '*',
    //     Component: ErrorPage,
    // }
  ]);