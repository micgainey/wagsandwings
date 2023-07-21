import React from 'react'
import BirdPolicies from '../policies/BirdPolicies';
import BirdOffer from '../offers/BirdOffer';
import Accordion from 'react-bootstrap/Accordion';

function BirdSection() {
  return (
    <div>
      <h3 className=''>Birds</h3>
      <BirdOffer />
      <br />
      <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Pricing</Accordion.Header>
        <Accordion.Body>
          <p>$20.00 - $35.00/Day</p>
          <p>Depending on bird size and required care; Connect with Rya</p>
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