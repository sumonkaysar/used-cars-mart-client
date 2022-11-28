import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../contexts/AuthProvider";
import useGetRole from "../hooks/useGetRole";

const AdminRoute = ({children}) => {
  const {user, loading, logout} = useContext(AuthContext);
  const [role, isUserLoading] = useGetRole(user?.email);
  const location = useLocation();

  if (loading || isUserLoading) {
    return <progress className="progress w-56"></progress>;
  }

  if (user?.uid && role === 'admin') {
    return children;
  }

  logout().then(() => {}).catch(err=> console.error(err))

  return <Navigate to="/login" state={{from:location}} replace />;
}

export default AdminRoute;
