import React from "react";
import {
  OfferContainer,
  StyledText,
} from "../StyledComponents/HomePageStyledComponents";
import BigText from "./BigText";
import ServiceCard from "./ServiceCard";
import SubHeading from "./SubHeading";
import { motion } from "framer-motion";

export default function OfferSection({ text, subHeading, cardDetails }) {
  return (
    <div>
      <StyledText>
        <BigText text={text} />
        <SubHeading text={subHeading} />
      </StyledText>

      <OfferContainer>
        {cardDetails.map((card) => (
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            style={{ background: "none", border: "none", padding: "10px" }}
          >
            <ServiceCard {...card} />
          </motion.button>
        ))}
      </OfferContainer>
    </div>
  );
}
