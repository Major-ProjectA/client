import React from 'react';
import './App.css';

import Home from './pages/Home';
import Error from './pages/Error';
import Login from './pages/Login';
import Register from './pages/Register';
import JobFeature from './features/Job/index';
import CV from './pages/CV';

import { Route, Switch, Redirect } from 'react-router-dom';

const App = () => {
  return (
    <div className="App">
      <Switch>
        <Route path="/" component={Home} exact />

        <Route path="/jobs" component={JobFeature} exact />

        <Route path="/register" component={Register} exact />

        <Route path="/login" component={Login} exact />

        <Route path="/create-cv" component={CV} exact />

        <Route component={Error} />
      </Switch>

      {/* <Error /> */}
      {/* <Jobs /> */}
      {/* <Login />
      <Register /> */}
      {/* <Navbars />
      <FormLogin />
      <FormRegister />
      <Footers /> */}
    </div>
  );
};

export default App;
