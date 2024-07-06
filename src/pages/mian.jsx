import React from 'react';
import NNav from '../components/nav';
import Hero from '../components/hero';


function Main() {
    return (
      <div>
        <NNav/>
        <div className=' px-20'>
          <Hero/>
        </div>
      </div>
    );
  }
  
  export default Main;