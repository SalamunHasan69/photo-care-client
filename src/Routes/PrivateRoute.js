import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Contexts/AuthProvider';

const PrivateRoute = ({ children }) => {

  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return <div className="d-flex justify-content-center">
      <div className="spinner-border text-primary" role="status">
        <span className="sr-only"></span>
      </div>
    </div>
  }

  if (!user) {
    return <Navigate to='/login' state={{ from: location }} replace></Navigate>
  }
  return children;
};

export default PrivateRoute;