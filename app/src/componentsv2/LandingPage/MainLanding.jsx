import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const MainLanding = () => {
  return (
    <Container fluid>
      <Row className='background'>
        <Col lg className='parent-main vertical-center'>
          <h1 className='child vertical-center title'>Wags 'n' Wings, where your pet children come to play.</h1>
        </Col>
        <Col lg className='parent-main vertical-center'>
          {/* <h1 className='child vertical-center'>Something else goes here</h1> */}
        </Col>
      </Row>
    </Container>
  )
}

export default MainLanding;
