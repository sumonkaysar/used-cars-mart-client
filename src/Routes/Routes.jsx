import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Cars from "../Pages/Cars/Cars";
import Home from "../Pages/Home/Home";

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
    ]
  }
]);

export default router;