import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import './App.css';
import HomePage from './conatainers/HomePage';

const App: React.FC = () => (
  <BrowserRouter>
  <Switch>
    <Route path="/" component={HomePage} exact />
  </Switch>
  </BrowserRouter>
);

export default App;
