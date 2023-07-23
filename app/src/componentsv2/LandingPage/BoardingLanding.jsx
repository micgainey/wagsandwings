import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import useWindowDimensions from '../../hooks/useWindowDimensions';
import { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import { NavLink } from 'react-router-dom';

const BoardingLanding = () => {

  const { width } = useWindowDimensions();
  const [windowWidth, setWindowWidth] = useState(width);

  const breakpoint = 1000;

  // this useEffect is used to find the window width and render the second column based on window size. Right now it only changes which order the columns go. 7/18/23.
  useEffect(() => {
    setWindowWidth(width)
    // console.log(windowWidth);
  }, [width, windowWidth])

  const Mobile = () => {
    return (
      <Container fluid className='page-container color-2-background'>
        <Row>
          <Col lg id='boarding-background'>
            {/* <h1 className='vertical-center center title'>
              Boarding
            </h1> */}
          </Col>
          <Col lg className='parent'>
            <Container>
              <hr className='divider-color-3'/>
              <h2 className='white-text'>
                Boarding
              </h2>
              <h5 className='white-text line-spacing-landing'>
                When you choose to board your pet at Wags ‘n’ Wings Hawaii, pet safety is our top priority. With a low pet-to-human ratio, and team member(s) on site 24 hours per day, your pet will be safe while having fun!
              </h5>
              <h5 className="white-text line-spacing-landing">
                Hawaii’s hot days and humid nights won’t be an issue in our fully air-conditioned facility, and we have spacious kennels that are adjustable to meet the size requirement of your pets!
              </h5>
              <br />
              <Container className="center">
                <Row>
                  <Col>
                    <h2 className='white-text'>&lt; 22lbs</h2>
                  </Col>
                  <Col>
                    <h2 className='white-text'>23lbs - 55lbs</h2>
                  </Col>
                  <Col>
                    <h2 className="white-text">&gt; 56lbs</h2>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <h3 className='white-text'>$57.00</h3>
                  </Col>
                  <Col>
                    <h3 className='white-text'>$67.00</h3>
                  </Col>
                  <Col>
                    <h3 className='white-text'>$75.00</h3>
                  </Col>
                </Row>
              </Container>
              <Container className="center padding-tb-10">
                <NavLink to='/boarding'>
                  <Button
                    variant="outline-light"
                    >
                    Learn More
                  </Button>
                </NavLink>
              </Container>
              <hr className='divider-color-3'/>
            </Container>
          </Col>
        </Row>
      </Container>
    );
  }

  const Desktop = () => {
    return (
      <Container fluid className='page-container color-2-background'>
        <Row>
          <Col lg className='parent'>
            <Container className="landing-content-container">
              <hr className='divider-color-3'/>
              <h2 className='white-text'>
                Boarding
              </h2>
              <h5 className='white-text line-spacing-landing'>
                When you choose to board your pet at Wags ‘n’ Wings Hawaii, pet safety is our top priority. With a low pet-to-human ratio, and team member(s) on site 24 hours per day, your pet will be safe while having fun!
              </h5>
              <h5 className="white-text line-spacing-landing">
                Hawaii’s hot days and humid nights won’t be an issue in our fully air-conditioned facility, and we have spacious kennels that are adjustable to meet the size requirement of your pets!
              </h5>
              <br />
              <Container className="center">
                <Row>
                  <Col>
                    <h2 className='white-text'>&lt; 22lbs</h2>
                  </Col>
                  <Col>
                    <h2 className='white-text'>23lbs - 55lbs</h2>
                  </Col>
                  <Col>
                    <h2 className="white-text">&gt; 56lbs</h2>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <h3 className='white-text'>$57.00</h3>
                  </Col>
                  <Col>
                    <h3 className='white-text'>$67.00</h3>
                  </Col>
                  <Col>
                    <h3 className='white-text'>$75.00</h3>
                  </Col>
                </Row>
              </Container>
              <br />
              <Container className="center">
                <NavLink to='/boarding'>
                  <Button
                    variant="outline-light"
                    >
                    Learn More
                  </Button>
                </NavLink>
              </Container>
              <hr className='divider-white'/>
            </Container>
          </Col>
          <Col lg id='boarding-background'>
            {/* <h1 className='vertical-center center title'>
              Boarding
            </h1> */}
          </Col>
        </Row>
      </Container>
    );
  }

  return windowWidth >= breakpoint ? <Desktop/> : <Mobile/>
}

export default BoardingLanding;
