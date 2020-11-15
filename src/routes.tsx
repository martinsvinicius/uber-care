import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';

import Landing from './pages/Landing';
import UberCare from './pages/UberCare';
import Hospital from './pages/Hospital';
import Confirm from './pages/Confirm';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/ubercare" component={UberCare} />
        <Route path="/hospital" component={Hospital} />
        <Route path="/confirm" component={Confirm} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
