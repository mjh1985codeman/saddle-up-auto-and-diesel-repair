import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

import logo from "../assets/saddle-up-logo.png";

const AppNavBar = () => {
  // set modal display state

  return (
    <>
      <div className="nav-style navbar-bkgd nav-bkg-img">
        <Navbar collapseOnSelect variant="dark" expand="lg">
          <Navbar.Brand>
            <img src={logo} alt="Logo" />
          </Navbar.Brand>
          <Navbar.Toggle
            className="nav-toggle"
            aria-controls="responsive-navbar-nav"
          />
          <Navbar.Collapse id="responsive-navbar-nav">
            <div className="navbar-link text-center mt-4 mb-4">
              <Nav className="me-auto">
                <Nav.Item>
                  <Nav.Link as={Link} to="/">
                    Home
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link as={Link} to="/about">
                    About
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link as={Link} to="/services">
                    Services
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link as={Link} to="/contact">
                    Contact
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </div>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </>
  );
};

export default AppNavBar;
