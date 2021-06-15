import {
   StyleBackgroundImage,
   StyleImageCont
}
   from "../../StyledComponents/AcServiceAndRepairStyle.js"

import { BackgroundImgTopNav } from "./BackgroundImgTopNav.jsx"
import { BackgroundImgHeadingH1 } from "./BackgroundImgHeadingH1.jsx"
import { BackImgH1Subheading } from "./BackImgH1Subheading.jsx"
import { ServiceCard } from "./ServiceCard"
import { RatingCard } from "./RatingCard.jsx"


export const ImageCont = (props) => {
   return (
      <StyleImageCont>

         <StyleBackgroundImage src={props.image} alt="error" />
         <BackgroundImgTopNav></BackgroundImgTopNav>
         <BackgroundImgHeadingH1></BackgroundImgHeadingH1>
         <BackImgH1Subheading></BackImgH1Subheading>
         <ServiceCard></ServiceCard>
         <RatingCard></RatingCard>
      </StyleImageCont>
   )
}
