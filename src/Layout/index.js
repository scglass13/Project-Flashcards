import React from "react";
import { Switch, Router, Route } from "react-router";
import Header from "./Header";
import NotFound from "./NotFound";
import Home from "./screens/Home";

function Layout() {
  return (
    <>
      <Header />
      <div className="container">
        <Router>
          <Route exact path="/">
            <Home />
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Router>
      </div>
    </>
  );
}

export default Layout;
