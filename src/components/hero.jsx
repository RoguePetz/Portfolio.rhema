import React from 'react';
import vid from './assets/images/lv_0_20240916050944.mp4'
import MatrixText from './matrix';
import MatrixTextChanger from './MatrixTextChanger';
function Hero() {
  const texts = [
    'Welcome to the Matrix',
    'Follow the white rabbit',
    'The Matrix has you',
    'Wake up, Neo...',
    'You take the red pill'
  ];
  const texts2 = ['Rhema Briggs','A Software Engineer', 'A Game Developer', 'A Web Developer'];

    return (
      <div className=' hcont flex w-full h-[70vh] justify-center items-center gap-5'>
          <div className='vidimg relative w-[300px] h-[40vh] overflow-hidden border-x-2 border-double border-black rounded-md'>
            <video 
              src={vid} 
              autoPlay 
              loop 
              muted 
              playsInline 
              alt='profile video'
              className=' absolute inset-0 w-full h-full object-cover'
          >
              Your browser does not support the video tag.
            </video>
          </div>
          <div className=' htxt w-[30%]'>
            <MatrixText text="Hi i'm" intervalSpeed={50} />
            <MatrixTextChanger
                texts={texts2}
                glitchChance={0.05}
                intervalSpeed={50}
                changeTextInterval={5000} // Change text every 5 seconds
              />
            <MatrixTextChanger
                texts={texts}
                glitchChance={0.01}
                intervalSpeed={100}
                changeTextInterval={5000} // Change text every 5 seconds
              />
            <div className="button2">Resume</div>
          </div>
      </div>
    );
  }
  
  export default Hero;