import React, { useContext, useEffect, useState } from 'react';
import { Helmet } from "react-helmet"
import { AuthContext } from '../../Contexts/AuthProvider';
import MyReviewsRow from './MyReviewsRow';

const MyReviews = () => {

  const { user } = useContext(AuthContext);
  const [review, setReview] = useState([])

  console.log(review);

  useEffect(() => {
    fetch(`https://photo-care-server.vercel.app/myReviews?email=${user.email}`)
      .then(res => res.json())
      .then(data => setReview(data))
  }, [user?.email])

  return (
    <div>
      <Helmet htmlAttributes>
        <html lang="en" />
        <title>User Reviews Photo Care</title>
        <meta name="description" content="Basic example" />
      </Helmet>

      <div className="lg:grid grid-cols-2 w-[90%] lg:w-[50%] mx-auto gap-4 my-20">
        {
          review.map(myReview => <MyReviewsRow
            key={myReview._id}
            myReview={myReview}
          ></MyReviewsRow>)
        }
      </div>

    </div>
  );
};

export default MyReviews;