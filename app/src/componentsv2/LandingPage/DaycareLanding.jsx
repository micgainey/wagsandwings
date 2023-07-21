import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

const DaycareLanding = () => {
  return (
    <Container fluid className='page-container color-3-background'>
      <Row>
        <Col lg id='daycare-background'>
          {/* This will be the image on the left */}
          <h1 className='vertical-center center title'>Daycare</h1>
        </Col>
        <Col lg className='parent'>
          {/* This will be the info on the right */}
          <Container className="landing-content-container">
            <hr className='divider-color-1'/>
            <h2 className='color-5'>Daycare</h2>
            <h5 className='color-5 line-spacing-landing'>
              There’s nothing better than knowing that your pet is safe, and having fun while you are apart. Our Day Care program features flexible options ranging from all day play, to enrichment and interaction activities. We have a tailored program to accommodate all ages and temperaments.
            </h5>
            <br />
            <Container className="center">
              <Row>
                <Col>
                  <h2 className="color-5">Half-day</h2>
                </Col>
                <Col>
                  <h2 className="color-5">Full-day</h2>
                </Col>
              </Row>
              <Row>
                <Col>
                  <h3 className="color-5">$35.00</h3>
                </Col>
                <Col>
                  <h3 className="color-5">$45.00</h3>
                </Col>
              </Row>
            </Container>
            <br />
            <Container className="center padding-tb-10">
              <Link to='/daycare'>
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

export default DaycareLanding;
