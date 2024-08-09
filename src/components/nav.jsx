import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
function NNav() {
    return (
      <Navbar expand="lg" className="">
      <Container className='flex '>
        <Navbar.Brand href="#home" className=''>Portfolio</Navbar.Brand>
        <Navbar.Toggle className='' aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="/" className=''>Home</Nav.Link>
            <Nav.Link href="/contact"  className=''>Projects</Nav.Link>
            <Nav.Link href="/contact"  className=''>Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
  }
  export default NNav;