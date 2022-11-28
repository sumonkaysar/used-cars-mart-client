import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../contexts/AuthProvider";
import useGetRole from "../hooks/useGetRole";

const SellerRoute = ({children}) => {
  const {user, loading} = useContext(AuthContext);
  const [role, isUserLoading] = useGetRole(user?.email);
  const location = useLocation();

  if (loading || isUserLoading) {
    return <progress className="progress w-56"></progress>;
  }

  if (user?.uid && role === 'seller') {
    return children;
  }

  return <Navigate to="/login" state={{from:location}} replace />;
}

export default SellerRoute;
