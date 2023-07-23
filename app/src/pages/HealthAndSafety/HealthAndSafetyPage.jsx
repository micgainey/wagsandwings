import React from 'react';
import './healthandsafety.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const HealthAndSafetyPage = () => {
  return (
    <Container className='hns-page-container'>
      <div className='hns-photo'></div>
      <br />
      <br />
      <Container id='hns-title-container'>
        <h1 className='center'>Your pets Health and Safety is our top priority!</h1>
        <hr className='divider-color-2'/>
      </Container>
      {/* <h1 className='center'>Your pets Health and Safety is our top priority!</h1> */}
      {/* <hr className='divider-color-2'/> */}
      <br />
      <Row>
        <Col>
          <h3>Some of the main health and safety features:</h3>
          <ul>
            <li>We have a low pet to human ratio with no more than 10 pets to attentive caregiver.</li>
            <li>When you drop off your pet, we have secure holding areas at our entry, and dog runs so pets can decompress and relax before entering common areas.</li>
            <li>Our team of care givers attended training by experienced dog trainer Marie Selarque, CPDT-KA of Pro Dog Hawaii, ensuring that we are equipped with the skills necessary to ensure a safe and fun environment.</li>
            <li>Filtered Water is available to your pets at all times, with timers set to replenish or change water dispensers throughout the day. Water tests will be done monthly.</li>
            <li>We use Veterinary grade cleaning supplies, with cleaning protocols in place to ensure that our facility is free of harmful germs or bacteria.</li>
            <li>Our facility is outfitted with Central Air throughout, and large fans in our kennel and dog run ensure that there is constant air circulation.</li>
            <li>We have team members scheduled 24 hours per day to address the needs of our guests and handle any issues that could arise. </li>
            <li>In the event that we need Veterinary assistance we have Dr. Eric Ako, DVM to call on. </li>
          </ul>
        </Col>
      </Row>

    
    </Container>
  );
}

export default HealthAndSafetyPage
