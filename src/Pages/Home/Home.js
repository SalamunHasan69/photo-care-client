import React from 'react';
import { Helmet } from "react-helmet"

import Banner from './Banner';
import Biography from './Biography';
import Services from './Services';

const Home = () => {
  return (
    <div>
      <Helmet htmlAttributes>
        <html lang="en" />
        <title>Photo Care</title>
        <meta name="description" content="Basic example" />
      </Helmet>
      <Banner></Banner>
      <Biography></Biography>
      <Services></Services>
    </div>
  );
};

export default Home;