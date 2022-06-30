import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container } from 'react-bootstrap';
import CartWidget from "./CartWidget";
const Menu = () => {
  return (
<Navbar collapseOnSelect expand="lg"  className="bg-nav">
  <Container>
  <Link className="navbar-brand " to="/"> 
  <img src="../logo.png" alt="logo" className="App-logo "></img>
  </Link>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto fs-4 mx-5 px-3">
      <Link className="nav-link" to="/" >Home</Link>
      <Link className="nav-link" to="/productos" >Productos</Link>
      <Link className="nav-link" to="/contacto" >Contacto</Link>
    </Nav>
    <Nav>
    <Link className="nav-link" to="/cart" >
      <CartWidget />
    </Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
  );
};
export default Menu;
