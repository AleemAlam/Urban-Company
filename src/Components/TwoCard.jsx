import React from "react";
import {
  StyledText,
  TwoContainer,
} from "../StyledComponents/HomePageStyledComponents";
import BigText from "./BigText";
import SubHeading from "./SubHeading";

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
            <label htmlFor="">
              <span class="flag-icon flag-icon-gr"></span>+91
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
