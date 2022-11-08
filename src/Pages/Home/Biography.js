import React from 'react';

const Biography = () => {
  return (
    <div className='my-20'>
      <div className='text-center my-5'>
        <h4 className='italic text-success text-xl font-medium'>BIOGRAPHY</h4>
        <h2 className='text-4xl font-bold text-black'>Who am I?</h2>
      </div>
      <div className='w-[60%] mx-auto lg:grid grid-cols-2'>
        <div className=''>
          <img src="https://images.unsplash.com/photo-1556642389-0cd5fd882f5a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHBob3RvZ3JhcGhlcnxlbnwwfHwwfHw%3D&w=1000&q=80" alt="" />
        </div>
        <div className='ml-4 self-center'>
          <h4 className='text-success text-2xl font-bold'>About Me</h4>
          <h3 className='text-black text-3xl font-bold my-3'>Salamun Hasan's Details</h3>
          <p className='text-xl'>The most time i spend in the field, the more i understand about my subject and the more likely i capture unusual wildlife behaviour.</p>
          <p className='text-xl mt-2'>I hope this blog helped you identify the types of Wildlife Photography so you could choose for the ones that interest you the most!</p>
          <div className='grid lg:grid-cols-2 gap-3 mt-3'>
            <div className='bg-slate-100 p-3'>
              <h5>Name</h5>
              <p>Salamun Hasan</p>
            </div>
            <div className='bg-slate-100 p-3'>
              <h5>Email</h5>
              <p>salamun2600@gmail.com</p>
            </div>
            <div className='bg-slate-100 p-3'>
              <h5>Address</h5>
              <p>Jashore,Khulna, Bangladesh</p>
            </div>
            <div className='bg-slate-100 p-3'>
              <h5>Phone No.</h5>
              <p>+88 01644-517235</p>
            </div>
          </div>
          <button className='btn btn-success mt-7'>Download CV</button>
        </div>
      </div>
    </div>
  );
};

export default Biography;