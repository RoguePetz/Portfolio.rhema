import React from 'react';
import NNav from '../components/nav';
import Hero from '../components/hero';
import Footer from '../components/Footer';


function Main() {
    return (
      <div>
        <NNav/>
        <div className=' px-20'>
          <Hero/>
          
        </div>
          
        <Footer/>
      </div>
    );
  }
  
  export default Main;