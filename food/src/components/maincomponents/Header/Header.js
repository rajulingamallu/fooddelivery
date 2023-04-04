import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import logo from '../../../assets/images/logo.png'
function Header() {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="/">
        <img
          src={logo}
          width="80"
          height="50"
          className="d-inline-block align-top"
          alt="Food Delivery Logo" 
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto w-50" style={{display:'flex', justifyContent:'space-around',alignItems:'center'}}>
        <Nav.Link href={'/'}style={{color:'black',fontWeight:'700'}}>Home</Nav.Link>
          <Nav.Link href={'/nonveg'} style={{color:'black',fontWeight:'700'}}>Nonveg</Nav.Link> 
          <Nav.Link href={'/veg'}style={{color:'black',fontWeight:'700'}}>Veg</Nav.Link>
          <Nav.Link href={'/softdrinks'}style={{color:'black',fontWeight:'700'}}>Softdrinks</Nav.Link>
          <Nav.Link href={'/wine'}style={{color:'black',fontWeight:'700'}}>Wine</Nav.Link>
          <Nav.Link href={'/breakfast'}style={{color:'black',fontWeight:'700'}}>Breakfast</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
