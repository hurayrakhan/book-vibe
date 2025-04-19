
import {
  createBrowserRouter,
} from "react-router";

import Root from '../Root/Root';
import ErrorPage from '../Pages/ErrorPage/ErrorPage';
import Home from '../Pages/Home/Home';
import BookDetails from "../Pages/Books/BookDetails";
import About from "../Pages/About/About";

export const router = createBrowserRouter([
    {
      path: "/",
      Component: Root,
      errorElement: <ErrorPage></ErrorPage>,
      children:[
        {
            index: true,
            path:'/',
            loader: () => fetch('booksData.json'),
            element: <Home></Home>,
        },
        {
          path: '/book/:bookId',
          loader: () => fetch('booksData.json'),
          element: <BookDetails></BookDetails>
        },
        {
          path: '/about',
          element: <About></About>,
        }

      ]
    },
    // {
    //     path: '*',
    //     Component: ErrorPage,
    // }
  ]);