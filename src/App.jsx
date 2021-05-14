import React from 'react';
import './App.css';
import { DataProvider } from './GlobalState';

import Home from './pages/Home';
import Error from './pages/Error';
import Login from './pages/Login';
import Register from './pages/Register';
import Jobs from './features/Job';
import DetailPage from './features/Job/JobDetails';
import CV from './pages/CV';

import { Route, Switch, BrowserRouter } from 'react-router-dom';
import ManageCategory from './pages/ManageCategory';

const App = () => {
  return (
    <div className="App">
      <DataProvider>
        <BrowserRouter>
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/jobs" component={Jobs} exact />
            <Route path="/jobs/detail/:id" component={DetailPage} exact />
            <Route path="/manager/categories" component={ManageCategory} exact />
            <Route path="/register" component={Register} exact />
            <Route path="/login" component={Login} exact />
            <Route path="/create-cv" component={CV} exact />
            <Route component={Error} />
          </Switch>
        </BrowserRouter>
      </DataProvider>
    </div>
  );
};

export default App;
