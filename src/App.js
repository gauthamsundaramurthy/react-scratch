import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
} from 'react-router-dom';
import SignIn from './modules/signIn';
import SignUp from './modules/signUp';

export default function() {
  return (
      <BrowserRouter>
        <Switch>
          <Route
            path="/"
            exact
            component={SignIn}
            forceRefresh={true}
          />
          <Route path="/register"  component={SignUp} />
            
        </Switch>
        </BrowserRouter>
  );
}
