import React from 'react';
import game from "./assets/images/game-controller.png"
import web from "./assets/images/web.png"
import ai from "./assets/images/ai.png"
import avatar from "./assets/images/avatar.png"
import Button from 'react-bootstrap/Button';

function Hero() {
    return (
      <div className='bg-black'>
          <div className=' flex flex-col items-center'>
                <img src={avatar} width={400} className=''/>
                <p className=' text-2xl text-stone-500'>Hi i'm</p>
                <h1  className='bg-black text-white font-normal'>Rhema Briggs</h1>
                
                <div className=' p-2 flex gap-6'>
                  <Button variant="outline-light">Resume</Button>
                  <Button variant="light">Hire</Button>
                </div>
          </div>
      </div>
    );
  }
  
  export default Hero;