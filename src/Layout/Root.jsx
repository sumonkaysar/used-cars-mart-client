import { Outlet } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";
import Navbar from "../Pages/Shared/Navbar/Navbar";

const Root = () => {

  return (
    <div>
      <Navbar />
      <div className="pt-32 mb-20 container mx-auto">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default Root;
