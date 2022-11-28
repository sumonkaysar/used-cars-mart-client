import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../Layout/Dashboard";
import Root from "../Layout/Root";
import Blog from "../Pages/Blog/Blog";
import Cars from "../Pages/Cars/Cars";
import AllBuyers from "../Pages/Dashboard/Admin/AllBuyers/AllBuyers";
import AllSellers from "../Pages/Dashboard/Admin/AllSellers/AllSellers";
import ReportedCars from "../Pages/Dashboard/Admin/ReportedCars/ReportedCars";
import MyOrders from "../Pages/Dashboard/Buyers/MyOrders/MyOrders";
import MyWishLists from "../Pages/Dashboard/Buyers/MyWishLists/MyWishLists";
import Payment from "../Pages/Dashboard/Buyers/Payment/Payment";
import AddCar from "../Pages/Dashboard/Seller/AddCar/AddCar";
import MyCars from "../Pages/Dashboard/Seller/MyCars/MyCars";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Signup from "../Pages/Signup/Signup";
import AdminRoute from "./AdminRoute";
import PrivateRoute from "./PrivateRoute";
import SellerRoute from "./SellerRoute";

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
        element: <SellerRoute><MyCars /></SellerRoute>,
      },
      {
        path: '/dashboard/addCar',
        element: <SellerRoute><AddCar /></SellerRoute>,
      },
      {
        path: '/dashboard/allSellers',
        element: <AdminRoute><AllSellers /></AdminRoute>,
      },
      {
        path: '/dashboard/allBuyers',
        element: <AdminRoute><AllBuyers /></AdminRoute>,
      },
      {
        path: '/dashboard/reportedCars',
        element: <AdminRoute><ReportedCars /></AdminRoute>,
      },
      {
        path: '/dashboard/myOrders',
        element: <MyOrders />,
      },
      {
        path: '/dashboard/myWishLists',
        element: <MyWishLists />,
      },
      {
        path: '/dashboard/payment/:id',
        element: <Payment />,
        loader: ({params}) => fetch(`https://used-cars-mart-server.vercel.app/bookCar/${params.id}`)
      },
    ]
  }
]);

export default router;