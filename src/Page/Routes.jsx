import React from "react";
import { Route, Switch } from "react-router";
import Navbar from "../Components/Navbar";
import HomePage from "./HomePage";
import AcServiceAndRepair from "./All Service Pages/AcServiceAndRepair.jsx"

export default function Routes() {
  return (
    <>
    <Navbar />

    <Switch>

   <Route exact path="/">
     <HomePage/>
   </Route>

   <Route exact path="/ac-service-repair">
     <AcServiceAndRepair/>
   </Route>

    </Switch>
    </>

  );
}
