import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

const MainLandingCover = () => {
  return (
    <>
      <Container fluid id='landing-container'>
        <Row id='main-landing-cover'>
          <Col lg className='left-column'>
            <Image id='main-image-landing' src={require('../images/daycare-example.png')} />
          </Col>
          <Col lg id='right-column-text'>
            <Container fluid>
              <h1 id='landing-text'>
                Where your pet's happiness, comfort, and well-being are at the heart of everything we do.
              </h1>
            </Container>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default MainLandingCover;

// below is if i want to make the photo next to the main text
// eslint-disable-next-line no-lone-blocks
{/* <Col sm={8} className='col-image-cover'>
  <ImageFrame CSS={'image-boarder-radius'} Source={'mural-example.png'} ImageHeight={5000} ImageWidth={5000}/>
</Col>
<Col sm={4} className='col-text-align'>
  <Container fluid>
    <h1 id='landing-text'>
      Where your pet's happiness, comfort, and well-being are at the heart of everything we do.
    </h1>
  </Container>
</Col> */}