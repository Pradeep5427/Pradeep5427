import React from 'react';
import Header from '../components/Header'; 
import Products from '../components/products';
import Features from '../components/feature';
import Review from '../components/reviews';
import Footer from './footer';


function Home() {
  
    return (
      
      <div className="home">
      <Header />
      <Products />
      <Features />
      <Review/>
      <Footer />
      
      </div>
    );
  }
  
  export default Home;