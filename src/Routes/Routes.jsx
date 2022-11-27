import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../Layout/Dashboard";
import Root from "../Layout/Root";
import Blog from "../Pages/Blog/Blog";
import Cars from "../Pages/Cars/Cars";
import AllBuyers from "../Pages/Dashboard/Admin/AllBuyers/AllBuyers";
import AllSellers from "../Pages/Dashboard/Admin/AllSellers/AllSellers";
import ReportedCars from "../Pages/Dashboard/Admin/ReportedCars/ReportedCars";
import AddCar from "../Pages/Dashboard/Seller/AddCar/AddCar";
import MyCars from "../Pages/Dashboard/Seller/MyCars/MyCars";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Signup from "../Pages/Signup/Signup";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
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
      {
        path: '/blog',
        element: <Blog />,
      },
    ]
  },
  {
    path: '/dashboard',
    element: <PrivateRoute><Dashboard /></PrivateRoute>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/dashboard/myCars',
        element: <MyCars />,
      },
      {
        path: '/dashboard/addCar',
        element: <AddCar />,
      },
      {
        path: '/dashboard/allSellers',
        element: <AllSellers />,
      },
      {
        path: '/dashboard/allBuyers',
        element: <AllBuyers />,
      },
      {
        path: '/dashboard/reportedCars',
        element: <ReportedCars />,
      },
    ]
  }
]);

export default router;