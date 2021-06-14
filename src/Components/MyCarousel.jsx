import React from "react";
import { StyledCarousel } from "../StyledComponents/HomePageStyledComponents";
import SearchBar from "./SearchBar";

export default function MyCarousel() {
  return (
    <StyledCarousel imgNum={1}>
      <div className="shadow">
        <h1>Home services, on demand.</h1>
        <SearchBar />
      </div>
    </StyledCarousel>
  );
}
