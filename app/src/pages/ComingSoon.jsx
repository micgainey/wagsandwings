import React from 'react';
import Logo from '../components/Logo';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

const ComingSoon = () => {

  const logoSize = {
    width: '400',
    height: '400',
  }

  return (
    <>
      <Container fluid='lg' className='text-center'>
        <Logo
          className='image-center'
          ImageWidth={logoSize.width}
          ImageHeight={logoSize.height}
        />
        <h1 className='text-align-center'>Loving care for your furry feathery family. They're not gonna wanna go home.</h1>
        <br />
        <h2 className='text-align-center'>Coming soon this August!</h2>
        <h3 className='text-align-center'>Located in Halawa Valley</h3>

        <Container className='d-grid gap-2'>
          <Button
            className='margin-top-40'
            variant="success">
              Subscribe for Updates
          </Button>
        </Container>
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
