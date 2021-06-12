import React from "react";
import {
  ImgCardContainer,
  OfferContainer,
  StyledText,
} from "../StyledComponents/HomePageStyledComponents";
import BigText from "./BigText";
import ServiceCard from "./ServiceCard";
import ServiceImgCard from "./ServiceImgCard";
import SubHeading from "./SubHeading";

export default function OfferSection({ text, subHeading, cardDetails }) {
  return (
    <div>
      <StyledText>
        <BigText text={text} />
        <SubHeading text={subHeading} />
      </StyledText>

      <OfferContainer>
        {cardDetails.map((card) => (
          <ServiceCard {...card} />
        ))}
      </OfferContainer>
    </div>
  );
}
