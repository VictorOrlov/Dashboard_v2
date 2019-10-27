import React from 'react';
import { Nav, Col } from "react-bootstrap";
import s from './Navbar.module.css';

const VerticalNavbar = () => {
  return (
    <Col md={2} className={s.wrapper}>
      <Nav defaultActiveKey="/home" className="flex-column">
        <Nav.Link href="/home">Active</Nav.Link>
        <Nav.Link eventKey="link-1">Link</Nav.Link>
        <Nav.Link eventKey="link-2">Link</Nav.Link>
        <Nav.Link eventKey="disabled" disabled>
          Disabled
        </Nav.Link>
      </Nav>
    </Col>
  );
};

export default VerticalNavbar;

