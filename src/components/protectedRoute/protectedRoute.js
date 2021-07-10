import React from "react";
import { Redirect, Route } from "react-router-dom";
import axios from "axios";

function ProtectedRoute({ component: Component, ...restOfProps }) {
  const [isAuthenticated, setAuthenticated] = React.useState(true);

  React.useEffect(() => {
    axios
      .get("http://localhost:4000/api/profile", { withCredentials: true })
      .then((res) => {
        console.log(res.data.isAuth);
        setAuthenticated(res.data.isAuth);
      });
  }, []);

  return (
    <Route
      {...restOfProps}
      render={(props) =>
        isAuthenticated ? <Component {...props} /> : <Redirect to="/" />
      }
    />
  );
}

export default ProtectedRoute;
