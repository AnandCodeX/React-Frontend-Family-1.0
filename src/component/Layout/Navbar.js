import React, { useState, EventHandler } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import useWindowScrollPosition from "@rehooks/window-scroll-position";
import "../Css/Navbar.css";

const Navigation = (props) => {
  const [change, setChange] = useState(false);
  const [name, setName] = useState(100);

  const handler = (event) => {
    if (changePosition == 0) {
      return setName(100);
    }
  };
  const handlerf = () => {
    return setName(0);
  };
  const handlera = () => {
    return setName(0);
  };

  const changePosition = name;
  console.log(changePosition);

  let position = useWindowScrollPosition();

  // position == { x: 0, y: 0 }

  if (position.y >= changePosition && !change) {
    setChange(true);
  }

  if (position.y < changePosition && change) {
    setChange(false);
  }

  let style = {
    background: change
      ? "linear-gradient(to left,#1a0d00,#e65c00)"
      : "transparent",
    height: "30px",
  };

  return (
    <>
      <Navbar
        className="mt-0 navb"
        variant="dark"
        sticky="top"
        expand="md"
        padding-top="10px"
        style={style}
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
            <Link className="nav-link" onClick={handler} id="home" to="/">
              Home
            </Link>
            <Link className="nav-link" onClick={handlerf} to="/Family">
              Family
            </Link>
            <Link className="nav-link" onClick={handlera} to="/About">
              About
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default Navigation;
