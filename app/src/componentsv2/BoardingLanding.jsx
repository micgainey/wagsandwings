import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import useWindowDimensions from '../hooks/useWindowDimensions';
import { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';

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
            <h1 className='vertical-center center title'>
              Boarding
            </h1>
          </Col>
          <Col lg className='parent'>
            <Container>
              <hr className='divider-color-white'/>
              <h2 className='white-text'>
                Boarding
              </h2>
              <p className='white-text'>
                When you choose to board your pet at Wags ’n’ Wings Hawaii, pet safety is our top priority. With a low pet-to-human ratio, and team member(s) on site 24 hours per day, your pet will be safe while having fun! Hawaii’s hot days and humid nights won’t be an issue in our fully air-conditioned facility, and we have spacious kennels that are adjustable to meet the size requirement of your pets! Every kennel will have cot style dog beds, and you can bring their bedding for a home away from home feel. No matter where you are, you will be able to log into the Gingr app to see your pets progress and pictures of their stay. And since every pet has individual needs, we can create care plans that are close to their home routine. We welcome pets of all types for Daycare and Boarding, whether they sport fur, feathers, or scales. Yes, that means we accommodate pet pigs, tortoises, rabbits, guinea pigs, and more.
              </p>
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
                <Button variant="outline-warning">Learn More</Button>
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
          <Container>
            <hr className='divider-color-3'/>
            <h2 className='white-text'>
              Boarding
            </h2>
            <p className='white-text'>
              When you choose to board your pet at Wags ’n’ Wings Hawaii, pet safety is our top priority. With a low pet-to-human ratio, and team member(s) on site 24 hours per day, your pet will be safe while having fun! Hawaii’s hot days and humid nights won’t be an issue in our fully air-conditioned facility, and we have spacious kennels that are adjustable to meet the size requirement of your pets! Every kennel will have cot style dog beds, and you can bring their bedding for a home away from home feel. No matter where you are, you will be able to log into the Gingr app to see your pets progress and pictures of their stay. And since every pet has individual needs, we can create care plans that are close to their home routine. We welcome pets of all types for Daycare and Boarding, whether they sport fur, feathers, or scales. Yes, that means we accommodate pet pigs, tortoises, rabbits, guinea pigs, and more.
            </p>
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
            <Container className="center">
              <Button variant="outline-light">Learn More</Button>
            </Container>
            <hr className='divider-white'/>
          </Container>
        </Col>
        <Col lg id='boarding-background'>
          <h1 className='vertical-center center title'>
            Boarding
          </h1>
        </Col>
      </Row>
    </Container>
    );
  }

  

  return windowWidth >= breakpoint ? <Desktop/> : <Mobile/>
}

export default BoardingLanding;
