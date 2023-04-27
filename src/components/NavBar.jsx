import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {
  BrowserRouter as Router,
  Route, 
  Routes
} from "react-router-dom";
import Dogs from '../pages/Dogs';
import About from '../pages/About';
import Home from '../pages/Home';



export default function NavBar() {
  return (
    <Router>
      <div>
        <Navbar bg="dark" variant={"dark"} expand="lg">
          <Container>
            <Navbar.Brand href="/">Home</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="dogs">Dogs</Nav.Link>
                <Nav.Link href="about">About</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
  
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/dogs" element={<Dogs/>}/>
          <Route exact path="/about" element={<About/>}/>
        </Routes>
      </div>
    </Router>
  );
}

