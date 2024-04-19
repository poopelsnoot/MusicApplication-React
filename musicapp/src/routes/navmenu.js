import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import {LinkContainer} from 'react-router-bootstrap';


export function NavMenu() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <LinkContainer to="/">
            <Navbar.Brand>World of Music</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
              <LinkContainer to="/home">
                <Nav.Link>Home</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/musicGroups" >
                <Nav.Link>Music Groups</Nav.Link>
              </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
