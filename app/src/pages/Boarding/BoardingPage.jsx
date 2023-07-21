import React from 'react';
import Container from 'react-bootstrap/Container';
import './boarding.css'
import DogSection from '../../componentsv2/BoardingPage/sections/DogSection';
import SmallAnimalSection from '../../componentsv2/BoardingPage/sections/SmallAnimalSection';
import BirdSection from '../../componentsv2/BoardingPage/sections/BirdSection';
import CatSection from '../../componentsv2/BoardingPage/sections/CatSection';

// This page will contain all information and policies and fees on boarding.
// this includes dogs, cats, birds, etc animals
const BoardingPage = () => {
  return (
    <Container fluid id='main-boarding-page-container'>
      {/* Main intro content */}
      <Container fluid className=''>
        <Container fluid className='boarding-page-container'>
          <h1>Boarding</h1>
          <h4 className=''>
            Wags ’n’ Wings prides itself on its inclusivity; we warmly welcome pets of all types, whether they sport fur, feathers, or scales. Yes, that means we happily accommodate tortoises, pet pigs, rats, rabbits, guinea pigs, and more. All it takes is space available, and a conversation about care, needs, and space requirements. 
          </h4>
          <ul>
            <li>
              <h5>
                Payment for boarding is 50% deposit at reservation and the remaining balance at pickup.
              </h5>
            </li>
            <li>
              <h5>
                No refunds for early pickup.
              </h5>
            </li>
          </ul>
        </Container>
      </Container>
      <hr className='divider-color-1'/>
      {/* Dog */}
      <Container fluid className=''>
        <Container fluid className='content-container'>
          <DogSection />
        </Container>
      </Container>
      <hr className='divider-color-2'/>
      {/* Cat */}
      <Container fluid className=''>
        <Container fluid className='content-container'>
          <CatSection />
        </Container>
      </Container>
      <hr className='divider-color-4'/>
      {/* Bird */}
      <Container fluid className=''>
        <Container fluid className='content-container'>
          <BirdSection />
        </Container>
      </Container>
      <hr className='divider-color-5'/>
      {/* Small Animals */}
      <Container fluid className='mb-30'>
        <Container fluid className='content-container'>
          <SmallAnimalSection />
        </Container>
      </Container>
    </Container>
  );
}

export default BoardingPage;
