import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Cars from "../Pages/Cars/Cars";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";

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
        loader: ({params}) => fetch(`cars.json`),
        element: <Cars />,
      },
      {
        path: '/login',
        element: <Login />,
      },
    ]
  }
]);

export default router;