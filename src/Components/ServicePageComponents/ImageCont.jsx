import {
   StyleBackgroundImage,
   StyleImageCont
}
   from "../../StyledComponents/AcServiceAndRepairStyle.js"
import { BackgroundImgTopNav } from "./BackgroundImgTopNav.jsx"

export const ImageCont = (props) => {
   return (
      <StyleImageCont>

            <StyleBackgroundImage src={props.image} alt="error" />

            <BackgroundImgTopNav></BackgroundImgTopNav>


      </StyleImageCont>
   )
}
