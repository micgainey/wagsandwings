import React from 'react';
import MainLandingCover from '../components/MainLandingCover';
import Daycare from '../components/Daycare';
// import Boarding from '../components/Boarding';
// import ExtraServices from '../components/ExtraServices';

const Landing = () => {
  return(
    <>
      <div className='page-container-navbar' />
      <div className='page-container-first black' dir='ltr'>
        <MainLandingCover />
      </div>
      <div className='page-container background-gradient' dir='ltr'>
        <Daycare id='daycare'/>
      </div>
    </>

  );
}

export default Landing;
