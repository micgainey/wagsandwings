import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

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
          <Container>
            <hr className='divider-color-1'/>
            <h2 className='color-5'>Daycare</h2>
            <p className='color-5'>There's nothing better than knowing that your pet is safe, and having fun while you are apart. Our Day Care program features flexible options ranging from all day play, to enrichment and interaction, private play for a more relaxed setting or for pets who aren’t entirely social. We have tailored programs to accommodate them all. We have day care packages that offer discounts for multi-day purchases, and the option for half day and full day stays. Our location, in Halawa Valley, has easy access to HI, H2, and H3 making it a convenient location for all parts of our island. For the safety of your pet, we have holding areas for your pet to decompress before joining their friends in the common areas, and safeguards to ensure that your pet is NEVER left unattended. And to keep your pet cool and comfortable we have air-conditioning throughout, and water days and refreshing treats to cool off and have fun!</p>
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
            <Container className="center padding-tb-10">
              <Button variant="outline-success">
                Learn More
              </Button>
            </Container>
            <hr className='divider-color-2'/>
          </Container>
        </Col>
      </Row>
    </Container>
  )
}

export default DaycareLanding;
