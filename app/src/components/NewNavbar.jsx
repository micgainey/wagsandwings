import React from 'react'
import Logo from './Logo'
import Button from 'react-bootstrap/Button'

const NewNavbar = () => {
  return (<>
    <nav className='d-flex align-items-center justify-content-space-between margin-left-right-40'>
      <a href='/'><Logo /></a>
      <Button
        className='d-flex align-items-center justify-content-center margin-right-30'
        variant='outline-success' 
        size='lg'>
          Book now!
      </Button>
    </nav>
  </>
  );
}

export default NewNavbar;
