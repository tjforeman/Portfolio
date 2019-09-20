import React from "react";
import "./App.css";
import mixpanel from "./helpers/mixpanel";
import { Route } from "react-router-dom";
import About from "./views/About";
import Landing from "./views/Landing";

function App() {
  return (
    <div classname="App-header">
      <Route exact path="/" component={Landing} />
      <Route exact path="/about" component={About} />
    </div>
  );
}

// any time a user interacts with this page a notification will be sent to mixpanel
if (REACT_APP_ENV === "production") {
  mixpanel.track("viewed landing");
}

export default App;
