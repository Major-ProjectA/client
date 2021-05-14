import React, { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from '../../features/Form/FormCV/Header';
import Profiles from '../../features/Form/FormCV/Profiles'
import Navbars from '../../components/Navbars';
import Footers from '../../components/Footers';
import '../../features/Form/FormCV/styles.scss';
import Educations from '../../features/Form/FormCV/Educations';
import Projects from '../../features/Form/FormCV/Projects';

const CvRouter = () => {
  const [user, setUser] = useState({});

  const updateUser = (data) => {
    setUser((prevUser) => {
      return {
        ...prevUser,
        ...data
      };
    });
  }

  const resetUser = () => {
    setUser({});
  };

    return (
        <>
          <Navbars />
            <br/><br/><br/>
          <BrowserRouter>
            <Header />
            <Switch>
              <Route
                render={(props) => (
                  <Profiles {...props} user={user} updateUser={updateUser} />
                )}
                path="/createcv-profile"
                exact={true}
              />
              <Route
                render={(props) => (
                  <Educations {...props} user={user} updateUser={updateUser} />
                )}
                path="/createcv-education"
                exact={true}
              />
              <Route
                render={(props) => (
                  <Projects {...props} user={user} updateUser={updateUser} />
                )}
                path="/createcv-project"
                exact={true}
              />
            </Switch>
          </BrowserRouter>
          <Footers />
        </>
    );
};

export default CvRouter;