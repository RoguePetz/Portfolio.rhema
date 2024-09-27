import React from 'react';
import NNav from '../components/nav';
import Hero from '../components/hero';
import FadeInSection from '../components/fadein';
import TerminalTyping from '../components/TerminalTyping';


function Main() {
    return (
      <div className=''>  
            <NNav/>
            <section class="wrapper">
                <div id="stars"></div>
                <div id="stars2"></div>
                <div id="stars3"></div>
            </section>  
               <div  className=''>
                  <Hero/>
               </div> 
               <div className=' pt-10'>
                    <div id='about'><TerminalTyping fullText="aAbout" typingSpeed={50} repeat={true} delayBeforeRepeat={3000} /></div>

                    <div className=' flex justify-center items-center'>
                      <p className='fnt mx-4 text-[#00ff00] text-[] w-[550px]'>
                        As a Software Engineer, I specialize in developing scalable and efficient solutions that enhance business operations through cutting-edge technology. My focus lies in leveraging robust development frameworks, clean code practices, and modern software architectures to create reliable, maintainable, and innovative applications
                      </p>
                    </div>
               </div>

              
      </div>
    );
  }
  
  export default Main;