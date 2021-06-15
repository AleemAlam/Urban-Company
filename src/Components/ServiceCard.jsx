import React from "react";
import { StyledServiceCard } from "../StyledComponents/HomePageStyledComponents";
import ServiceImgCard from "./ServiceImgCard";

export default function ServiceCard({ img, title, subTitle }) {
  return (
    <StyledServiceCard>
      <ServiceImgCard img={img} />
      <p>{title}</p>
      <p style={{ fontSize: 13 }}>{subTitle}</p>
    </StyledServiceCard>
  );
}
