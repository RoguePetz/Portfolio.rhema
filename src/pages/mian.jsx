import React from 'react';
import NNav from '../components/nav';
import Hero from '../components/hero';
import Cards from '../components/Cards';


function Main() {
    return (
      <div className=''>
        <NNav/>
        <div className='Ccol flex px-[30px]' >
          <div className='Cwid w-[50%]'>
            <Hero/>
          </div>
          <div className='Cwid py-4 flex w-[50%]'>
            <Cards/>
          </div>
        </div>
        
      </div>
    );
  }
  
  export default Main;