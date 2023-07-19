import React from 'react';
import './landing.css';
import MainLanding from '../../componentsv2/MainLanding';
import DaycareLanding from '../../componentsv2/DaycareLanding';
import BoardingLanding from '../../componentsv2/BoardingLanding';
import ExtraServicesLanding from '../../componentsv2/ExtraServicesLanding';

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