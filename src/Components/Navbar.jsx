import React from "react";
import { StyledNavbar } from "../StyledComponents/HomePageStyledComponents";

export default function Navbar() {
  return (
    <StyledNavbar>
      <p>Home</p>
      <div>
        <p>Contact Us</p>
        <p>About Us</p>
        <p>Login</p>
      </div>
    </StyledNavbar>
  );
}
