import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const ContactPage = () => {
  return (
    <Container className='contact-page-container'>
      <br />
      <Row className='center'>
        <h1>Contact Us:</h1>
      </Row>
      <br />
      <Row xs={1} sm={2} md={2} lg={2} className='center'>
        <Col><h4>Phone: <a href='tel:808-517-3200'> (808)517-3200</a></h4></Col>
        <Col>
          <Row><h4>6:30am-6:30pm Mon-Fri</h4></Row>
          <Row><h4>7:00am-6:30pm Sat & Sun</h4></Row>
        </Col>
      </Row>
      <br />
      <Row className='center'>
        <Col><h4>Email:<a href='mailto: rya@wagsnwings.com'> rya@wagsnwings.com</a></h4></Col>
      </Row>
      <br />
      <Row className='center'>
        <h4>For urgent after hour needs, please text:</h4>
      </Row>
      <Row className='center'><h5>808-216-0432</h5></Row>
      <Row className='center'><h5>808-226-3749</h5></Row>
      <Row className='center'><h4>We will get to you as soon as we can!</h4></Row>
    </Container>
  );
}

export default ContactPage;
