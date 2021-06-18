import styled from "styled-components";

export const MainCont = styled.div`
  width: 100%;
  margin: 0%;
  background-color: #f5f5f5;
`;

export const StyleImageCont = styled.div`
  width: 100%;
  height: 458px;
  margin: 0%;
  padding: 0%;
  /* position: relative; */
  z-index: 2;
  margin-top: 3.6%;
`;

export const StyleBackgroundImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: brightness(0.5);
  top: 0;
  margin: 0%;
`;

export const StyleNavigationBarCont = styled.div`
  box-sizing: border-box;
  width: 41%;

  height: 75px;
  background-color: #ffffff;
  padding: 0px 30px;
  position: sticky;
  position: -webkit-sticky;
  top: 7.5%;
  display: flex;
  z-index: 5;
  box-shadow: 0 4px 12px 0 #ddd;
  margin-left: 20%;
`;

export const StyleHowItWorksCont = styled(StyleNavigationBarCont)`
  box-sizing: border-box;
  height: 95px;
  margin: 0 32px;
  z-index: 1;
  margin-top: 20px;
  box-shadow: none;
  margin: auto;
  margin-right: 39%;
`;
export const StyleHIWMainCont = styled(StyleHowItWorksCont)`
  height: auto;
  margin-top: 0.2%;
  padding-top: 20px;
  padding-bottom: 20px;
  display: flex;
  flex-direction: column;
  position: static;
`;
export const StyleAcServiceInCont = styled(StyleHowItWorksCont)`
  box-sizing: border-box;
  position: static;
  height: 130px;
  padding: 24px 60px;
  margin-top: 40px;
  background-color: #ffffff;
  text-align: left;
  display: inline-block;
  line-height: 2;
  font-family: axiforma-bold, -apple-system, BlinkMacSystemFont, Segoe UI,
    Roboto, Helvetica, Arial, sans-serif;
  margin: 40px 39% auto 11%;
  width: 41%;
  margin-left: 20%;
  h2 {
    font-size: 22px;
    font-weight: bold;
    color: #212121;
    margin: 0px 0px 16px;
  }

  p {
    color: #757575;
    font-size: 14px;
  }
`;

export const StyleTechnicians = styled(StyleAcServiceInCont)`
  line-height: 1;
  height: 100px;
  margin: 40px 39% 0.1% 11%;
  width: 41%;
  margin-left: 20%;
`;

export const StyleReviewsCont = styled(StyleAcServiceInCont)`
  margin-top: 1px;
  margin-bottom: 1px;
  height: auto;

  ul,
  li {
    list-style-type: none;
    display: list-item;
  }

  .imageBox {
    height: 80px;
    width: 80px;
    border-radius: 50%;
    border: 1px solid #e2e2e2;
    text-align: left;
  }

  .rating-imageBox {
    box-sizing: border-box;
    padding-top: 2px;
    height: 40px;
    width: 46px;
    border-radius: 50%;
    border: 1px solid #e2e2e2;
    text-align: center;
    background-color: #ffe082;
    margin-left: 30px;
    margin-top: 24px;
    color: white;
    border: none;
    font-size: 18px;
    font-weight: 700;
  }

  .header {
    display: flex;
    flex-direction: row;
    line-height: 0;

    h4 {
      margin-top: 10px;
      font-size: 17px;
      font-weight: 500;
      color: #212121;
    }
    p {
      line-height: 0.5;
      font-size: 13px;
      color: #757575;
    }
  }

  .reviews {
    display: flex;
    flex-direction: row;
    margin-left: 24px;
  }

  .review-details {
    margin-left: 24px;
    margin-top: 16px;
    padding: 0px;

    h4 {
      font-size: 16px;
      margin: 0px;
      padding: 0px;
      font-weight: 500;
      color: #212121;
    }

    p {
      line-height: 2;
      font-size: 13px;
      color: #757575;
      padding: 8px;
      margin-top: 0px;
    }
  }

  .rating {
    margin-top: 20px;
    font-size: 14px;
    display: flex;
    flex-direction: row;

    span {
      margin-left: 5px;
    }
  }

  .review-rating {
    font-size: 14px;
  }

  .details {
    margin-left: 24px;
  }
  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }

  .star {
    color: #228d27;
    font-weight: 700;
    font-size: 15px;
  }
  span {
    font-size: 14.5px;
  }

  button {
    cursor: pointer;
    font-size: 14px;
    font-weight: 500;
    color: #424242;
    padding: 8px 16px;
    background-color: #fff;
    border: 1px solid #d4d4d4;
    border-radius: 20px;
    height: 32px;
    box-shadow: 0 2px 4px 0 rgb(0 0 0 / 8%);
    display: flex;
    flex-direction: row;
    margin-left: 30%;
    span {
      font-size: 13.4px;
    }
  }
`;
export const StyleStickyNavBtn = styled.div`
  padding: 24px 0px 15px;
  height: 33px;
  margin: 0px 12px 0px 20px;
  display: inline-block;
  font-size: 16.5px;
  text-align: left;
  color: #616161;
  cursor: pointer;
  font-family: axiforma-regular, -apple-system, BlinkMacSystemFont, Segoe UI,
    Roboto, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
`;
export const HIWHeaderHeading = styled.h2`
  display: block;
  font-size: 22px;
  padding: 31px 24px;
  margin: 0;
  font-weight: 700;
  font-family: axiforma-regular, -apple-system, BlinkMacSystemFont, Segoe UI,
    Roboto, Helvetica, Arial, sans-serif;
`;
export const StyleHIWTextCont = styled(StyleHowItWorksCont)`
  width: 90%;
  height: 50px;
  margin: 0px;
  margin-left: 25px;
  box-shadow: none;
  padding: 0;
  display: flex;
  flex-direction: row;
  margin-top: 1.5%;
`;
export const StyleHIWLogoCont = styled(StyleHIWTextCont)`
  width: 6%;
  background-color: none;
  height: 40px;
  border-radius: 50%;
  margin: 0;
`;
export const StyleHIWTextContHeading = styled.h4`
  font-size: 16px;
  font-weight: 700;
  line-height: 1.43;
  color: #000;
  padding: 0px;
  margin: 0px;
  text-align: left;
  box-shadow: none;
`;

export const StyleHIWTextContParagraph = styled.p`
  font-size: 15px;
  font-weight: 400;
  line-height: 1.5;
  letter-spacing: normal;
  color: #757575;
  padding: 0px;
  margin: 0px;
  text-align: left;
`;

export const StyleHIWTextContH4AndPBox = styled.div`
  width: 86%;
  margin: 0px 0px 0px 33px;
  padding: 0;
`;
export const HIWTextContLogo = styled.img`
  width: 100%;
  height: 100%;
`;

export const StyleHIWTextContBorderLine = styled.div`
  height: 27px;
  width: 0.3%;
  background-color: #e2e2e2;
  margin-left: 5.8%;
`;
export const StyleBackgroundImageTopNav = styled(StyleNavigationBarCont)`
  background-color: transparent;
  box-shadow: none;
  position: absolute;
  margin: 0.8% auto 4% 10.7%;
  padding: 0;
  display: flex;
  column-gap: 10px;
  flex-direction: row;
  font-size: 15.2px;
`;
export const StyleWhiteColorDiv = styled.div`
  color: #ddd;
`;
export const StyleBackgroundImageheadingH1 = styled(StyleBackgroundImageTopNav)`
  margin-top: 90px;
  z-index: 3;
  color: #fff;
  font-size: 19px;
  font-family: axiforma-regular, -apple-system, BlinkMacSystemFont, Segoe UI,
    Roboto, Helvetica, Arial, sans-serif;
`;
export const StyleBackImgH1Subheading = styled(StyleBackgroundImageTopNav)`
  line-height: 46px;
  margin-top: 175px;
  color: #b4b2a9;
  font-size: 17px;
  opacity: 0.9;
  font-weight: 600;
  margin-left: 9.8%;
  z-index: 3;
`;
export const StyleServiceCard = styled(StyleBackgroundImageTopNav)`
  box-sizing: border-box;
  position: fixed;
  width: 21.6%;
  max-width: 363.3px;
  min-width: 363.3px;
  box-sizing: border-box;
  margin: 12.5vh auto 121px 63%;
  background-image: linear-gradient(130deg, #642b73, #c6426e);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  text-align: center;
  padding: 20px 24px 30px;
  display: flex;
  flex-direction: column;
  height: auto;
`;
export const StyleServiceCardH2 = styled(HIWHeaderHeading)`
  font-size: 23px;
  color: white;
  text-align: left;
  padding: 0px;
  z-index: 1;
`;

export const StyleServicecardButton = styled.button`
  width: 310px;
  height: 48px;
  padding: 13px;
  border-radius: 4px;
  display: block;
  align-items: center;
  border: none;
  position: relative;
  margin-top: 20px;
  font-weight: 500;

  .arrow {
    float: right;
    margin: 0px;
    font-size: 26px;
  }

  .buttonText {
    flex: 1;
    float: left;
    margin: 0px;
    font-size: 17px;
    font-family: axiforma-regular, -apple-system, BlinkMacSystemFont, Segoe UI,
      Roboto, Helvetica, Arial, sans-serif;
    color: #000000;
    font-weight: 500;
    opacity: 0.9;
  }
`;
export const StyleRatingCardCont = styled(StyleServiceCard)`
  box-sizing: border-box;
  max-width: 363.3px;
  min-width: 363.3px;
  background-color: #fdfdfd;
  background-image: none;
  min-height: 121px;
  max-height: 121px;
  margin-top: 316px;
  margin-bottom: 0px;
  border-radius: 4px;
  box-shadow: 0 20px 20px 0 rgb(0 0 0 / 10%);
  display: flex;
  flex-direction: row;

  .rightDiv {
    display: flex;
    flex-direction: column;
    text-align: left;
    padding: 0px 24px;
    width: 57%;
    margin-left: 25px;
  }

  .leftDiv {
    display: flex;
    flex-direction: column;
    text-align: left;
    padding: 0px 0px 10px 0px;
    font-size: 12px;
    width: 43%;
  }

  .ratingCardP {
    margin: 8px 0 0;
    font-size: 13px;
    line-height: 1.33;
    color: #757575;
    font-weight: 500;
  }

  .bookingNum {
    font-weight: 700;
    font-size: 24px;
  }
`;

export const StyleCarosuleDiv = styled.div`
  box-sizing: border-box;
  background-color: transparent;
  width: 61%;
  height: auto;
  margin-top: 2.5%;
  margin-bottom: 2.5%;
  margin-left: 5.5%;
`;
export const StyleCarosuleNavDiv = styled.div`
  box-sizing: border-box;
  position: static;
  width: 82%;
  height: 90px;
  background-color: #ffffff;
  margin: auto;
  text-align: left;
  padding: 1%;
  padding-left: 2.5%;
  border-bottom: 1px solid #e2e2e2;
  h2 {
    font-family: unset;
    font-size: 22px;
    color: #212121;
    font-weight: 700;
  }
`;
export const StyleCarosuleMainDiv = styled(StyleCarosuleNavDiv)`
  height: 320px;
  display: flex;
  flex-direction: row;
  padding-left: 0%;
  padding-right: 0%;

  p {
    margin-left: 7%;
    font-size: 17px;
    font-weight: 500;
  }
`;
export const ImgDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 138px;
  width: 100%;
  background-color: #683bb7;
  color: #fff;
  margin: 15px;
  font-size: 4em;
  border-radius: 5px;

  img {
    width: 100%;
    height: 100%;
    border-radius: 5px;
    object-fit: cover;
  }
`;
export const StylePopularServiceDiv = styled(StyleCarosuleDiv)``;
export const StylePopularServiceMainDiv = styled(StyleCarosuleMainDiv)`
  padding: 2.5%;
  padding-top: 1%;
  display: flex;
  flex-direction: column;
  height: auto;

  div {
    box-sizing: border-box;
    padding: 0%;
    padding-top: 2.8%;
    width: 100%;
    height: 47px;
    font-weight: 500;
    border-bottom: 1px dotted #e2e2e2;

    p {
      box-sizing: border-box;
      padding: 0;
      margin: 0;
      margin-bottom: 0;
      font-size: 14.5px;
      color: #616161;
      font-weight: 500;
    }
  }
`;
export const StylePopularServiceNavbar = styled(StyleCarosuleNavDiv)``;
