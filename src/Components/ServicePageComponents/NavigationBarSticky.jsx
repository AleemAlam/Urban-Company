import React from "react";
import { StyleNavigationBarCont } from "../../StyledComponents/AcServiceAndRepairStyle";
import { StickyNavigationBarBtn } from "./StickyNavigationBarBtn";

const tabStyle = { borderBottom: "3px solid black" };
const noStyle = { borderBottom: "none" };

export const NavigationBarSticky = () => {

  const [hiw, setHiw] = React.useState();
  const [tech, settech] = React.useState();
  const [rev, setrev] = React.useState();
  const [blog, setblog] = React.useState();
  const [about, setabout] = React.useState();

  const handleClick = (id) => {

    if (id === "how it works") {
      setHiw(tabStyle)
      settech(noStyle)
      setrev(noStyle)
      setblog(noStyle)
      setabout(noStyle)
    }

    else if (id === "technicians") {
      setHiw(noStyle)
      settech(tabStyle)
      setrev(noStyle)
      setblog(noStyle)
      setabout(noStyle)
    }


    else if (id === "reviews") {
      setHiw(noStyle)
      settech(noStyle)
      setrev(tabStyle)
      setblog(noStyle)
      setabout(noStyle)
    }

    else if (id === "blog") {
      setHiw(noStyle)
      settech(noStyle)
      setrev(noStyle)
      setblog(tabStyle)
      setabout(noStyle)
    }

    else {

      setHiw(noStyle)
      settech(noStyle)
      setrev(noStyle)
      setblog(noStyle)
      setabout(tabStyle)
    }

  }


  return (<>
    <StyleNavigationBarCont>

      <StickyNavigationBarBtn text="How it Works" id="#how it works" onclick={() => handleClick("how it works")} style={hiw} />

      <StickyNavigationBarBtn text="Technicians" id="#technicians" onclick={() => handleClick("technicians")} style={tech} />

      <StickyNavigationBarBtn text="Customer Reviwes" id="#reviews" onclick={() => handleClick("reviews")} style={rev} />

      <StickyNavigationBarBtn text="Blogs" id="#blogs" onclick={() => handleClick("blog")} style={blog} />

      <StickyNavigationBarBtn text="About Ac Repairs" id="#about ac repairs" onclick={() => handleClick("about ac repairs")} style={about} />
    </StyleNavigationBarCont>
  </>
  );
};
