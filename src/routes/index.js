import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Login from '../pages/Login';
import Error from '../pages/Error';

export default function Routes() {
  return (
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="*" component={Error} />
      </Switch>
  );
}
