import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import { Col, Row } from 'react-bootstrap';

import './App.css';
import HomePage from './conatainers/HomePage';
import Header from './components/Header';
import VerticalNavbar from './components/Navbar';
import ServicesPage from './conatainers/ServicesPage';

const App: React.FC = () => (
  <BrowserRouter>
    <Header />
    <Row className="m-0">
      <VerticalNavbar />
      <Col md={10}>
        <Switch>
          <Route path="/" component={HomePage} exact />
          <Route path="/services" component={ServicesPage} exact />
        </Switch>
      </Col>
    </Row>
  </BrowserRouter>
);

export default App;
