import React, { useContext, useEffect, useState } from 'react';
import { Helmet } from "react-helmet"
import { AuthContext } from '../../Contexts/AuthProvider';
import myReviewsRow from './myReviewsRow';

const MyReviews = () => {

  const { user } = useContext(AuthContext);
  const [review, setReview] = useState([])

  useEffect(() => {
    fetch(`http://localhost:5000/myReviews?email=${user.email}`)
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

      <div className="overflow-x-auto w-full">
        <table className="table w-full lg:w-[50%] mx-auto">
          <thead>
            <tr>
              <th>
              </th>
              <th>Name</th>
              <th>Review</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {
              review.map(myReview => <myReviewsRow
                key={myReview._id}
                myReview={myReview}
              ></myReviewsRow>)
            }
          </tbody>
        </table>
      </div>

    </div>
  );
};

export default MyReviews;