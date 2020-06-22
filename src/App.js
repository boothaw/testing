import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "antd/dist/antd.css";

import EventPage from "./pages/v2/event/index";
import WatchPage from "./pages/v2/watch/index";

function App() {
  return (
    <Router>
      <Route exact path="/">
        <EventPage />
      </Route>
      <Route exact path="/watch">
        <WatchPage />
      </Route>
    </Router>
  );
}

export default App;
