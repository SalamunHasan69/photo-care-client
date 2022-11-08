import React from 'react';
import { FaQuoteLeft } from "react-icons/fa";

const ClientReviews = () => {
  return (
    <div className='my-10'>
      <div className='text-center my-5'>
        <h4 className='italic text-success text-xl font-medium'>TESTIMONIAL</h4>
        <h2 className='text-4xl font-bold text-black'>What Client Says</h2>
      </div>
      <div className='lg:grid grid-cols-2 w-[50%] mx-auto gap-4 '>
        <div className='border-l-4 border-emerald-400'>
          <FaQuoteLeft className='text-5xl place-items-start ml-1'></FaQuoteLeft>
          <p className='ml-16 text-xl'>The birds and wildlife were brilliant!
            i can't wait to go again, next time would go for longer and would go with my wife.
            i went with two mates and booked through naturetrek.</p>
        </div>
        <div className='border-l-4 border-emerald-400'>
          <FaQuoteLeft className='text-5xl place-items-start ml-1'></FaQuoteLeft>
          <p className='ml-16 text-xl'>I visited in 2019, and I can still remember a lot of details including the sound of all the animals, a actual size model of the bear dent, fur from different taiga animals, the migration routes of wolves and bear etc.</p>
        </div>
      </div>
    </div>
  );
};

export default ClientReviews;