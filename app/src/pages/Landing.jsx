import React from 'react';
import Container from 'react-bootstrap/Container';
import MainLandingCover from '../components/MainLandingCover';
import Daycare from '../components/Daycare';

const Landing = () => {
  return(
    <>
      <div classname='page-container-navbar'></div>
      <div className='page-container-first black' dir='ltr'>
        <MainLandingCover />
      </div>
      <div className='page-container background-gradient' dir='ltr'>
        <Daycare />
      </div>
      <div className='page-container blue' dir='ltr'>
        <Container fluid>

        </Container>
      </div>
    </>

  )
}

export default Landing;
