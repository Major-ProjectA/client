import React from 'react';
import './App.css';
import Home from './pages/Home';

import Error from './pages/Error';
import Login from './pages/Login';

import Register from './pages/Register';
import Jobs from './pages/Jobs';
import JobList from './features/Job/JobList';

// import FormJob from "../src/features/FormJob";

// import Navbars from "./components/Navbars";
// import FormLogin from "./components/FormLogin";
// import FormRegister from "./components/FormRegister";
// import Footers from "./components/Footers";

import { Route, Switch, Redirect } from 'react-router-dom';

const App = () => {
  return (
    <div className="App">
      <Switch>
        <Route path="/" component={Home} exact />

        <Route path="/job-list" component={JobList} exact />

        <Route path="/register" component={Register} exact />

        <Route path="/login" component={Login} exact />

        <Route path="/jobs" component={Jobs} />

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
