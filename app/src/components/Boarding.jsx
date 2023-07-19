import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Boarding = () => {
  return(
    <>
      <Container fluid id='boarding'>
        <Row>
          <Col sm id='first-column-daycare-mobile'>
            <div id='row-boarding' >
              <h1 className='title'>Boarding</h1>
            </div>
          </Col>
          <Col sm className='padding-center scrollable'>
            <Accordion defaultActiveKey='0'>
              {/* Dogs */}
              <Accordion.Item eventKey='0'>
                <Accordion.Header>Policies and Pricing for Dogs.</Accordion.Header>
                <Accordion.Body>
                  <p>All dogs in boarding will be placed in daycare throughout the day. Therefore, they are subject to all daycare policies along with the ones below.</p>
                  <br />
                  <ul>
                    <li><strong>If you are boarding a dog, we will take 1 small animal at no charge(rabbit, guinea pig, fish, mouse, inquire about any other) Based on the space available..</strong></li>
                    <li>Cost of boarding will be determined by the weight of your dog.</li>
                    <li>While your dog is boarding they will participate in daycare activities. Because of this they will need to attend 1 half day of daycare at least 2 weeks before boarding dates.</li>
                    <li>Since all pets have different dietary needs you must provide food portioned in individual ziplock bags for each meal. We also ask that you provide the feeding schedule that your pet is accustomed to.</li>
                    <li>We also have accommodations for dogs who are not socialized, please inquire for pricing.</li>
                    <li>Payment for boarding is 50% deposit at reservation and the remaining balance at pickup.</li>
                    <li>No refunds for early pickup.</li>
                  </ul>

                  <br />
                  <ul>
                    <li>Small $60.00/day</li>
                    <li>Medium $63.00/day</li>
                    <li>Large $73.00/day</li>
                  </ul>
                </Accordion.Body>
              </Accordion.Item>

              {/* Cats */}
              <Accordion.Item eventKey='2'>
                <Accordion.Header>Policies and Pricing for Cats</Accordion.Header>
                <Accordion.Body>
                  <ul>
                    <li>All cats will have a dedicated kennel.</li>
                    <li>Cats brought in for boarding will have designated hours for community play with one to three cats out at a time.</li>
                    <li>Cats will be required to have current vaccinations (FVRCP) and must be in good heath at check-in.</li>
                    <li>While we do not have daycare packages for cats, depending on boarding capacity we make make exceptions. Please inquire for more information.</li>
                    <li>Since cats have different dietary needs you must provide food in portioned ziplock bags for each meal that you are requiring. You must also provide a feeding schedule that we will adhere to.</li>
                    <li>If your cat requires medications, you must bring it in a sealed container with complete instructions on how to administer and store. (+ $5 for each medication)</li>
                    <li>Cats are required to have a collar and name tag with:
                      <ul>
                        <li>First name</li>
                        <li>Last name</li>
                      </ul>
                    </li>
                    <li>No refunds for early pickup</li>
                  </ul>

                  Boarding $30.00/day
                </Accordion.Body>
              </Accordion.Item>

              {/* Birds */}
              <Accordion.Item eventKey='3'>
                <Accordion.Header>Policies and Pricing for Birds</Accordion.Header>
                <Accordion.Body>
                  <ul>
                    <li>Cage must be provided.</li>
                    <li>No vaccinations required, but birds must be in good health. There will be a visual inspection upon check-in.</li>
                    <li>Food must be provided in portioned ziplock bags for each meal.</li>
                    <li>If your bird requires prescription medications, you must bring it in a sealed container with complete instruction on how to administer and store. (+ $5 for each medication)</li>
                    <li>Birds will be fed once per day, unless specific instructions are provided.</li>
                    <li>Cage cleaning will be conducted daily.</li>
                    <li>No refunds for early pickup.</li>
                  </ul>

                  (ask mom what to fill in here)
                </Accordion.Body>
              </Accordion.Item>

              {/* Any other animal */}
              <Accordion.Item eventKey='4'>
                <Accordion.Header>Policies and Pricing for Any Other Pet</Accordion.Header>
              </Accordion.Item>
            </Accordion>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Boarding;
