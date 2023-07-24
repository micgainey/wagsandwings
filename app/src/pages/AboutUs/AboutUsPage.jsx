import React from 'react';
import './aboutus.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const AboutUs = () => {
  return (
    <Container className='au-page-container'>
      <div className='aboutus-photo'></div>
      <br />
      <br />
      <Container id='about-us-container'>
        <h1 className='center'>About Us</h1>
        <hr className='divider-color-5'/>
      </Container>
      <br />
      <Row>
        <Col>
          {/* <hr className='divider-color-5'/> */}
          <h5>
            Introducing Wags ‘n’ Wings, Oahu’s newest pet daycare and boarding facility, offering a wide range of services tailored to pets of all kinds. Our offerings include boarding, daycare, and bathing, as well as enrichment activists, ensuring that your beloved companions receive top-notch care.
          </h5>
          <h5>
            At Wags ‘n’ Wings, your pet’s safety is our top priority. That is why we maintain an incredibly low pet to human ratio, with no more than 10 pets per attentive caregiver. This ensures that each furry, feathery, or scaly friend receives personalized attention and supervision throughout their stay.
          </h5>
          <h5>
            For our feathered friends we boast a climate controlled space where they can rest in the comfort of their cage, or spread their wings, exercise freely, and revel in a secure environment. 
          </h5>
          <h5>
            Our dog program is equally diverse featuring flexible options ranging from all day play, to a balance of training and interaction, as well as private options for those who prefer a more relaxed setting, or may not be entirely social. 
          </h5>
          <h5>
            Join us at Wags ‘n’ Wings, where your pets happiness, comfort, and well-being are at the heart of everything we do.
          </h5>
        </Col>
      </Row>
    </Container>
  )
}

export default AboutUs;
