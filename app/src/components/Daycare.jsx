import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Accordion from 'react-bootstrap/Accordion';
// import useWindowDimensions from './useWindowDimensions';
import Boarding from './Boarding';

const Daycare = () => {
  // const { height, width } = useWindowDimensions();
  
  return (
    <>
      <Container fluid id='daycare'>
        <Row>
          <Col sm id='first-column-daycare-mobile'>
            <div id='row-daycare' >
              <h1 className='title'>Daycare</h1>
            </div>
          </Col>
          <Col sm className='padding-center'>
            <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="0">
                <Accordion.Header>Policies</Accordion.Header>
                <Accordion.Body>
                
                  <ul>
                    <li>No dogs in heat</li>
                    <li>No age policy. But the heath of the dog must be in good standing.We will also take dogs with disablilities. Please inquire for rates.</li>
                    <li>Your pet must be up to date on all vaccinations, and proof of documentation must be uploaded to our system prior to boarding or daycare.</li>
                    <li>Your pet must currently be on topical or oral flea, tick, heartworm medication.</li>
                    <li>All dogs are required to have collars with a dogtag that has the following:
                      <ul>
                        <li>First Name</li>
                        <li>Last Name</li>
                        <li>Phone Number</li>
                      </ul>
                      These collars must be worn during their stay.
                      <ul>
                        <li>IF a dog comes into daycare without one, we will provide a name tag and collar for $20.00</li>
                      </ul>
                    </li>
                    <li>Dogs must be on a leash prior to check-in.</li>
                    <li>If you would like your dog to be on a meal schedule you must provide food and instructions to us. If you forgot to bring a meal you may purchase a meal with us using the brand of our choice.</li>
                    <li>If your dog requires prescription medications, you bring it in a sealed container with detailed instructions on how to administer and store. (+$5 for each medication)</li>
                    <li>Dogs are required to participate in a behavior evaluation (half-day) at the cost of the owner ($30)</li>
                    <li>All dogs must be non-aggressive and not be possessive of any food or toys</li>
                    <li>Although all dogs will be supervised, the occasionally a dog may be nipped or scratched. In this case the owner will be informed.</li>
                    <li>No refunds for early pickup.</li>
                    <li>Nails must be trimmed, if they aren't, we can trim your pet's nails for $10. This will ensure that we minimize injuries due to scratching.</li>
                  </ul>
                
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>Pricing</Accordion.Header>
                <Accordion.Body>
                  Pricing for daycare(lbs):
                  <ul>
                    <li>Dogs &lt; ?: $35.00</li>
                    <li>Dogs ? to ?: $40.00</li>
                    <li>Dogs ? to ?: $45.00</li>
                  </ul>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
        </Row>
      </Container>
      <div className='page-container' dir='ltr'>
        <Boarding id='boarding' />
      </div>
    </>
  );
}

export default Daycare;
