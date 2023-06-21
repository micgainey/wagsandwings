import React from 'react';
import Logo from './Logo';
import Row from 'react-bootstrap/row';
import Col from 'react-bootstrap/col';
import Button from 'react-bootstrap/button';
import Container from 'react-bootstrap/container'
import Navbar from 'react-bootstrap/navbar'


const MyNavbar = () => {
  return(
    <Navbar fixed='top'>
      <Row>
        <Col 
          className='d-flex align-items-center justify-content-center'
        >
          <a href='/'><Logo /></a>
        </Col>
        <Col
          className='d-flex align-items-center justify-content-center'
        >
            <Button variant='outline-success' size='lg'>click me</Button>
        </Col>
      </Row>
    </Navbar>
  )
}

export default MyNavbar;
