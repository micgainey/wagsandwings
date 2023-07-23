import React, { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Promotion = () => {

  const [show, setShow] = useState(true);
  // const handleOpen = () => setShow(false);
  const handleClose = () => setShow(false);

  return (
    <>
      <Offcanvas show={show} onHide={handleClose} placement='bottom'>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title><h3>Grand Opening Promotion!</h3></Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Row className='center'>
            <Col>
              <h5>Half day: $30.00</h5>
            </Col>
            <Col>
              <h5>Full day: $40.00</h5>
            </Col>
          </Row>
          <Row>
            <Col className='center'>
              <p>Schedule an assessment and book a daycare day between August 1st and 15th and lock in our promotion pricing for 6 months!
              </p>
            </Col>
          </Row>
          <hr />
          <Row className='center'>
            <Col><p>Email: <a href='mailto: rya@wagsnwings.com'>rya@wagsnwings.com</a></p></Col>
          </Row>
          <Row className='center'>
            <Col><p>Phone: <a href='tel:808-226-3749'>(808)226-3749</a></p></Col>
          </Row>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  )
}

export default Promotion;
