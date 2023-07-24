import React from 'react'
import CatOffer from '../offers/CatOffer';
import CatPolicies from '../policies/CatPolicies';
import Accordion from 'react-bootstrap/Accordion';

function CatSection() {
  return (
    <div>
      <h3 className=''>Cats</h3>
      <CatOffer />
      <br />
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Pricing</Accordion.Header>
          <Accordion.Body>
            <p>
              Any Size: $30.00
            </p>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Policies</Accordion.Header>
          <Accordion.Body>
            <CatPolicies />
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  )
}

export default CatSection