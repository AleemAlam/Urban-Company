import React from "react";
import { SmallCard } from "../StyledComponents/HomePageStyledComponents";

export default function ServiceSmallCard({ name, img }) {
  return (
    <SmallCard>
      <img src={img} alt="name" />
      <p>{name}</p>
    </SmallCard>
  );
}
