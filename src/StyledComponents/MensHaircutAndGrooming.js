import styled from "styled-components";

export const Heading = styled.div`
  width: 100vw;
  height: 75px;
  color: #424242;
  background: #f7f8fa;
  font-size: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
`;

export const Container = styled.div`
  width: 100%;
  margin-top: 75px;
  max-height: 90vh;
  position: fixed;
  /* display: grid;
  grid-template-columns: 29vw 35vw 34vw; */
  display: flex;
  justify-content: space-between;
  /* align-items: center; */
`;
export const MENU = styled.div`
  width: 29%;

  border-right: 1px solid #dbdbdb;

  button:nth-child(1) {
    margin-top: 30px;
  }
  button {
    display: flex;
    flex-direction: column;
    padding: 10px;
    margin: 20px 30px auto auto;
    border-radius: 5px;
    outline: none;
    border: 1px solid;
    cursor: pointer;
    background: transparent;
  }
`;
export const PackageDetails = styled.div`
  width: 35%;
  margin: auto;
  border-right: 1px solid #dbdbdb;
  overflow-y: scroll;
  height: 80vh;
  h1 {
    font-size: 36px;
    margin: 10px 7%;
  }

  .safetyMessage {
    width: 77.5%;
    margin: auto 7%;
    height: auto;
    padding: 20px;
    background: #6598ff;
    display: flex;
    gap: 20px;
    align-items: center;
  }

  .safetyMessage > div:nth-child(2) > h2 {
    color: #ffffff;
  }

  .safetyMessage > div:nth-child(2) > p {
    color: #ffffff;
  }

  .menuData {
    border: 1px solid #dbdbdb;
    margin: 20px 7%;
  }

  .menuData video {
    width: 85%;
    height: 200px;
    margin: 20px 7.5% auto 7.5%;
  }

  .menuDataShortDetails {
    display: flex;
    align-items: center;
    border-bottom: 1px solid #dbdbdb;
    width: 85%;
    margin: 2vh 7.5% auto;
    flex-wrap: wrap;
  }

  .menuDataShortDetails > img {
    width: 90px;
    height: 60px;
    border-radius: 3px;
    margin-right: 10px;
  }

  .menuDataShortDetailsPrice {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 73.5%;
    p {
      margin-top: -15px;
    }
  }

  .EditThisPackageButton {
    padding: 5px;
    margin-left: 7.5%;
    color: #1c8e1c;
    border-radius: 2px;
    outline: #1c8e1c;
    background: transparent;
    border: 1px solid #1c8e1c;
  }

  .viewDetailsModel {
    width: 85%;
    margin-left: 7.5%;
    color: #6598ff;
    cursor: pointer;
    margin: 10px auto 30px auto;
  }
`;

export const AddButton = styled.div`
  .addToCartItem {
    color: #6598ff;
    border: 1px solid #6598ff;
    outline: #6598ff;
    padding: 5px 10px;
    font-size: 18px;
    border-radius: 2px;
    background: transparent;
  }
  .addedToCartItem {
    display: flex;
    border: 1px solid #304ffe;
    width: 90px;
    height: 30px;
  }
  .addedToCartItem > button {
    padding: 5px;
    border: none;
    outline: none;
    font-weight: 500;
  }

  .addedToCartItem > button:nth-child(1),
  .addedToCartItem > button:nth-child(3) {
    background: #304ffe;
    color: #ffffff;
    font-size: 20px;
    width: 30px;
  }

  .addedToCartItem > button:nth-child(2) {
    background: #ffffff;
    color: #304ffe;
    font-size: 18px;
    width: 30px;
  }
`;

export const ViewDetails = styled.div`
  width: 35%;

  margin: auto;
  border-right: 1px solid #dbdbdb;
  overflow-y: scroll;
  height: 80vh;

  .closeDetails {
    display: flex;
  }

  .closeDetails > p {
    background: #c7c9ce;
    width: 30px;
    height: 30px;
    margin-top: 40px;
    margin-left: 0px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 24px;
    color: white;
    cursor: pointer;
  }

  .closeDetails > video {
    width: 85%;
    height: 50vh;
    margin: 5vh 7.5% 5vh 1%;
  }

  .closeDetails > img {
    width: 85%;
    height: 50vh;
    margin: 5vh 7.5% 5vh 1%;
  }

  .menuDataShortDetails {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 85%;
    margin: auto 7.5%;

    p {
      margin-top: -15px;
    }
  }

  .addToCartItem {
    color: #6598ff;
    border: 1px solid #6598ff;
    outline: #6598ff;
    padding: 5px 10px;
    font-size: 18px;
    border-radius: 2px;
    background: transparent;
  }

  .servicesIncluded {
    width: 84%;
    margin: 1vh 7%;
    height: auto;
    padding: 5px;
    display: flex;
    gap: 15px;
    align-items: center;
    border-bottom: 1px solid #dbdbdb;
  }
  .servicesIncluded > img {
    width: 100px;
    height: 100px;
    border-radius: 3px;
  }
  .favoriteLook {
    margin-left: 7.5%;
  }
`;

export const UCPromise = styled.div`
  margin: 7vh 7.5% 2vh;

  img {
    width: 100%;
    height: 35vh;
  }

  .PromiseFeature {
    display: flex;
    justify-content: space-evenly;
    margin: 7vh 0 0vh 0;
    align-items: center;
  }

  .PromiseFeature > div {
    width: 33%;
  }

  .PromiseFeature > div > img {
    width: 50px;
    height: 50px;
    margin-left: 30%;
  }

  .PromiseFeature > div > p {
    text-align: center;
  }

  .whyServices {
    p {
      margin-top: --10px;
    }
    div {
      display: flex;
      gap: 10%;

      img {
        width: 100px;
        height: 70px;
      }
    }
  }
`;

export const FrequentlyAskedQue = styled.div`
  width: 84%;
  margin: 8vh 7.5%;

  .question {
    border-bottom: 1px solid #dbdbdb;
    div > p {
      font-weight: 480;
      font-size: 18px;
    }
  }
`;

export const ReviewPastMonth = styled.div`
  width: 84%;
  margin: 8vh 7.5%;

  img {
    width: 100%;
    height: 35vh;
  }

  .ratingAverage {
    display: flex;
    gap: 30px;
  }

  .overallRating {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    span {
      font-size: 20px;
      color: #1c8e1c;
    }

    h1 {
      margin-top: -15px;
      color: #1c8e1c;
    }

    p {
      margin-top: -10px;
      background: #e5f2e5;
      color: #1c8e1c;
      padding: 5px 10px;
      font-weight: 480;
    }
  }
  .hygieneRating {
    border: 1px solid #dbdbdb;
    border-radius: 3px;
    padding: 0 10px;

    div {
      display: flex;
      gap: 20px;

      span {
        font-size: 14px;
        color: #1c8e1c;
      }
      h2 {
        margin-top: -15px;
        color: #1c8e1c;
      }
    }

    div p {
      margin-top: -10px;
      background: #e5f2e5;
      color: #1c8e1c;
      padding: 5px 10px;
      font-weight: 480;
    }
  }
  .ratingGraph {
    width: 84%;
    margin: 8vh 7.5%;
  }
`;

export const MostHelpfulReviews = styled.div`
  width: 84%;
  margin: 8vh 7.5%;

  div {
    display: flex;
    justify-content: space-between;
  }

  .reviewer {
    display: flex;
    gap: 20px;

    div > img {
      width: 60px;
      height: 60px;
      margin-top: 20px;
      border-radius: 50%;
    }
    div {
      display: flex;
      flex-direction: column;
    }
  }
`;

export const CartNote = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 95%;
  height: 50px;
  position: fixed;
  bottom: 0;
  margin: 1vh 2% auto 2%;
  background: #ffffff;
  border-top: 1px solid #dbdbdb;

  .cartCoupon,
  .cartDetails {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 10px;
    border-radius: 4px;
    width: 25%;
    cursor: pointer;
    h4 {
      color: #ffffff;
      font-size: 20px;
      font-weight: 600;

      span {
        border: 1px solid #ffffff;
        padding: 0 7px;
      }
    }
  }
  .cartCoupon {
    background: linear-gradient(to right, #463e96, #191540);
  }
  .cartDetails {
    background: #304ffe;
  }
`;

export const SafteyCondition = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  height: 90%;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 5%;
  left: 25%;
  background: #ffffff;

  .header {
    display: flex;
    width: 100%;
    height: 10%;
    justify-content: space-between;
    align-items: center;
    background: #fafafa;
    border-bottom: 1px solid #dbdbdb;
    top: 0;

    p {
      margin: 2.5%;
      font-size: 18px;
    }
  }

  .buttonDiv {
    display: flex;
    width: 100%;
    height: 10%;
    justify-content: space-between;
    align-items: center;
    background: #fafafa;
    border-top: 1px solid #dbdbdb;

    button {
      width: 750px;
      height: 60px;
      margin: auto;
      background: #313232;
      outline: none;
      border: none;
      color: white;
      font-size: 20px;
      border-radius: 5px;
    }
  }

  .safteyNote {
    text-align: center;
    width: 100%;
    height: 30%;
    border-bottom: 1px solid #dbdbdb;
  }

  .safteyNote > p:nth-child(1) {
    font-size: 30px;
    font-weight: 600;
    margin-top: 8vh;
  }

  .safteyNote > p:nth-child(2) {
    width: 80%;
    margin: -15px auto 0;
  }

  .condition {
    width: 100%;
    height: 50%;
    background: #f5f5f5;
    input {
      margin: 30px 50px auto 20px;
      font-size: 24px;
    }
    ul {
      width: 80%;
      margin: 20px auto;

      li {
        margin: 10px;
      }
    }
  }
`;
