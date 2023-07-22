import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container'
import './daycare.css'
import BlankComponent from '../../componentsv2/BlankComponent';
import DaycarePolicies from '../../componentsv2/DaycarePage/DaycarePolicies';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// This page will contain everything you need to know about daycare
// all policies will be on this page and fees.
const DaycarePage = () => {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  if (loading) {
    return <BlankComponent />
  } else {
    return (
      <Container className='daycare-page-container'>
        <Container>
          <h1>Daycare</h1>
        </Container>
        <Container>
          <Row className='center'>
            <Col>
              <div className='daycare-background-1'></div>
            </Col>
            {/* <Col>
              <div className='daycare-background-2'></div>
            </Col> */}
          </Row>
        </Container>
        <hr className='divider-color-5'/>
        <Container>
          <h4>Content about daycare goes here</h4>
        </Container>
        <hr className='divider-color-2'/>
        <DaycarePolicies />
      </Container>
    );
  }
}

export default DaycarePage;
