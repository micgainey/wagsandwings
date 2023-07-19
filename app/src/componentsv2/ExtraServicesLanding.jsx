import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

const ExtraServicesLanding = () => {
  return (
    <Container fluid className='page-container color-3-background'>
      <Row>
        <Col lg id='extra-services-background'>
          {/* This will be the image on the left */}
          <h1 className='vertical-center center title'>Extra Services</h1>
        </Col>
        <Col lg className='parent'>
          {/* This will be the info on the right */}
          <Container className='text-container'>
            <hr className='divider-color-1'/>
            <h2 className='color-5'>Extra Services</h2>
            <p className='color-5'>
              Just like people, different pets enjoy different services! Whether it's a simple bath, or a spa treatment like our Barktastic Blissful Bath, or our Pawfect Pooch package, or our Spa Pawdicure, your pet will surely leave feeling clean, and smelling fresh. We will be offering more advanced grooming services in the future.
            </p>
            <p className='color-5'>
              Wags ’n’ Wings prides itself on its inclusivity; we warmly welcome pets of all types, whether they sport fur, feathers, or scales. Yes, that means we happily accommodate tortoises, pet pigs, rats, rabbits, guinea pigs, and more. All it takes is space available, and a conversation about care, needs, and space requirements. 
            </p>
            <Container className="center">
              <Button variant="outline-success">Learn More</Button>
            </Container>
            <hr className='divider-color-2'/>
          </Container>
        </Col>
      </Row>
    </Container>
  )
}

export default ExtraServicesLanding;
