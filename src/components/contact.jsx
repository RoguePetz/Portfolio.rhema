import React from 'react';
import Button from 'react-bootstrap/Button';
import github from './assets/images/github.png'
import gmail from './assets/images/gmail.png'
import linkedin from './assets/images/linkedin.png'


function Contact() {
    return (
      <div className=' flex flex-col'>
            <h2>Contact Me</h2>
            <p>Feel free to reach out on the following platforms</p>
            <div className='flex items-center'>
                <img src={gmail} width={50}/>
                <a href='mailto:briggsrhema@gmail.com'>Gmail</a>
            </div>
            <div className='flex items-center'>
                <img src={github} width={50}/>
                <a href='https://github.com/RoguePetz'>Github</a>
            </div>
            <div className='flex items-center'>
                <img src={linkedin} width={50}/>
                <a href='https://www.linkedin.com/in/rhema-briggs-ikeotuonye-5312a82a1/'>Linkedin</a>
            </div>
      </div>
    );
  }

  export default Contact;
  