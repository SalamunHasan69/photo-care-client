import React from 'react';
import { useLoaderData } from 'react-router-dom';
// import { Link } from 'react-router-dom';
// import { FaArrowRight } from "react-icons/fa";
import 'react-photo-view/dist/react-photo-view.css';
import { PhotoProvider, PhotoView } from 'react-photo-view';

const ServiceDetails = () => {

  const { img, title, price, description } = useLoaderData();

  return (
    <div>
      <div className="mx-auto my-20 max-w-lg p-4 shadow-md bg-black dark:text-gray-100">
        <div className="flex justify-between pb-4 border-bottom items-center">
          <div>
            <h3 className="mb-0 capitalize text-white text-3xl">{title}</h3>
          </div>
        </div>
        <div className="space-y-4">
          <PhotoProvider>
            <div className="space-y-2">
              <PhotoView src={img}>
                <img src={img} style={{ objectFit: 'cover', cursor: 'pointer' }} alt="" className="block object-cover object-center w-full rounded-md h-72 " />
              </PhotoView>
            </div>
          </PhotoProvider>
          <div className="space-y-2">
            <h3 className="text-xl font-semibold text-success">Price: ${price}</h3>
            {/* <Link to={`/serviceDetails/${_id}`} className='text-success text-2xl font-bold' >
              <FaArrowRight></FaArrowRight>
            </Link> */}
            <p className="leading-snug text-white">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;