import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import AuthContext from "../Contexts/Context";
const PrivateRoute = ({ children }) => {
  const location = useLocation();
  const { user, loading } = useContext(AuthContext);

  if (loading) {
    return (
      <div className="text-center mt-5">
        <div className="spinner-grow text-info" role="status">
        <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-green-400"></div>
        </div>
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/singin" state={{ from: location }} replace />;
  }
  return children;
};

export default PrivateRoute;
