import React, { useContext } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from '../../Contexts/AuthProvider';

const UserReviews = () => {

  const { user } = useContext(AuthContext);

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;
    const email = user?.email || 'unregistered'
    const message = form.message.value;

    const review = {
      email,
      message
    }

    fetch('http://localhost:5000/myReviews', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(review)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        if (data.acknowledged && user?.login) {
          toast('Want to review? log in first', {
            icon: '🥺',
          });
          form.reset();
        }
        else if (data.acknowledged) {
          toast.success('Review submitted');
          form.reset();
        };
      })
      .catch(error => console.error(error))
  };



  return (
    <div className='my-10'>
      <div className='text-center my-5'>
        <h2 className='text-4xl font-bold'><span className='text-black'>Give in your</span> <span className='text-success'>Review</span></h2>
      </div>
      <form onSubmit={handleSubmit} className='w-[90%] lg:w-[50%] mx-auto'>
        <input type="email" name="email" placeholder='Your Email' defaultValue={user?.email} className='input input-ghost input-bordered w-full' required />
        <textarea name='message' className="textarea textarea-bordered h-32 w-full my-1" placeholder="Your Message" required></textarea>
        <button type="submit" className='btn btn-success w-full mb-10'>Submit</button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default UserReviews;