import React from 'react';
import homeimg from './assets/images/avatar.png'
import TextChanger from './textChanger';
function Hero() {
    return (
      <div className=' flex w-full h-full px-[50px] '>
        <div className='hlayout flex '>
          <div className='hname flex flex-col justify-center'>
            <h2 className='leading-2 font-bold text-[40px] w-[400px]'>Rhema<br/>Briggs-Ikeotuonye</h2>
            <div className=' w-[100px] h-[5px] my-[10px] rounded-lg bg-blue-300'></div>
            <div>
              <a href='mailto:briggsrhema@gmail.com'>Gmail</a> | <a href='https://www.linkedin.com/in/rhema-briggs-ikeotuonye-5312a82a1/'>Linkedin</a> | <a href='https://github.com/RoguePetz'>Github</a>
            </div>
            <div className='border-[1px] border-blue-300 h-[40px] w-[150px] flex justify-center items-center'><a className=' bg-transparent font-bold' href='mailto:briggsrhema@gmail.com' >CONTACT ME</a></div>
          </div>
          <div className='himg w-[40%]'><img src={homeimg}/></div>
          <div className='hintro flex flex-col mt-[100px] w-[40%] justify-center '>
            <p>INTRDUCTION</p>
            <p><TextChanger/></p>
            <p>tdcvugbbiuvvcfcjgngx xrdfvhniu  ycuvguogb vicguhnuv ixuz\kzyic uf</p>
          </div>
        </div>
      </div>
    );
  }
  
  export default Hero;