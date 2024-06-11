import React from 'react';
import game from "./assets/images/game-controller.png"
import web from "./assets/images/web.png"
import ai from "./assets/images/ai.png"


function Services() {
    return (
      <div className='flex flex-col mt-24 text-white justify-center items-center w-full'>
        <p className=' text-4xl'>Services</p>
        <div className=' flex gap-4'>
            <div className=' flex flex-col items-center p-3 rounded-xl'>
              <img src={game} width={70}/>
              <p>Game Dev</p>
            </div>
            <div className=' flex flex-col items-center p-3 rounded-xl'>
              <img src={web}  width={70}/>
              <p>web Dev</p>
            </div>
            <div className=' flex flex-col items-center p-3  rounded-xl'>
              <img src={ai}  width={70}/>
              <p>AI Dev</p>
            </div>
        </div>
      </div>
    );
  }
  
  export default Services;