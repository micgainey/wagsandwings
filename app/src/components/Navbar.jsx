import React from 'react';
import Logo from './Logo';
import Row from 'react-bootstrap/row';
import Col from 'react-bootstrap/col';
import Button from 'react-bootstrap/button';
import Navbar from 'react-bootstrap/navbar';


const MyNavbar = () => {
  return(
    <Navbar className='d-flex justify-content-space-between'>
      <Row>
        <Col 
          className='d-flex align-items-center justify-content-center'
        >
          <a href='/'><Logo /></a>
        </Col>
        <Col
          className='d-flex align-items-center justify-content-center ms-auto'
        >
            <Button variant='outline-success' size='lg'>Book now!</Button>
        </Col>
      </Row>
    </Navbar>
  )
}

export default MyNavbar;
