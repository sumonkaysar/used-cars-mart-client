import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../Layout/Dashboard";
import Root from "../Layout/Root";
import Cars from "../Pages/Cars/Cars";
import AddCar from "../Pages/Dashboard/AddCar/AddCar";
import MyCars from "../Pages/Dashboard/MyCars/MyCars";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Signup from "../Pages/Signup/Signup";
import PrivateRoute from "./PrivateRoute";

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
        element: <PrivateRoute><Cars /></PrivateRoute>,
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
  },
  {
    path: '/dashboard',
    element: <PrivateRoute><Dashboard /></PrivateRoute>,
    children: [
      {
        path: '/dashboard/myCars',
        element: <MyCars />,
      },
      {
        path: '/dashboard/addCar',
        element: <AddCar />,
      }
    ]
  }
]);

export default router;