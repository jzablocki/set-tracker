import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Switch, Route } from 'react-router';
import { History } from './pages';
import { BrowserRouter } from 'react-router-dom';

const App: React.FC = () => {
  const renderRoutes = () => (
    <Switch>
      <Route path="/history" component={History} />
    </Switch>
  );

  return <BrowserRouter>{renderRoutes()}</BrowserRouter>;
};

export default App;
