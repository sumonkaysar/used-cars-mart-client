import { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { AuthContext } from "../contexts/AuthProvider";
import useGetRole from "../hooks/useGetRole";
import Navbar from "../Pages/Shared/Navbar/Navbar";

const Dashboard = () => {
  const { user } = useContext(AuthContext);
  const [role] = useGetRole(user?.email);

  const drawerStyle = { height: "calc(100vh - 64px)" }

  return (
    <div>
      <Navbar dashboard={true} />
      <div className="pt-16">
        <div className="drawer drawer-mobile drawer-end" style={drawerStyle}>
          <input id="dashboardMenu" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content">
            <Outlet />
          </div>
          <div className="drawer-side">
            <label htmlFor="dashboardMenu" className="drawer-overlay"></label>
            <ul className="menu p-4 w-80 bg-base-100 text-base-content">
              {
                role === 'buyer' &&
                <li><Link to="/dashboard/myOrders">My Orders</Link></li>
              }
              {
                role === 'seller' &&
                <>
                  <li><Link to="/dashboard/myCars">My Cars</Link></li>
                  <li><Link to="/dashboard/addCar">Add A Car</Link></li>
                </>
              }
              {
                role === 'admin' &&
                <>
                  <li><Link to="/dashboard/allSellers">All Sellers</Link></li>
                  <li><Link to="/dashboard/allBuyers">All Buyers</Link></li>
                  <li><Link to="/dashboard/reportedItems">Reported Items</Link></li>
                </>
              }
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
