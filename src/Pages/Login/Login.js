import React, { useContext, useEffect, useState } from 'react';
import { Helmet } from "react-helmet"
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from '../../Contexts/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';

const Login = () => {

  const { login, user } = useContext(AuthContext);

  const navigate = useNavigate();
  const [error, setError] = useState('');
  const location = useLocation();

  const from = location.state?.from?.pathname || '/';

  const handleLogin = event => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    login(email, password)
      .then(result => {
        const user = result.user;
        console.log(user);
        form.reset();
        setError('');
      })

      .catch(error => {
        console.error(error)
        setError(error.message);
      });
  };

  const { providerLogin } = useContext(AuthContext);

  const googleProvider = new GoogleAuthProvider();

  const handleGoogleSignIn = () => {
    providerLogin(googleProvider)
      .then(result => {
        const user = result.user
        console.log(user);
      })
      .catch(error => console.error(error))
  };

  useEffect(() => {
    if (user) {
      navigate(from, { replace: true });
    }
  }, [user, navigate, from])

  return (
    <div className="flex flex-col max-w-md p-6 rounded-md mx-auto sm:p-10 bg-black dark:text-gray-100 my-20">
      <Helmet htmlAttributes>
        <html lang="en" />
        <title>Login Photo Care</title>
        <meta name="description" content="Basic example" />
      </Helmet>
      <div className="mb-8 text-center">
        <h1 className="my-3 text-4xl font-bold">Log in</h1>
      </div>
      <form onSubmit={handleLogin} className="space-y-12 ng-untouched ng-pristine ng-valid">
        <div className="space-y-4">
          <div>
            <label for="email" className="block mb-2 text-sm">Email</label>
            <input type="email" name="email" id="email" placeholder="email" className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100" required />
          </div>
          <div>
            <div className="flex justify-between mb-2">
              <label for="password" className="text-sm">Password</label>
            </div>
            <input type="password" name="password" id="password" placeholder="password" className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100" required />
          </div>
          <br />
          <p className='text-red-700'>{error}</p>
        </div>
        <div className="space-y-2">
          <div>
            <button type="submit" className="w-full px-8 py-3 font-semibold rounded-md bg-success text-white">Sign in</button>
          </div>
          <div className='flex items-center w-full my-3'>
            <hr className='w-full dark:text-gray-400' />
            <p>OR</p>
            <hr className="w-full dark:text-gray-400" />
          </div>
          <button onClick={handleGoogleSignIn} type="button" className="flex items-center justify-center w-full p-3 space-x-4 border rounded-md btn btn-outline btn-success">
            <FaGoogle></FaGoogle>
            <p>Login with Google</p>
          </button>
          <p className="px-6 text-sm text-center dark:text-gray-400">Don't have an account?
            <Link to='/signup' className="hover:underline dark:text-success"> Sign up</Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;