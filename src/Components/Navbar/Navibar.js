import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Nav, Navbar } from 'react-bootstrap';
import './Navibar.css';
import UseAuth from '../Hooks/UseAuth';


const Navibar = () => {
  const {user,logOut}=UseAuth();
  // console.log(user);
  return (
    <div>
        <Navbar className="nav-color">
          <Container>
          <Navbar.Brand as={Link} to="/home">EXCITED TOUR</Navbar.Brand>
              <Nav>          
              <Nav.Link as={Link} to="/home">Home</Nav.Link>
              <Nav.Link as={Link} to="/MyOrder">My Order</Nav.Link>
              <Nav.Link as={Link} to="/AllOrder">All Order</Nav.Link>
              <Nav.Link as={Link} to="/service">Services</Nav.Link>
              
              {
                user?<div>{user.displayName}
                <button onClick={logOut}>Logout</button>
                </div>:
                <Nav.Link as={Link} to="/login">Login</Nav.Link>
              }
              </Nav>
              
          </Container>
          
        </Navbar>
          
        </div>
    );
};

export default Navibar;