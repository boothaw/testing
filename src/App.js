import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "antd/dist/antd.css";

import EventPage from "./pages/event/index";
import SplashPage from "./pages/splash/index";

function App() {
  return (
    <Router>
      <Route exact path="/">
        {/* <EventPage /> */}
        <SplashPage />
      </Route>
    </Router>
  );
}

export default App;
