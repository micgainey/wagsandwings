import React from 'react'
import BirdPolicies from '../policies/BirdPolicies';
import BirdOffer from '../offers/BirdOffer';
import Accordion from 'react-bootstrap/Accordion';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function BirdSection() {
  return (
    <div>
      <h3 className=''><strong>Birds</strong></h3>
      <BirdOffer />
      <br />
      <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Pricing</Accordion.Header>
        <Accordion.Body>
          <p>$25.00 to $50.00 (per bird)</p>
          <p>Bird pricing is based on type of bird and required care; Please email <a href = "mailto: rya@wagsnwings.com">rya@wagsnwings.com</a> to discuss options.</p>
          <Row>
            <Col className='center'>
              <br/>
              <h6>Updated October 31st, 2026</h6>
            </Col>
          </Row>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Policies</Accordion.Header>
        <Accordion.Body>
          <BirdPolicies />
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    </div>
  )
}

export default BirdSection