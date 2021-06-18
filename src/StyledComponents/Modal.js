import styled from "styled-components";

export const Heading = styled.div`
  width: 100vw;
  height: 75px;
  color: #424242;
  background: #f7f8fa;
  font-size: 18px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;

  p {
    cursor: context-menu;
  }
`;

export const Container = styled.div`
  width: 100%;
  position: relative;
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
  /* width: 29%; */
  flex: 0.7;

  border-right: 1px solid #dbdbdb;

  a {
    text-decoration: none;

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
      border: 1px solid #b5b5b5;
      cursor: pointer;
      background: transparent;
      color: #757575;
      font-weight: 500;

      &:active {
        background: black;
        color: #fff;
      }
    }
  }
`;
export const PackageDetails = styled.div`
  /* width: 35%; */
  flex: 1;
  margin: auto;
  margin-left: 20px;
  /* border-left: 1px solid #dbdbdb; */
  border-right: 1px solid #dbdbdb;
  overflow-y: scroll;
  height: 90vh;
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

export const PackageDetailsCards = styled.div`
  div {
    width: 80%;
  }
  h2 {
    font-size: 30px;
    font-weight: 550;
    margin: 10px 7%;
  }

  /* safetyMessage optional with image*/
  .safetyMessage {
    width: 77.5%;
    margin: auto 7%;
    height: auto;
    padding: 0 20px;
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

  /* service component block */
  .menuData {
    border: 1px solid #dbdbdb;
    margin: 20px 7%;
  }

  /* Availables video or Image only */
  .menuData video {
    width: 85%;
    height: 200px;
    margin: 20px 7.5% auto 7.5%;
  }
  /* or */
  /* .menuData img {
    width: 92.5%;
    height: 200px;
    margin: 20px 7.5% auto 7.5%;
  } */

  .menuDataShortDetails {
    display: flex;
    align-items: center;
    border-bottom: 1px solid #dbdbdb;
    width: 85%;
    margin: 2vh 7.5% auto;
    /* flex-wrap: wrap; */
    /* border: 1px solid; */
  }

  /* below images will show optional */
  .menuDataShortDetails > img {
    width: 90px;
    height: 90px;
    border-radius: 3px;
    margin-right: 15px;
    /* margin-top: -25px; */
  }

  .menuDataShortDetailsPrice {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    /* border: 1px solid; */
    .data {
      width: 300px;
    }
    p {
      margin-top: -10px;
      color: #757575;
    }
  }

  .data {
    width: 70%;
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

// view details

export const ViewDetails = styled.div`
  /* width: 35%; */
  flex: 1;

  margin: auto;
  border-right: 1px solid #dbdbdb;
  overflow-y: scroll;
  height: 90vh;
`;

export const ViewDetailsCards = styled.div`
  .closeDetails {
    display: flex;
  }

  .closeDetails > p {
    background: #dfdedf;
    width: 40px;
    height: 40px;
    margin-top: 40px;
    margin-left: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 24px;
    color: #f7f8fa;
    cursor: pointer;
  }

  .closeDetails > video {
    width: 88%;
    height: 100%;
    margin: 5vh auto 5vh 0;
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

    h3 {
      color: #252525;
      font-weight: 500;
    }
    p {
      margin-top: -15px;
      color: #212121;
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
    width: 85%;
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

    p {
      color: #b5b5b5;
    }
  }
`;

export const UCPromise = styled.div`
  margin: 7vh 7.5% 2vh;

  h2 {
    font-weight: 600;
    font-size: 20px;
  }

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
      color: #b5b5b5;
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

  h2 {
    font-size: 18px;
    font-weight: 700;
    margin-bottom: 8px;
    color: #212121;
  }

  .question {
    border-bottom: 1px solid #dbdbdb;
    div > p {
      font-weight: 500;
      font-size: 16px;
      color: #212121;
    }
  }
`;

export const ReviewPastMonth = styled.div`
  width: 84%;
  margin: 8vh 7.5%;

  h2 {
    font-weight: 600;
    font-size: 20px;
  }
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
    margin-top: 10px;
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
    margin-bottom: 10px;

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
    width: 100%;
    margin: 3vh auto 0;
    display: flex;
    gap: 20px;
  }

  .ratingGraph1 {
    display: flex;
    flex-direction: column;

    /* border: 1px solid; */

    p {
      text-align: right;
      margin-top: -10px;
    }
  }

  .ratingGraph2 {
    display: flex;
    flex-direction: column;
    /* border: 1px solid; */
    width: 100%;
    margin-top: -10px;

    div {
      height: 12px;
      margin: 7px;
    }
  }
`;

export const MostHelpfulReviews = styled.div`
  width: 84%;
  margin: 8vh 7.5%;

  h2 {
    font-weight: 600;
    font-size: 20px;
  }

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

// Cart note will when product added to cart
export const CartNote = styled.div`
  display: flex;
  justify-content: space-between;
  /* align-items: center; */
  width: 100%;
  height: 50px;
  position: fixed;
  bottom: 0;
  /* margin: auto 1%; */
  background: #ffffff;
  border-top: 1px solid #dbdbdb;

  .cartCoupon,
  .cartDetails {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 10px;
    border-radius: 4px;
    width: calc(20% - 15px) !important;
    cursor: pointer;
    margin: 5px 20px;
    h4 {
      color: #ffffff;
      font-size: 18px;
      font-weight: 500;

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

// saftey page

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
  box-shadow: 1px 1px 5px 1px grey;

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
      cursor: context-menu;
      color: #424242;
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
      height: 50px;
      margin: 5px auto;
      background: #313232;
      outline: none;
      border: none;
      color: white;
      font-size: 20px;
      border-radius: 5px;
      cursor: pointer;
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
  .AC-Safety {
    overflow-y: scroll;
    width: 100%;
    margin: auto;
    /* display: flex;
    flex-direction: column;
    justify-content: center; */
    p {
      text-align: center;
      font-size: 28px;
      font-weight: 500;
      color: #212121;
    }

    img {
      width: 725px;
      height: 1050px;
      margin: auto 100px;
    }
  }
`;

// cart model

export const CartModel = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  height: 95%;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 5%;
  left: 25%;
  background: #ffffff;
  box-shadow: 1px 1px 5px 1px grey;

  .header {
    display: flex;
    width: 100%;
    height: 10%;
    justify-content: space-between;
    align-items: center;
    background: #fafafa;
    border-bottom: 1px solid #dbdbdb;

    p {
      margin: 2.5%;
      font-size: 18px;
      color: #424242;
      cursor: context-menu;
    }
  }
  .cart {
    width: 100%;
    height: 60vh;
    overflow-y: scroll;
  }

  .bottomBorder {
    width: 80%;
    height: 15px;
    margin: auto;
    background: rgb(245, 245, 245);
  }

  .offer {
    width: 80%;
    height: auto;
    margin: 15px auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;

    .promo {
      display: flex;
      gap: 15px;
      height: 50px;
      align-items: center;
    }
  }

  .total {
    width: 80%;
    margin: auto;

    div {
      display: flex;
      justify-content: space-between;
      margin-bottom: 0;

      p {
        color: #757575;
      }
    }

    img {
      width: 100%;
      height: 20vh;
      border-bottom: 1px solid rgb(245, 245, 245);
    }
  }

  .payment {
    height: 30vh;
    /* border: 1px solid; */
    width: 98%;
    margin: auto;
    bottom: 0;
  }

  .payment img {
    width: 50px;
    height: 50px;
    margin: -40px 47% 0;
    position: relative;
  }

  .payment > div:nth-child(2) {
    width: 96%;
    text-align: center;
    margin: 1vh auto 5px;

    h3 {
      font-size: 22px;
    }

    p {
      margin: -10px auto 0;
    }
  }

  .payment > div:nth-child(3) {
    display: flex;
    justify-content: space-around;
    margin: 3vh auto;
    align-items: flex-end;

    button {
      width: 48%;
      height: 8vh;
      border-radius: 5px;
      border: 1px solid #dbdbdb;
      outline: none;
      cursor: pointer;
      background: transparent;
      font-size: 18px;
      font-weight: 500;
      color: #000000de;
    }
  }

  .payment > div:nth-child(3) > button:nth-child(2) {
    background: black;
    color: #ffffff;
  }
`;

export const ItemsInCart = styled.div`
  width: 80%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  div {
    h4 {
      font-weight: 600;
      margin-left: 10px;
    }

    ul > li {
      line-height: 22px;
      font-size: 14px;
      color: rgb(117, 117, 117);
    }

    .button {
      margin-top: 5vh;
      margin-left: 10vw;
    }

    p {
      color: rgb(33, 33, 33);
      margin-left: 10px;
    }
  }

  border-bottom: 1px solid rgb(245, 245, 245);
`;

export const FrequntlyAdded = styled.div`
  height: auto;
  width: 80%;
  margin: auto auto 20px;

  h3 {
    margin-left: 10px;
    font-weight: 600;
    color: #000000;
    font-size: 20px;
  }

  .suggetions {
    display: flex;
    gap: 10px;
    margin: auto 10px;
  }
`;

export const FrequntlyAddedProduct = styled.div`
  display: flex;
  flex-direction: column;
  width: 135px;
  border: 1px solid rgb(245, 245, 245);
  border-radius: 10px;
  img {
    width: 135px;
    height: 135px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }

  p {
    margin: auto 10px;
  }

  .button {
    margin: 10px 10px;
  }
`;

export const MoveToLocation = styled.div`
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
  box-shadow: 1px 1px 5px 1px grey;

  .header {
    display: flex;
    width: 100%;
    height: 10%;
    justify-content: space-between;
    align-items: center;
    background: #fafafa;
    border-bottom: 1px solid #dbdbdb;

    p {
      margin: 2.5%;
      font-size: 18px;
      color: #424242;
      cursor: context-menu;
    }
  }

  .containt {
    width: 50%;
    height: 90vh;
    margin: "auto";
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h2 {
      margin: 0px auto 50px;
      font-size: 28px;
    }

    button {
      width: 450px;
      height: 60px;
      border-radius: 5px;
      margin: 15px auto;
      text-align: center;
      font-size: 22px;
      font-weight: 540;
      border: 1px solid #304ffe;
      outline: none;
      cursor: pointer;
    }

    button:nth-child(2) {
      background: #304ffe;
      color: #ffffff;
    }
    button:nth-child(3) {
      color: #304ffe;
      background: transparent;
    }
  }
`;

export const SelectTheLocation = styled.div`
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
  box-shadow: 1px 1px 5px 1px grey;

  .header {
    display: flex;
    width: 100%;
    height: 10%;
    justify-content: space-between;
    align-items: center;
    background: #fafafa;
    border-bottom: 1px solid #dbdbdb;

    p {
      margin: 2.5%;
      font-size: 18px;
      color: #424242;
      cursor: context-menu;
    }
  }

  .location-data {
    width: 100%;
    height: 90vh;
    display: flex;
  }

  .liveMap {
    width: 70%;
    height: 100%;
    background: yellow;
  }
  .location-form {
    width: 30%;
    height: 100%;
    min-width: 300px;
    display: flex;
    justify-content: space-between;
    flex-direction: column;

    .your-location {
      position: relative;
      margin-left: 30px;
      color: #d4d4d4;
      background: #ffffff;
      width: 105px;
      padding: 5px;
    }
  }

  .inputs {
    height: auto;
    width: 260px;
    margin: -32px auto 0;

    div {
      border: 1px solid #d4d4d4;
      padding: 8px 16px;
      display: flex;
      justify-content: space-between;
      font-size: 14px;
      border-radius: 4px;
      box-sizing: border-box;
      gap: 0;
      margin: 20px auto;

      input {
        border: none;
        outline: none;
        line-height: 18px;
      }

      select {
        width: 80px;
        border: none;
        outline: none;
      }

      button {
        border: none;
        outline: none;
        color: #304fee;
        font-weight: 600;
        background: transparent;
      }
    }
  }

  .options {
    height: auto;
    width: 260px;
    margin: auto;

    p {
      color: rgb(158, 158, 158);
    }

    div {
      display: flex;
      gap: 20px;

      button {
        color: #fff;
        padding: 4px 10px;
        background: #999;
        border-radius: 20px;
        outline: none;
        border: none;
        &:active {
          background: #304fee;
        }
        cursor: pointer;
      }
    }
  }
  .addButton {
    width: 300px;
    height: 65px;
    border-top: 1px solid #d4d4d4;
    display: flex;
    align-items: center;
    justify-content: center;

    button {
      width: 284;
      height: 50;
      font-size: 18px;
      background: #999;
      padding: 15px 50px;
      color: #fff;
      outline: none;
      border: none;
      cursor: pointer;
    }
  }
`;
