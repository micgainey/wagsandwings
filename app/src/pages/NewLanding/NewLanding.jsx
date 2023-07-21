import React from 'react';
import './landing.css';
import MainLanding from '../../componentsv2/LandingPage/MainLanding';
import DaycareLanding from '../../componentsv2/LandingPage/DaycareLanding';
import BoardingLanding from '../../componentsv2/LandingPage/BoardingLanding';
import ExtraServicesLanding from '../../componentsv2/LandingPage/ExtraServicesLanding';

const NewLanding = () => {
  
  return (
    <>
      {/* Main Landing */}
      <MainLanding />
      {/* Daycare */}
      <DaycareLanding />
      {/* Boarding */}
      <BoardingLanding />
      <ExtraServicesLanding />
    </>
  );
}

export default NewLanding;