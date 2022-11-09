import React, { useContext, useEffect, useState } from 'react';
import { Helmet } from "react-helmet"
import { AuthContext } from '../../Contexts/AuthProvider';

const MyReviews = () => {

  const { user } = useContext(AuthContext);
  const [review, setReview] = useState({})

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

    </div>
  );
};

export default MyReviews;