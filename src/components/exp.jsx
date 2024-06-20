import React from 'react';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';

function Exp() {
    const [content, setContent] = 
    useState(<p className=' text-lg'> NetHeart Technology <br/> Front-end Developer<br/>
        <br/> ● Led frontend development initiatives using React and Bootstrap to deliver engaging and
        responsive web designs.
        <br/> ● Collaborated with cross-functional teams to produce clean, efficient JavaScript code, improving
        website performance and user satisfaction.
        <br/> ● Developedandmaintained client websites, including e-commerce platforms and personal
        portfolios.</p>);

    const handleClick = () =>{
        setContent(<p className=' text-lg'> NetHeart Technology <br/> Front-end Developer<br/>
            <br/> ● Led frontend development initiatives using React and Bootstrap to deliver engaging and
            responsive web designs.
            <br/> ● Collaborated with cross-functional teams to produce clean, efficient JavaScript code, improving
            website performance and user satisfaction.
            <br/> ● Developedandmaintained client websites, including e-commerce platforms and personal
            portfolios.</p>)
    };
    const handleClick2 = () =>{
        setContent(<p className=' text-lg'> Swiphr <br/> Front-end Developer<br/>
            <br/> ● Led frontend development initiatives using React and Bootstrap to deliver engaging and
            responsive web designs.
            <br/> ● Collaborated with cross-functional teams to produce clean, efficient JavaScript code, improving
            website performance and user satisfaction.
            <br/> ● Developedandmaintained client websites, including e-commerce platforms and personal
            portfolios.</p>)
    };
    const handleClick3 = () =>{
        setContent(<p className=' text-lg'> Deets Circles <br/>
            Back-end Developer Intern <br/><br/>
            ● Architected and developed RESTful APIs for web applications, enhancing functionality and user
            experience. <br/>
            ● Engineered a WebApplication connecting hospitals, hotels, and restaurants with their local
            community. <br/>
            ● Implementedrobust user authentication and encryption mechanisms to safeguard sensitive data.</p>)
    };


    return (
      <div className='bg-black  text-white text-xl flex flex-col items-center mt-40 gap-12'>
            <div className=' flex gap-2'>
            <Button onClick={handleClick} variant="outline-light">Nethear</Button>
            <Button onClick={handleClick2} variant="outline-light">Swiphr</Button>
            <Button onClick={handleClick3} variant="outline-light">Deets Circle</Button>
            </div>
            <div className=' border-solid bg-white border-white h-1 w-24'></div>
            <div className='cont'>
                {content}
            </div>
      </div>
    );
  }
  
  export default Exp;