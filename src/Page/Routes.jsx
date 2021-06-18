import React from "react";
import { Route, Switch } from "react-router";
import Navbar from "../Components/Navbar";
import HomePage from "./HomePage";
import AcServiceAndRepair from "./All Service Pages/AcServiceAndRepair.jsx";
import AcServiceAndRepairModal from "./ACServiceAndRepair/AcServiceAndRepairModal.jsx";
import MyFooter from "../Components/MyFooter";
import { useState } from "react";

export default function Routes() {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <Switch>
        <Route exact path="/">
          <Navbar setShowModal={setShowModal} />
          <HomePage showModal={showModal} setShowModal={setShowModal} />
          <MyFooter />
        </Route>

        <Route exact path="/ac-service-repair">
          <div
            style={{
              width: "100%",
              backgroundColor: "white",
              height: "60px",
              margin: "0px",
              padding: "0px",
              zIndex: "5",
              position: "fixed",
              top: 0,
              bottom: 1,
            }}
          >
            <Navbar
              setShowModal={setShowModal}
              style={{
                backgroundColor: "white",
                position: "relative",
             zIndex: "5",
              }}
              linkColor="#666"
              img="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep/t_high_res_template,q_auto:low,f_auto/categories/category_v2/category_22e80550.png"
            />
          </div>

          <AcServiceAndRepair />
          <MyFooter />
        </Route>
        <Route exact path="/ac-service-repair/add-service">
          <AcServiceAndRepairModal />
        </Route>
      </Switch>
    </>
  );
}
