import React from 'react';

const Banner = () => {
  return (
    <div className='w-[90%] mx-auto lg:grid grid-cols-2'>
      <div>
        <img src="https://assets.thehansindia.com/h-upload/2021/07/08/1087103-photographer.jpg" alt="" />
      </div>
      <div className='self-center pl-4 divide-y-4 divide-emerald-400'>
        <h1 className='text-6xl text-black font-extrabold'>I'm Salamun Hasan</h1>
        <p className='text-3xl mt-4 text-black font-semibold'>Creative Photographer</p>
        <button className='btn btn-success mt-7'>Learn More</button>
      </div>
    </div>
  );
};

export default Banner;