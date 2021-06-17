import { StyleServicecardButton } from "../../StyledComponents/AcServiceAndRepairStyle";
import { BiChevronRight } from "react-icons/bi";
import React from "react";
import { css } from "@emotion/react";
import ClipLoader from "react-spinners/ClipLoader";

import { Link } from "react-router-dom";

export const ServiceCardButton = (props) => {
  const [loading, setLoading] = React.useState(false);

  const handleClick = () => {};

  return (
    <>
      <Link to="/ac-service-repair/add-service">
        <StyleServicecardButton onClick={handleClick}>
          <BiChevronRight className="arrow"></BiChevronRight>
          <p className="buttonText">{props.text}</p>
        </StyleServicecardButton>
      </Link>
    </>
  );
};
