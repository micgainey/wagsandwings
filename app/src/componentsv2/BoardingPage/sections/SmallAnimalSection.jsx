import React from 'react'
import SmallAnimalOffer from '../offers/SmallAnimalOffer';
import SmallAnimalPolicies from '../policies/SmallAnimalPolicies';
import Accordion from 'react-bootstrap/Accordion';

function SmallAnimalSection() {
  return (
    <div>
      <h3 className=''>Small Animals</h3>
      <SmallAnimalOffer />
      <br />
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Pricing</Accordion.Header>
          <Accordion.Body>
            <p>Small animals: $15.00</p>
            <p>+$5.00 if your pet requires fresh vegi's</p>
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