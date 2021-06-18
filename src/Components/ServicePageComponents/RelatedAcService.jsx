import {
    StylePopularServiceDiv,
    StylePopularServiceNavbar,
    StylePopularServiceMainDiv,
  } from "../../StyledComponents/AcServiceAndRepairStyle";
  
  export const RelatedAcService = () => {
    return (
      <div style={{ marginLeft: "0%" }}>
        <StylePopularServiceDiv>
          <StylePopularServiceNavbar>
            <h2>Related AC Service and Repair Proffessionals Services</h2>
          </StylePopularServiceNavbar>
  
          <StylePopularServiceMainDiv>
            <div>
              <p>Bluestar</p>
            </div>
  
            <div>
              <p>Godrej</p>
            </div>
  
            <div>
              <p>Hitachi</p>
            </div>
  
            <div>
              <p>Samsung</p>
            </div>
  
            <div>
              <p>Carrier</p>
            </div>
          </StylePopularServiceMainDiv>
        </StylePopularServiceDiv>
      </div>
    );
  };
  