import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../components/Logo';
import Button from 'react-bootstrap/Button';

const OurNavbar = () => {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="/"><Logo ImageHeight={70}/></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="daycare">Daycare</Nav.Link>
              <Nav.Link href="boarding">Boarding</Nav.Link>
              <Nav.Link href='extra-services'>Extra Services</Nav.Link>
              <Nav.Link href='about-us'>About Us</Nav.Link>
              <Nav.Link href='health-and-safety'>Health & Safety</Nav.Link>
            </Nav>
            <Nav>
            <Button
              variant='outline-success' 
              size='md'>
                Book now!
            </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default OurNavbar;
