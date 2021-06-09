import React from "react";
import { Route, Switch } from "react-router";
import Navbar from "../Components/Navbar";
import HomePage from "./HomePage";
import {ServicePage} from "./ServicePage"

export default function Routes() {
  return (
    <>
    <Navbar />

    <Switch>

   <Route exact path="/">
     <HomePage/>
   </Route>

   <Route exact path="/service">
     <ServicePage/>
   </Route>

    </Switch>
    </>

  );
}
