import React, { useContext, useState } from 'react';
import { Helmet } from "react-helmet"
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider';

const Signup = () => {

  const { createUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const [error, setError] = useState('');

  const handleSignUp = event => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    createUser(email, password)
      .then(result => {
        const user = result.user;
        console.log(user);
        setError('');
        form.reset();
        navigate('/login');
      })
      .catch(error => {
        console.error(error)
        setError(error.message);
      })
  }

  return (
    <div className="flex flex-col max-w-md p-6 rounded-md mx-auto sm:p-10 bg-black dark:text-gray-100 my-20">
      <Helmet htmlAttributes>
        <html lang="en" />
        <title>Sign up Photo Care</title>
        <meta name="description" content="Basic example" />
      </Helmet>
      <div className="mb-8 text-center">
        <h1 className="my-3 text-4xl font-bold">Sign up</h1>
      </div>
      <form onSubmit={handleSignUp} className="space-y-12 ng-untouched ng-pristine ng-valid">
        <div className="space-y-4">
          <div>
            <label for="name" className="block mb-2 text-sm">Name</label>
            <input type="text" name="name" id="name" placeholder="name" className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100" required />
          </div>
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
            <button type="submit" className="w-full px-8 py-3 font-semibold rounded-md bg-success text-white">Sign up</button>
          </div>
          <p className="px-6 text-sm text-center dark:text-gray-400">Already have an account?
            <Link to='/login' className="hover:underline dark:text-success"> Login</Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Signup;