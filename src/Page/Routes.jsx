import React from "react";
import { Route, Switch } from "react-router";
import Navbar from "../Components/Navbar";
import HomePage from "./HomePage";

export default function Routes() {
  return (
    <Switch>
      <Navbar />
      <Route path="/" exact>
        <HomePage />
      </Route>
    </Switch>
  );
}
