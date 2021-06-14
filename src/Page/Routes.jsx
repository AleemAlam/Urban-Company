import React from "react";
import { Route, Switch } from "react-router";
import Navbar from "../Components/Navbar";
import HomePage from "./HomePage";
import AcServiceAndRepair from "./All Service Pages/AcServiceAndRepair.jsx";
import MyFooter from "../Components/MyFooter";
import { useState } from "react";

export default function Routes() {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <Navbar setShowModal={setShowModal} />

      <Switch>
        <Route exact path="/">
          <HomePage showModal={showModal} setShowModal={setShowModal} />
        </Route>

        <Route exact path="/ac-service-repair">
          <AcServiceAndRepair />
        </Route>
      </Switch>
      <MyFooter />
    </>
  );
}
