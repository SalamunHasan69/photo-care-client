import React from 'react';
import { FaQuoteLeft } from "react-icons/fa";

const MyReviewsRow = ({ myReview }) => {

  const { message } = myReview;

  return (
    <div>
      <div className='border-l-4 border-emerald-400'>
        <FaQuoteLeft className='text-5xl place-items-start ml-1'></FaQuoteLeft>
        <p className='ml-16 text-xl'>{message}</p>
      </div>
    </div>
  );
};

export default MyReviewsRow;