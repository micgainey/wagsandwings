import React from 'react';
import Logo from '../components/Logo';
import Container from 'react-bootstrap/Container';
// import Button from 'react-bootstrap/Button';

// this is the coming soon page. this is intended to tell our customers a little bit of information and get something deployed. It includes date and location and a subscription for email updates. (not implemented yet)
const ComingSoon = () => {

  const logoSize = {
    width: '384',
    height: '267',
  }

  return (
    <>
      <Container fluid='sm' className='text-center'>
        <Container className='margin-logo'>
          <Logo
            className='image-center'
            ImageWidth={logoSize.width}
            ImageHeight={logoSize.height}
          />
        </Container>
        <h1 className='text-align-center'>Loving care for your furry & feathery family.</h1>
        <br />
        <h2 className='text-align-center'><strong>Coming soon this August!</strong></h2>
        <h3 className='text-align-center'><strong>Located in Halawa Valley</strong></h3>

        {/* Uncomment below to add subsribe button */}
        {/* <Container className='d-grid gap-2'>
          <Button
            className='margin-top-40'
            variant="success">
              Subscribe for Updates
          </Button>
        </Container> */}
      </Container>
    </>
  );
}

/**
 * Loving care for your furry feathery family. Coming soon to Halawa Valley.
 * 
 * Subscribe for updates.
 */

export default ComingSoon;
