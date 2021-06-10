import {StyleBackgroundImage, StyleImageCont} from "../../StyledComponents/AcServiceAndRepairStyle.js" 

export const ImageCont = (props) => {
    return (
       <StyleImageCont>
          <StyleBackgroundImage src={props.image} alt="error"/>
       </StyleImageCont>
    )
}
