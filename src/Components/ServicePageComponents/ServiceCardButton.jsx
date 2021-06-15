import { StyleServicecardButton } from "../../StyledComponents/AcServiceAndRepairStyle"
import { BiChevronRight } from "react-icons/bi";

import { Link } from "react-router-dom"

export const ServiceCardButton = (props) => {

    return (
        <>
        <Link to="/ac-service-repair/add-service">

       <StyleServicecardButton>
          <BiChevronRight className="arrow"></BiChevronRight>
          <p className="buttonText">
             {props.text}
          </p>
       </StyleServicecardButton>
       
       </Link>
       </>
    )
}
