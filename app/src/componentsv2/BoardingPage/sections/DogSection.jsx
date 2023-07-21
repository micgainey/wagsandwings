import React from 'react'
import DogOffer from '../offers/DogOffer';
import DogPolicies from '../policies/DogPolicies';
import Accordion from 'react-bootstrap/Accordion';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function DogSection() {
  return (
    <div>
      <h3 className=''>Dogs</h3>
      <DogOffer />
      <br />
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Pricing</Accordion.Header>
          <Accordion.Body>
            <Row className='center'>
              <Col><p>Small</p></Col>
              <Col><p>Medium</p></Col>
              <Col><p>Large</p></Col>
            </Row>
            <Row className='center'>
              <Col><p>22lbs or less</p></Col>
              <Col><p>23lbs - 55lbs</p></Col>
              <Col><p>Over 56lbs</p></Col>
            </Row>
            <Row className='center'>
              <Col><p>$57.00</p></Col>
              <Col><p>$67.00</p></Col>
              <Col><p>$75.00</p></Col>
            </Row>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Policies</Accordion.Header>
          <Accordion.Body>
            <DogPolicies />
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  )
}

export default DogSection