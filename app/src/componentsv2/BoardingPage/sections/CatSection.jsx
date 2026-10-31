import React from 'react'
import CatOffer from '../offers/CatOffer';
import CatPolicies from '../policies/CatPolicies';
import Accordion from 'react-bootstrap/Accordion';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function CatSection() {
  return (
    <div>
      <h3 className=''><strong>Cats</strong></h3>
      <CatOffer />
      <br />
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Pricing</Accordion.Header>
          <Accordion.Body>
            <p>
              Any Size: $47.00
            </p>
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
            <CatPolicies />
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  )
}

export default CatSection