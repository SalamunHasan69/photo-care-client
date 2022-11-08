import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';

const Services = () => {

  const [services, setServices] = useState([]);
  const [visible, setVisible] = useState(3);

  const handleMore = () => {
    setVisible((preValue) => preValue + 3);
  };

  useEffect(() => {
    fetch('http://localhost:5000/services')
      .then(res => res.json())
      .then(data => setServices(data))
  }, [])

  return (
    <div>
      <div className='text-center my-5'>
        <h4 className='italic text-success text-xl font-medium'>SERVICES</h4>
        <h2 className='text-4xl font-bold text-black'>Who I Do?</h2>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-[80%] mx-auto'>
        {
          services.slice(0, visible).map(service => <ServiceCard
            key={service._id}
            service={service}
          ></ServiceCard>)
        }
      </div>
      <div className='text-center mt-5 mb-20'>
        <button onClick={handleMore} className='btn btn-outline btn-success'>Show More</button>
      </div>
    </div>
  );
};

export default Services;