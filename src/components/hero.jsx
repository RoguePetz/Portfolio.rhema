import React from 'react';
import homeimg from './assets/images/intro_img.png'
import Button from 'react-bootstrap/Button';

function Hero() {
    return (
      <div >
            <div className='intro flex items-center  pt-20 '>
                <div className='ok'>
                    <p className=' text-slate-400 text-xl'>Hello im,</p>
                    <h1 className=' font-bold text-5xl'>Rhema Briggs</h1>
                    <div className=' flex gap-3'>
                        <Button variant="outline-dark">Hire</Button>
                        <Button variant="dark">Resume</Button>
                    </div>
                </div>
                <img src={homeimg}/>
            </div>
      </div>
    );
  }
  
  export default Hero;