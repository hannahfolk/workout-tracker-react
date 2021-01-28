// Dependencies
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

// Pages
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Home from "./pages/Home";

// Components
import Nav from "./components/Nav";
import PrivateRoute from "./components/PrivateRoute";

import { history } from "./helpers";
import { authenticationService } from "./services";

const App = () => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    authenticationService.currentUser.subscribe((x) => setCurrentUser(x));
  }, []);

  return (
    <Router history={history}>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/login" component={Login} />
          <PrivateRoute exact path="/" component={Home} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
