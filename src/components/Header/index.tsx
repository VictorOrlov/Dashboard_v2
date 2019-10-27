import React from 'react';
import { Nav, Navbar } from "react-bootstrap";
import { useHistory } from 'react-router-dom';

const Header: React.FC = () => {

  let history = useHistory();
  const handleClick = (e: any) => {
    e.preventDefault()
    let to = e.target.href.substr(e.target.href.lastIndexOf('/') + 1);
    history.push(`/${to}`);
    console.log(to);
  }
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
      <Navbar.Brand href="/">Dashboard 2.0</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link onClick={handleClick} href="/">Главная</Nav.Link>
          <Nav.Link onClick={handleClick} href="services">Услуги</Nav.Link>
          <Nav.Link onClick={handleClick} href="#statements" className="ml-4">Заявления</Nav.Link>
          <Nav.Link onClick={handleClick} href="#consultations">Консультации</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;