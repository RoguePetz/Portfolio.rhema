import React from 'react';
import homeimg from './assets/images/intro_img.png'
import Button from 'react-bootstrap/Button';
import TextChanger from './textChanger';
function Hero() {
    return (
      <div className=' flex flex-col justify-center items-center'>
          <img src={homeimg} width={300}/>
           <div className='flex flex-col justify-center text-center'>
             <h2 className='leading-2 text-gray-400'>Hello i'm Rhema</h2>
             <p className=''><TextChanger/></p>
             <p>Welcome to my portfolio feel free to look around</p>
             <Button  variant="outline-dark">Hire</Button>
           </div> 
      </div>
    );
  }
  
  export default Hero;