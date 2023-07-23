import React from 'react';
import './landing.css';
import MainLanding from '../../componentsv2/LandingPage/MainLanding';
import DaycareLanding from '../../componentsv2/LandingPage/DaycareLanding';
import BoardingLanding from '../../componentsv2/LandingPage/BoardingLanding';
import ExtraServicesLanding from '../../componentsv2/LandingPage/ExtraServicesLanding';
import Promotion from '../../componentsv2/Promotion';

const NewLanding = () => {
  return (
    <>
      <Promotion />
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