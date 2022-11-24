import { Link } from "react-router-dom";

const Navbar = () => {

  const menuItem = <>
    <li><Link to='/'>Home</Link></li>
    <li><Link to='/login'>login</Link></li>
  </>

  return (
    <nav className="bg-primary text-primary-content fixed w-full">
      <div className="navbar container mx-auto">
        <div className="navbar-start">
          <Link to='/' className="btn btn-ghost normal-case text-xl">Used Cars Mart</Link>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal p-0">
            {menuItem}
          </ul>
        </div>
        <div className="dropdown ml-auto mr-5">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
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
