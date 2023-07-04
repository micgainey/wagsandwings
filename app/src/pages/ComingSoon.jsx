import React from 'react';
import Container from 'react-bootstrap/Container'
import Logo from '../components/Logo';

const ComingSoon = () => {

  const logoSize = {
    width: '500',
    height: '500',
  }

  return (
    <>
      <Container fluid className='center'>
        <Logo ImageWidth={logoSize.width} ImageHeight={logoSize.height}/>
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
