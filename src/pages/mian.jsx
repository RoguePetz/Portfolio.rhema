import React from 'react';
import NNav from '../components/nav';
import Hero from '../components/hero';
import gith from '../components/assets/images/github.png'


function Main() {
    return (
      <div className=''>  
            <NNav/>
            <div className='fixed flex flex-col-reverse top-[70%] justify-center items-center'>
              <div className='w-[2px] h-[90px] bg-black'></div>
              <img className=' w-[40px]' src={gith}/>
            </div>
            <section class="wrapper">
                <div id="stars"></div>
                <div id="stars2"></div>
                <div id="stars3"></div>
            </section>  
               <div  className=''>
                  <Hero/>
               </div> 
             
            
      </div>
    );
  }
  
  export default Main;