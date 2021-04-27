import React from 'react';
import './App.css';
import Home from './pages/Home';

import Error from './pages/Error';
import Login from './pages/Login';
import RegisterEmployers from './pages/ReEmployers';

import RegisterEmployee from './pages/ReEmployee';
import Jobs from './pages/Jobs';
import CompanyList from './features/CompanyList';

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

        <Route path="/company-list" component={CompanyList} exact />

        <Route path="/register-employers" component={RegisterEmployers} exact />

        <Route path="/register-employee" component={RegisterEmployee} exact />

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
