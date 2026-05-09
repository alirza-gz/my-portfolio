import React, { useEffect, useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import logo from "../Assets/logo.png";
import { Link, useLocation } from "react-router-dom";
import {
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from "react-icons/ai";

import { CgFileDocument } from "react-icons/cg";

function NavBar() {
  const [navColour, updateNavbar] = useState(false);
  const location = useLocation();

  useEffect(() => {
    function scrollHandler() {
      updateNavbar(window.scrollY >= 20);
    }

    scrollHandler();
    window.addEventListener("scroll", scrollHandler);

    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  const navItems = [
    { to: "/", label: "Home", icon: <AiOutlineHome /> },
    { to: "/about", label: "About", icon: <AiOutlineUser /> },
    {
      to: "/project",
      label: "Projects",
      icon: <AiOutlineFundProjectionScreen />,
    },
    { to: "/resume", label: "Resume", icon: <CgFileDocument /> },
  ];

  return (
    <>
      <div className={`navbar-wrapper`}>
        <Navbar
          fixed="top"
          expand="md"
          className={navColour ? "sticky" : "navbar"}
        >
          <Container>
            <Navbar.Brand as={Link} to="/" className="d-flex">
              <img src={logo} className="img-fluid logo" alt="brand" />
            </Navbar.Brand>
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="ms-auto desktop-nav" defaultActiveKey="#home">
                {navItems.map((item) => (
                  <Nav.Item key={item.to}>
                    <Nav.Link
                      as={Link}
                      to={item.to}
                      className={location.pathname === item.to ? "active" : ""}
                    >
                      <span className="nav-icon">{item.icon}</span> {item.label}
                    </Nav.Link>
                  </Nav.Item>
                ))}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>

      <nav className="mobile-bottom-nav" aria-label="Mobile navigation">
        {navItems.map((item) => (
          <Link
            key={item.to}
            to={item.to}
            className={`mobile-bottom-link${
              location.pathname === item.to ? " active" : ""
            }`}
          >
            <span className="mobile-bottom-icon">{item.icon}</span>
            <span className="mobile-bottom-label">{item.label}</span>
          </Link>
        ))}
      </nav>
    </>
  );
}

export default NavBar;
