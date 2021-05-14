import React, { useCallback, useState } from 'react';
import './App.css';
import { DataProvider } from './GlobalState';

import Home from './pages/Home';
import Error from './pages/Error';
import Login from './pages/Login';
import Register from './pages/Register';
import Jobs from './features/Job';
import DetailPage from './features/Job/JobDetails';
import CV from './pages/CV';
import Auxx from './features/context/Auxx';

import DetailJobHotPage from './features/Job/JobHotDetails';

import { Route, Switch, BrowserRouter, Redirect } from 'react-router-dom';
import CvRouter from './pages/CV/CvRouter';
import { AuthContext } from './features/context/authcontext';

const App = () => {
  const [ isLoggedIn, setIsLoggedIn ] = useState(false);
  const [ isAdmin, setIsAdmin ] = useState(false);
  const [ isEmployer, setIsEmployer ] = useState(false);
  const [ userId, setUserId ] = useState(false);

  const login = useCallback((uid) => {
    setIsLoggedIn(true);
    setUserId(uid);
  }, []);

  const logout = useCallback(() => {
    setIsLoggedIn(false);
    setUserId(null);
  }, []);

  const author = useCallback((role) => {
    if (role==="admin") {
      setIsAdmin(true);
    } else if (role==="employer") {
      setIsEmployer(true);
    }
    else {
      setIsAdmin(false);
      setIsEmployer(false);
    }
  }, []);

  let routes;

  if (isAdmin && isLoggedIn) {
    routes = (
      <Switch>
        <Route path="/" component={Home} exact />
        <Redirect to="/" /> 
      </Switch>
    );
  } else if(isLoggedIn && isEmployer===true) {
    routes = (
      <Switch>
        <Route path="/" component={Home} exact />
        <Redirect to="/" /> 
      </Switch>
    )
  } else if(isLoggedIn && isAdmin===false) {
    routes = (
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/create-cv" component={CV} exact />
        <Redirect to="/" /> 
      </Switch>
    );
  } else {
    routes = (
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/jobs" component={Jobs} exact />
        <Route path="/detail-jobhot/:id" component={DetailJobHotPage} exact />
        <Route path="/detail/:id" component={DetailPage} exact />
        <Route path="/register" component={Register} exact />
        <Route path="/login" component={Login} exact />
        <Route path="/create-cv" component={CV} exact />
        <Route path="/createcv-profile" component={CvRouter} exact />
        <Route path="/createcv-education" component={CvRouter} exact/>
        <Route path="/createcv-project" component={CvRouter} exact/>
        <Route component={Error} />
        <Redirect to="/" /> 
      </Switch>
    );
  }

  return (
    // <div className="App">
    //   <DataProvider>
    //     <BrowserRouter>
    //       <Switch>
    //         <Route path="/" component={Home} exact />
    //         <Route path="/jobs" component={Jobs} exact />
    //         <Route path="/detail/:id" component={DetailPage} exact />
    //         <Route path="/detail-jobhot/:id" component={DetailJobHotPage} exact />
    //         <Route path="/register" component={Register} exact />
    //         <Route path="/login" component={Login} exact />
    //         <Route path="/create-cv" component={CV} exact />
    //         <Route component={Error} />
    //       </Switch>
    //     </BrowserRouter>
    //   </DataProvider>
    // </div>

    // <div className="App">
    //   <DataProvider>
    //     <BrowserRouter>
    //       <Switch>
    //         <Route path="/" component={Home} exact />
    //         <Route path="/jobs" component={Jobs} exact />
    //         <Route path="/detail/:id" component={DetailPage} exact />
    //         <Route path="/register" component={Register} exact />
    //         <Route path="/login" component={Login} exact />
    //         <Route path="/create-cv" component={CV} exact />
            // <Route path="/createcv-profile" component={CvRouter} exact />
            // <Route path="/createcv-education" component={CvRouter} exact/>
            // <Route path="/createcv-project" component={CvRouter} exact/>
    //         <Route component={Error} />
    //       </Switch>
    //     </BrowserRouter>
    //   </DataProvider>
    // </div>
    <DataProvider>
      <BrowserRouter>
        <Auxx>
          <AuthContext.Provider value={
            { authorization:author, 
              isLoggedIn: isLoggedIn,
              isAdmin:isAdmin,
              userId: userId,
              login: login, 
              logout: logout }}>
            <main>{routes}</main>
          </AuthContext.Provider>
        </Auxx>
      </BrowserRouter>
    </DataProvider>
  );
};

export default App;
