import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";

const ExtraServicesLanding = () => {
  return (
    <Container fluid className='page-container color-3-background'>
      <Row>
        <Col lg id='extra-services-background'>
          {/* This will be the image on the left */}
          {/* <h1 className='vertical-center center title'>Extra Services</h1> */}
        </Col>
        <Col lg className='parent'>
          {/* This will be the info on the right */}
          <Container className='landing-content-container'>
            <hr className='divider-color-1'/>
            <h2 className='color-5'>Extra Services</h2>
            <h5 className='color-5 line-spacing-landing'>
              Just like people, different pets enjoy different services! Whether it's a simple bath, or a spa treatment like our Barktastic Blissful Bath, Pawfect Pooch package, or Spa Pawdicure, your pet will surely leave feeling clean, and smelling fresh. We will be offering more advanced grooming services in the future.
            </h5>
            <br />
            <Container className="center">
              <Link to='/extra-services'>
                <Button variant="outline-success">
                  Learn More
                </Button>
              </Link>
            </Container>
            <hr className='divider-color-2'/>
          </Container>
        </Col>
      </Row>
    </Container>
  )
}

export default ExtraServicesLanding;
