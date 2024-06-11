import React from 'react';
import game from "./assets/images/game-controller.png"
import web from "./assets/images/web.png"
import ai from "./assets/images/ai.png"


function Services() {
    return (
      <div className='flex flex-col mt-24 text-white justify-center h-56 bg-neutral-800 items-center w-full'>
        <p className=' text-4xl  bg-neutral-800'>Services</p>
        <div className=' bg-neutral-800 flex gap-12'>
            <div className=' bg-neutral-800 flex flex-col items-center  rounded-xl'>
              <img className=' bg-neutral-800' src={game} width={70}/>
              <p className=' bg-neutral-800' >Game Dev</p>
            </div>
            <div className='  bg-neutral-800 flex flex-col items-center  rounded-xl'>
              <img className=' bg-neutral-800' src={web}  width={70}/>
              <p className=' bg-neutral-800' >web Dev</p>
            </div>
            <div className=' bg-neutral-800 flex flex-col items-center  rounded-xl'>
              <img className=' bg-neutral-800' src={ai}  width={70}/>
              <p className=' bg-neutral-800' >AI Dev</p>
            </div>
        </div>
      </div>
    );
  }
  
  export default Services;