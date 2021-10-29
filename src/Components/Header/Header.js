import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import './Header.css';

const Header = () => {
    return (
        <div>
             <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="/home">EXCITED TOUR</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="/home">Home</Nav.Link>
      <Nav.Link href="/service">Services</Nav.Link>
      <Nav.Link href="/contact">Contact</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
  <div className="header-img">
      <h1>This is a world tour website</h1>
      
  </div>
        </div>
    );
};

export default Header;