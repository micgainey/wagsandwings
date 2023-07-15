import React from 'react'
import Logo from './Logo'
import Button from 'react-bootstrap/Button'

const NewNavbar = () => {
  return (
    <>
      <nav className='d-flex align-items-center navbar-jc-sb-gap
      padding-left-right-20 sticky nav-box-shadow'>
        <a href='/' className='logo-padding-top-bottom'><Logo ImageHeight={100} ImageWidth={100}/></a>
        <a href='#daycare'>
          <p>Daycare</p></a>
        <a href='#boarding'>
          <p>Boarding</p></a>
        <a href='#extra-services'>
          <p>Extra Services</p></a>
        <Button
          className='d-flex align-items-center justify-content-center margin-right-30'
          variant='outline-success' 
          size='md'>
            Book now!
        </Button>
      </nav>
    </>
  );
}

export default NewNavbar;
