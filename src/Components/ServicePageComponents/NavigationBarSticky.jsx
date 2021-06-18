import React from "react";
import { StyleNavigationBarCont } from "../../StyledComponents/AcServiceAndRepairStyle";
import { StickyNavigationBarBtn } from "./StickyNavigationBarBtn";

const tabStyle = { borderBottom: "3px solid #666" };
export const NavigationBarSticky = () => {
  return (<>
    <StyleNavigationBarCont>

      <StickyNavigationBarBtn text="How it Works" id="#how it works" />

      <StickyNavigationBarBtn text="Technicians" id="#technicians" />

      <StickyNavigationBarBtn text="Customer Reviwes" id="#reviews" />
      <StickyNavigationBarBtn text="Blogs" id="#blogs" />
      <StickyNavigationBarBtn text="About Ac Repairs" id="#about av repairs" />
    </StyleNavigationBarCont>
  </>
  );
};
