import React from 'react'
import SmallAnimalOffer from '../offers/SmallAnimalOffer';
import SmallAnimalPolicies from '../policies/SmallAnimalPolicies';
import Accordion from 'react-bootstrap/Accordion';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function SmallAnimalSection() {
  return (
    <div>
      <h3 className=''><strong>Small Animals</strong></h3>
      <SmallAnimalOffer />
      <br />
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Pricing</Accordion.Header>
          <Accordion.Body>
            <p>Small animals: $35.00</p>
            <p>+$5.00 if your pet requires fresh veggie's</p>
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
            <SmallAnimalPolicies />
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  )
}

export default SmallAnimalSection