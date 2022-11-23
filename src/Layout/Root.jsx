import { Outlet } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";
import Navbar from "../Pages/Shared/Navbar/Navbar";

const Root = () => {

  return (
    <div>
      <Navbar />
      <div className="pt-20 lg:pt-24 mb-5 lg:mb-8 container mx-auto">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default Root;
