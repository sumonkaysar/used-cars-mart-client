import { Outlet } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";
import Navbar from "../Pages/Shared/Navbar/Navbar";

const Root = () => {

  return (
    <div className="bg-slate-100">
      <Navbar />
      <div className="pt-16 mb-20">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default Root;
