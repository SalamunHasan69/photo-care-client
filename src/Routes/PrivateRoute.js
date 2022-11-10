import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Contexts/AuthProvider';
import { FaSpinner } from 'react-icons/fa';

const PrivateRoute = ({ children }) => {

  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return <div>
      <>
        <FaSpinner className='text-4xl font-bold text-success mx-auto text-center animate-spin'></FaSpinner>
      </>
      {/* <h4 className='text-4xl font-bold text-success mx-auto text-center animate-spin'>Loading...</h4> */}
    </div>
  }

  if (!user) {
    return <Navigate to='/login' state={{ from: location }} replace></Navigate>
  }
  return children;
};

export default PrivateRoute;