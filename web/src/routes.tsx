import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';

import Landing from './pages/Landing';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Landing} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;