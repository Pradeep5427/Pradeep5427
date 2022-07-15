import React from 'react';
import Products from '../components/products';
import Features from '../components/feature';
import Review from '../components/reviews';
import Flex from '../pages/flex';


function Home() {
  
    return (
      
      <div className="home">
      <Products />
      <Features />
      <Review/>
      <Flex />
      </div>
    );
  }
  
  export default Home;