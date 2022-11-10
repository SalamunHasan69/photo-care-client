import React, { useEffect, useState } from 'react';

const myReviewsRow = ({ myReviewsRow }) => {

  const { _id, name, message } = myReviewsRow;
  // const [user, setUser] = useState();

  // useEffect(() => {
  //   fetch(`http://localhost:5000/myReviews/${_id}`)
  //     .then(res => res.json())
  //     .then(data => console.log(data));
  // }, [_id]);

  return (
    <tr>
      <th>
        <label>
          <button className='btn btn-ghost'>X</button>
        </label>
      </th>
      <td>
        <div className="flex items-center space-x-3">
          <div>
            <div className="font-bold">{name}</div>
          </div>
        </div>
      </td>
      <td>
        {message}
      </td>
    </tr>
  );
};

export default myReviewsRow;