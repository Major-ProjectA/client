import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import ListPage from './pages/ListPage';

function JobFeature(props) {
  const match = useRouteMatch();

  return (
    <div>
      <Switch>
        <Route path={match.url} exact component={ListPage}></Route>
      </Switch>
    </div>
  );
}

export default JobFeature;
