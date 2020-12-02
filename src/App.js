import React, { Suspense, lazy } from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
} from 'react-router-dom';

const SignIn = lazy(() => import('./modules/signIn'));
const SignUp = lazy(() => import('./modules/signUp'));

export default function() {
  return (
      <BrowserRouter>
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route
              path="/"
              exact
              component={SignIn}
              forceRefresh={true}
            />
            <Route path="/register"  component={SignUp} />
          </Switch>
        </Suspense>
      </BrowserRouter>
  );
}
