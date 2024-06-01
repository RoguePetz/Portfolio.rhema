import React from 'react';
import game from "./assets/images/game-controller.png"
import web from "./assets/images/web.png"
import ai from "./assets/images/ai.png"
import avatar from "./assets/images/avatar.png"

function Hero() {
    return (
      <div className='bg-black'>
          <div className=' flex flex-col items-center'>
                <img src={avatar} width={400} className=''/>
                <h1  className='bg-black text-white font-normal'>Rhema Briggs</h1>
                <div className=' flex gap-4'>
                  <div className='bg-black'>
                    <img src={game} width={30} className=' bg-black'/>
                  </div>
                  <div className='bg-black'>
                   <img src={web} width={30} className=' bg-black'/>
                  </div>
                  <div className='bg-black '>
                    <img src={ai} width={30} className=' bg-black'/>
                  </div>
                </div>
          </div>
      </div>
    );
  }
  
  export default Hero;