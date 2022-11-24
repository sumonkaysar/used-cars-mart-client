import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Cars from "../Pages/Cars/Cars";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Signup from "../Pages/Signup/Signup";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/category/:id',
        loader: ({params}) => fetch(`http://localhost:5000/categories/${params.id}`),
        element: <Cars />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/signup',
        element: <Signup />,
      },
    ]
  }
]);

export default router;