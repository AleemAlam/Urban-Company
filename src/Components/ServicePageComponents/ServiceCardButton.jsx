import { StyleServicecardButton } from "../../StyledComponents/AcServiceAndRepairStyle"
import { BiChevronRight } from "react-icons/bi";

export const ServiceCardButton = () => {
    return (
        <>
       <StyleServicecardButton>
          <BiChevronRight    className="arrow"></BiChevronRight    >
          <p className="buttonText">
              AC Servicing
          </p>
       </StyleServicecardButton>
       
       
       </>
    )
}
