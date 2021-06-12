import React from "react";
import { StyledInput } from "../StyledComponents/HomePageStyledComponents";
import SearchIcon from "@material-ui/icons/Search";
import { Link } from "react-router-dom";
export default function SearchBar() {
  return (
    <StyledInput>
      <div>
        <input type="text" placeholder="search for a service " />

        <SearchIcon />
        <Link>Salon for men</Link>
        <Link>Salon for women</Link>
        <Link>Massage for men</Link>
        <span>etc</span>
      </div>
    </StyledInput>
  );
}
