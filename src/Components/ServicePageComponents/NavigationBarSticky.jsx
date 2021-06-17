import React from "react";
import { StyleNavigationBarCont } from "../../StyledComponents/AcServiceAndRepairStyle";
import { StickyNavigationBarBtn } from "./StickyNavigationBarBtn";

const tabStyle = { borderBottom: "3px solid #666" };
export const NavigationBarSticky = () => {
  return (
    <StyleNavigationBarCont>
      <StickyNavigationBarBtn style={tabStyle} text="How it Works" />
      <StickyNavigationBarBtn
        style={tabStyle}
        text="Technicians"
        className="technicians"
      />
      <StickyNavigationBarBtn style={tabStyle} text="Customer Reviwes" />
      <StickyNavigationBarBtn style={tabStyle} text="Blogs" />
      <StickyNavigationBarBtn style={tabStyle} text="About Ac Repairs" />
    </StyleNavigationBarCont>
  );
};
