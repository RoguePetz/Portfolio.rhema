import React from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

function Nav() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
      <div className=" h-16 content-center bg-black">
        <div className=" flex justify-between content-center px-10 bg-black">
            <div className=' content-center text-white text-lg bg-black'>
                Portfolio
            </div>
            <div>
            <Button variant="light" onClick={handleShow}>
                Menu
            </Button>
            <Offcanvas  show={show} onHide={handleClose}>
                <Offcanvas.Header  variant="light" closeButton>
                <Offcanvas.Title className='text-white'>Menu</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body className='text-white'>
                Some text as placeholder. In real life you can have the elements you
                have chosen. Like, text, images, lists, etc.
                </Offcanvas.Body>
            </Offcanvas>
            </div>
        </div>
      </div>
    );
  }
  
  export default Nav;