import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Accordion from 'react-bootstrap/Accordion';
// import useWindowDimensions from './useWindowDimensions';


const Daycare = () => {
  // const { height, width } = useWindowDimensions();
  

  return (
    <>
      <Container fluid id='daycare'>
        <Row>
          <Col sm id='first-column-daycare-mobile'>
            <div id='row-daycare' >
              <h1 id='daycare-title'>Daycare</h1>
            </div>
          </Col>
          <Col sm className='padding-center'>
            <Accordion defaultActiveKey="0" >
              <Accordion.Item eventKey="0">
                <Accordion.Header>Policies</Accordion.Header>
                <Accordion.Body>
                
                  <ul>
                    <li>No dogs in heat</li>
                    <li>We do not have an age policy. But the health of the dog must be in good standing.</li>
                    <li>Proof of vaccination. All vaccinations must be current</li>
                    <li>Must currently be on topical or oral flea, tick, and heartworm medication.</li>
                    <li>All dogs are required to have collars with a dogtag that has the following:
                      <ul>
                        <li>First Name</li>
                        <li>Last Name</li>
                        <li>Phone Number</li>
                      </ul>
                    </li>
                    <li>Dogs must be on a leash prior to check-in.</li>
                    <li>If you would like your dog to be on a meal schedule you must provide food and instructions to us. If you forgot to bring a meal you may purchase a meal with us using the brand of our choice.</li>
                    <li>If your dog requires prescription medications, you must bring the medicine in a sealed container with complete instructions on how to administer and store. (+$5 for each medication)</li>
                    <li>Dogs are required to participate in a behavior evaluation (half-day) at the cost of the owner ($30)</li>
                    <li>All dogs must be non-aggressive and not be possessive of any food or toys</li>
                    <li>Although all dogs will be supervised, the occasionally a dog may be nipped or scratched. In this case the owner will be informed.</li>
                    <li>Nails must be trimmed.</li>
                  </ul>
                
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>Pricing</Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                  minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                  aliquip ex ea commodo consequat. Duis aute irure dolor in
                  reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                  pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                  culpa qui officia deserunt mollit anim id est laborum.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Daycare;
