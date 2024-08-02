import React from 'react';
import aboutimg from './assets/images/about_img.png'
import Button from 'react-bootstrap/Button';


function Cards() {
    return (
      <div className=' shadow flex-1 h-[200px] rounded-lg'>
          <div className=' p-3'>
              <h5 className=''>card1</h5>
              <p>isponlorem</p>
              <Button>open</Button>
          </div>
      </div>
    );
  }
  
  export default Cards;