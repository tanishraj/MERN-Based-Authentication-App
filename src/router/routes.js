import React, { lazy, Suspense } from "react";
import { Route, Switch } from "react-router";
import LazyProtectedRoute from "../components/protectedRoute/protectedRoute";
import LazyProfile from "../components/profile/profile";
const LazyRegister = lazy(() => import("../components/register/register"));
const LazyLogin = lazy(() => import("../components/login/login"));
const LazyLogout = lazy(() => import("../components/logout/logout"));
const LazyHome = lazy(() => import("../components/home/home"));

const Router = () => {
  return (
    <div className="router">
      <Switch>
        <Route
          exact
          path="/"
          render={() => (
            <Suspense fallback={<span>Home</span>}>
              <LazyHome />
            </Suspense>
          )}
        />
        <LazyProtectedRoute exact path="/profile" component={LazyProfile} />
        <Route
          exact
          path="/register"
          render={() => (
            <Suspense fallback={<span>Register</span>}>
              <LazyRegister />
            </Suspense>
          )}
        />
        <Route
          exact
          path="/login"
          render={() => (
            <Suspense fallback={<span>Login</span>}>
              <LazyLogin />
            </Suspense>
          )}
        />
        <Route
          exact
          path="/logout"
          render={() => (
            <Suspense fallback={<span>Logout</span>}>
              <LazyLogout />
            </Suspense>
          )}
        />
      </Switch>
    </div>
  );
};

export default Router;
