import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "antd/dist/antd.css";

import EventPage from "./pages/event/index";
import SplashPage from "./pages/splash/index";

function App() {
  return (
    <Router>
      <Route exact path="/">
        <SplashPage />
      </Route>
      <Route exact path="/event">
        <EventPage />
      </Route>
    </Router>
  );
}

export default App;
