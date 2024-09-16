import React from 'react';
import nameimg from './assets/images/Group (1).png'
import TextChanger from './textChanger';
import vid from './assets/images/lv_0_20240916050944.mp4'
function Hero() {
    return (
      <div className=' flex flex-col w-full h-[60vh] justify-center items-center'>
          <div className=' relative w-64 h-64 overflow-hidden border-x-2 border-double border-black rounded-full'>
            <video 
              src={vid} 
              autoPlay 
              loop 
              muted 
              playsInline 
              className=' absolute inset-0 w-full h-full object-cover'
          >
              Your browser does not support the video tag.
            </video>
            
          </div>
          <img src={nameimg} className=' absolute top-[50%] w-[500px]'/>
      </div>
    );
  }
  
  export default Hero;