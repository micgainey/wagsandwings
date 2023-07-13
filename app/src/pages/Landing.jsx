import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

const Landing = () => {
  return(
    <>
      <div className='page-container background-gradient' dir='ltr'>
        <Container fluid id='center-text-landing-container'>
          <Row>
            <Col>
              <Image src="../src/images/landing-background.jpg" roundedCircle />
            </Col>
            <Col>
              <h1 id='landing-text'>
                Where your pet's happiness, comfort, and well-being are at the heart of everything we do.
              </h1>
            </Col>
          </Row>
        </Container>
      </div>
      <div className='page-container white' dir='ltr'>
        <Container fluid>

        </Container>
      </div>
      <div className='page-container blue' dir='ltr'>
        <Container fluid>

        </Container>
      </div>
    </>

  )
}

export default Landing;
