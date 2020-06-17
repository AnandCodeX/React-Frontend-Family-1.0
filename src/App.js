import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "./App.css";
//import Carosel from "./component/Layout/Carosel";
import Home from "./component/Pages/Home";
import About from "./component/Pages/About";
import Family from "./component/Pages/Family";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navigation from "./component/Layout/Navbar";
const App = (props) => {
  return (
    <Router>
      <>
        {/* {<img src="/image/sunset.jpg" id="nvbg" alt="top-img" />}
        <Navigation /> */}
        {/* <Navigation changePosition="0" home="100"/> */}
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/Family" component={Family} />
          <Route exact path="/About" component={About} />
        </Switch>
      </>
    </Router>
  );
};

export default App;
