import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "antd/dist/antd.css";

import EventPage from "./pages/v2/event/index";

function App() {
  return (
    <Router>
      <Route exact path="/">
        <EventPage />
      </Route>
    </Router>
  );
}

export default App;
