import { useContext } from "react";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../../../contexts/AuthProvider";
import logo from "../../../assets/logo/logo.png";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);

  const handleLogout = () => {
    logout().then(() => {
      toast.success("Logged out successfully");
      console.log("Logged Out");
    }).catch(err => console.error(err))
  }

  const menuItem = <>
    <li><Link to='/'>Home</Link></li>
    <li><Link to='/blog'>Blog</Link></li>
    {
      user?.uid ? <>
        <li><Link to='/dashboard'>Dashboard</Link></li>
        <li><button className="btn btn-sm md:pt-2 pb-7 lg:pb-2 btn-outline rounded-lg" onClick={handleLogout}>Logout</button></li>
      </> :
        <li><Link to='/login'>Login</Link></li>
    }
  </>

  return (
    <nav className="bg-primary text-primary-content fixed w-full z-[999]">
      <div className="navbar container mx-auto">
        <div className="navbar-start">
          <Link to='/' className="normal-case text-xl ml-5 flex items-center gap-3"><img className="w-10" src={logo} alt="Logo" /> Used Cars Mart</Link>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal p-0 items-center">
            {menuItem}
          </ul>
        </div>
        <div className="dropdown ml-auto mr-5">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <FaBars />
          </label>
          <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow rounded-box w-52 right-2 bg-primary">
            {menuItem}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
