import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';

import Landing from './pages/Landing';
import UberCare from './pages/UberCare';
import Hospital from './pages/Hospital';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/ubercare" component={UberCare} />
        <Route path="/hospital" component={Hospital} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;