/* import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../Css/Navbar.css";

const NavbarX = () => {
  return (
    <>
      <Navbar
        className="mt-0 navb"
        variant="dark"
        sticky="top"
        expand="md"
        padding-top="10px"
        backgroundColor="linear-gradient(to left,#1a0d00,#e65c00)"
      >
        <Navbar.Brand href="#home">
          <img
            src="\image\logo.jpg"
            width="25"
            height="35px"
            margin-top="5px"
            className="d-inline-block  rounded-circle"
            alt="React Bootstrap logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav border-dark">
          <Nav className="ml-auto " variant="pills">
            <Link className="nav-link" id="home" to="/">
              Home
            </Link>
            <Link className="nav-link" to="/Family">
              Family
            </Link>
            <Link className="nav-link" to="/About">
              About
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default NavbarX;
 */