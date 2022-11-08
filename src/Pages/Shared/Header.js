import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider';

const Header = () => {

  const { user, logout } = useContext(AuthContext);

  const handleLogOut = () => {
    logout()
      .then(() => { })
      .catch(error => console.error(error));
  };

  return (
    <div>
      <div className="navbar bg-black dark:text-gray-100 px-10">
        <div className="lg:container flex justify-around h-16 mx-auto">
          <div className='items-stretch hidden md:flex'>
            {
              user?.uid ?
                <>
                  <button onClick={handleLogOut} className='btn btn-outline-dark'>Log out</button>
                </>
                :
                <>
                  <button className="btn btn-success mr-1"><Link to='/login'>Log in</Link></button>
                  <button className="btn btn-outline btn-success"><Link to='/signup'>Sign up</Link></button>
                </>
            }
          </div>
          <ul className="items-stretch hidden space-x-3 md:flex">
            <li className="flex">
              <NavLink
                to='/home'
                className={({ isActive }) =>
                  isActive
                    ? 'text-success flex items-center px-4 -mb-1 border-b-2 dark:border-transparent'
                    : 'flex items-center px-4 -mb-1 border-b-2 dark:border-transparent'
                }
              >
                Home
              </NavLink>
            </li>
            {/* <li className="flex">
              <NavLink to='/rechart'
                className={({ isActive }) =>
                  isActive
                    ? 'text-blue-700 flex items-center px-4 -mb-1 border-b-2 dark:border-transparent'
                    : 'flex items-center px-4 -mb-1 border-b-2 dark:border-transparent'
                }
              >
                Rechart
              </NavLink>
            </li> */}
            <li className="flex">
              <NavLink to='/blog'
                className={({ isActive }) =>
                  isActive
                    ? 'text-success flex items-center px-4 -mb-1 border-b-2 dark:border-transparent'
                    : 'flex items-center px-4 -mb-1 border-b-2 dark:border-transparent'
                }
              >
                Blog
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="md:hidden navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow dark:bg-black w-52">
              <li className="flex">
                <NavLink
                  to='/home'
                  className={({ isActive }) =>
                    isActive
                      ? 'text-success flex items-center px-4 -mb-1 border-b-2 dark:border-transparent'
                      : 'flex items-center px-4 -mb-1 border-b-2 dark:border-transparent'
                  }
                >
                  Home
                </NavLink>
              </li>
              {/* <li className="flex">
                <NavLink to='/rechart'
                  className={({ isActive }) =>
                    isActive
                      ? 'text-blue-700 flex items-center px-4 -mb-1 border-b-2 dark:border-transparent'
                      : 'flex items-center px-4 -mb-1 border-b-2 dark:border-transparent'
                  }
                >
                  Rechart
                </NavLink>
              </li> */}
              <li className="flex">
                <NavLink to='/blog'
                  className={({ isActive }) =>
                    isActive
                      ? 'text-success flex items-center px-4 -mb-1 border-b-2 dark:border-transparent'
                      : 'flex items-center px-4 -mb-1 border-b-2 dark:border-transparent'
                  }
                >
                  Blog
                </NavLink>
              </li>
            </ul>
            <div>
              <button className="btn btn-success mr-1"><Link to='/login'>Log in</Link></button>
              <button className="btn btn-outline btn-success"><Link to='/signup'>Sign up</Link></button>
            </div>
          </div>
        </div>
        <div className="navbar-end">
          <Link
            to='/'
            aria-label="Back to homepage"
            className="flex items-center p-2">
            <h3 className="text-success text-2xl font-bold leading-none lg:text-4xl italic">Photo Care</h3>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;