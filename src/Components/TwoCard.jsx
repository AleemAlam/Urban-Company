import React from "react";
import {
  StyledText,
  TwoContainer,
} from "../StyledComponents/HomePageStyledComponents";
import BigText from "./BigText";
import SubHeading from "./SubHeading";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";

export default function TwoCard() {
  return (
    <TwoContainer>
      <div>
        <StyledText style={{ textAlign: "left" }}>
          <BigText
            size={40}
            fontWeight={500}
            text="Refer and get free services"
          />
          <SubHeading
            style={{ width: 500, fontSize: 20 }}
            text="Invite a friend to urbanCompany and get Rs. 100 off. You win upto Rs 5000."
          />
        </StyledText>
        <div className="form">
          <div className="innerContainer">
            <label
              style={{ borderRight: "1px solid #e8ebe9", padding: "8px 5px" }}
              htmlFor=""
            >
              <img
                style={{
                  width: 25,
                  height: 18,
                  marginRight: 10,
                  position: "relative",
                  top: 1,
                }}
                src="https://www.countryflags.com/wp-content/uploads/india-flag-png-xl.png"
                alt=""
              />
              <span>+91 </span>
              <ArrowDropDownIcon style={{ position: "relative", top: 2 }} />
            </label>
            <input type="text" />
          </div>
          <button>Send</button>
        </div>
      </div>
      <div className="imgContainer">
        <img
          src="https://res.cloudinary.com/urbanclap/image/upload/q_70,f_auto,fl_progressive:steep/images/growth/home-screen/1598953972369-c7f9f7.png"
          alt=""
        />
      </div>
    </TwoContainer>
  );
}
