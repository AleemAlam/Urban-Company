import React from "react";
import { StyleNavigationBarCont } from "../../StyledComponents/AcServiceAndRepairStyle";
import { StickyNavigationBarBtn } from "./StickyNavigationBarBtn";

export const NavigationBarSticky = () => {
<<<<<<< HEAD
  return (
    <StyleNavigationBarCont>
      <StickyNavigationBarBtn text="How it Works" />
      <StickyNavigationBarBtn text="Technicians" />
      <StickyNavigationBarBtn text="Customer Reviwes" />
      <StickyNavigationBarBtn text="Blogs" />
      <StickyNavigationBarBtn text="About Ac Repairs" />
    </StyleNavigationBarCont>
  );
};
=======

    return (
        <StyleNavigationBarCont>

            <StickyNavigationBarBtn text="How it Works" />
            <StickyNavigationBarBtn text="Technicians" className="technicians"/>
            <StickyNavigationBarBtn text="Customer Reviwes"/>
            <StickyNavigationBarBtn text="Blogs"/>
            <StickyNavigationBarBtn text="About Ac Repairs"/>

        </StyleNavigationBarCont>
    )
}
>>>>>>> 70cbbb99ca3bf19c89b07b44121380c24409b28c
