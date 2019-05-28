import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router';
import { History, Exercises, Routines, Today } from './pages';
import { BrowserRouter } from 'react-router-dom';

const App: React.FC = () => {
  const renderRoutes = () => (
    <Switch>
      <Route path="/exercises" component={Exercises} />
      <Route path="/routines" component={Routines} />
      <Route path="/history" component={History} />
      <Route path="/today" component={Today} />
    </Switch>
  );

  return <BrowserRouter>{renderRoutes()}</BrowserRouter>;
};

export default App;
