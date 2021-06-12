import styled from "styled-components";

export const StyledNavbar = styled.div`
  width: 60%;
  display: flex;
  padding: 10px;
  background: none;
  align-items: center;
  color: #fff;
  position: absolute;
  top: 0%;
  left: 19%;
  justify-content: space-between;
  & div {
    display: flex;
  }
  & div a {
    padding: 0px 10px;
    text-decoration: none;
    color: white;
    font-weight: bold;
  }
  & img {
    width: 310px;
    height: 39px;
  }
  & .addUnderline {
    text-decoration: underline;
  }
`;
export const StyledCarousel = styled.div`
  width: 100%;
  height: 550px;
  color: white;
  & .shadow {
    width: 100%;
    height: 100%;
    background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.16),
      rgba(0, 0, 0, 0.8)
    );
  }
  & div > h1 {
    display: inline-block;
    position: relative;
    top: 30%;
    margin: 0;
    left: 35%;
    font-weight: 500;
    font-size: 50px;
  }
  & input {
    width: 600px;
    height: 50px;
    position: relative;
    outline: none;
    font-size: 18px;
    padding: 2px 2px 2px 50px;
    border-radius: 2px;
    border: none;
    display: block;
  }
  & a {
    color: white;
    font-size: bold;
    margin: 0px 5px;
    font-size: 15px;
  }
  background-size: cover;
  background-image: url(${(props) =>
    process.env.PUBLIC_URL + "slider-" + props.imgNum + ".jpeg"});
  background-repeat: no-repeat;
`;

export const StyledInput = styled.div`
  position: relative;
  top: 35%;
  left: 34%;
  width: 600px;
  display: block;
  & svg {
    position: absolute;
    color: gray;
    font-size: 30px;
    left: 10px;
    top: 12px;
  }
`;

export const Container = styled.div`
  width: 60%;
  margin: auto;
  position: relative;
  top: -80px;
  background-color: white;
  border-radius: 3px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 20px 0px;
  box-shadow: 0 4px 16px -3px #e8ebe9;
`;

export const SmallCard = styled.div`
  width: 150px;
  height: 100px;
  padding: 10px;
  margin: 12px;
  font-size: 15px;
  text-align: center;
  align-items: center;
  & img {
    width: 32px;
    height: 32px;
  }
`;

export const CardImg = styled.img`
  width: 256px;
  height: 150px;
  border: 5px solid white;
  &:hover {
    border: none;
    width: 266px;
    height: 160px;
    cursor: pointer;
  }
`;

export const ImgCardContainer = styled.div`
  width: 65%;
  margin: auto;
  position: relative;
  justify-content: space-between;
  margin-bottom: 50px;
  & .rec-arrow {
    background-color: white;
  }
  & .rec-arrow-right:hover,
  .rec:hover:enabled,
  .rec:focus:enabled {
    background-color: white;
    color: gray;
  }
  & .rec-pagination {
    display: none;
  }
`;

export const Separator = styled.div`
  height: 20px;
  width: 100%;
  background-color: #f2f5f7;
  margin: ${(props) => (props.margin ? "30px 0" : "0")};
`;

export const StyledBigCard = styled.img`
  width: 100%;
`;

export const StyledServiceCard = styled.div`
  text-align: center;
  width: 305px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  & p {
    margin: 5px;
  }
  & p:nth-child(3) {
    color: gray;
  }
`;
export const StyledText = styled.div`
  text-align: center;
  font-weight: 400;
  & h1 {
    margin-bottom: 8px;
    font-weight: 500;
  }
  & p {
    color: gray;
    margin-top: 0;
    margin-bottom: 40px;
  }
`;

export const OfferContainer = styled.div`
  width: 65%;
  display: flex;
  margin: auto;
  justify-content: space-evenly;
`;

export const TwoContainer = styled.div`
  width: 62%;
  margin: auto;

  display: flex;
  justify-content: space-between;
  & .form {
    display: flex;
    box-shadow: 0 4px 16px 0 #e8ebe9;
    padding: 10px;
    border: 1px solid #e8ebe9;
    border-radius: 2px;
    justify-content: space-between;
  }
  & img {
    width: 100%;
  }
  & input {
    border: none;
    outline: none;
    padding: 10px;
    font-size: 20px;
  }
  & label {
    font-size: 20px;
  }
  & .imgContainer {
    width: 440px;
    height: 380px;

    align-items: center;
    overflow: hidden;
  }
  & .innerContainer {
    margin: 0;
  }
  & button {
    padding: 15px 30px;
    background-color: black;
    color: white;
    border: none;
    outline: none;
    border-radius: 4px;
    font-weight: bold;
  }
`;

export const StyledFooter = styled.div`
  background-color: black;
  margin: 0;
  color: #999;
  & .linkMenu {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
  & .link {
    font-size: 15px;
  }
  & .container {
    width: 62%;
    margin: auto;
  }
  & .country {
    color: white;
    font-size: 13px;
  }
  & .city {
    display: flex;
    flex-wrap: wrap;
    font-size: 13px;
  }
  & .city > span {
    margin: 5px 0;

    margin-right: 10px;
  }
  & .copyRightContainer {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    align-items: center;
  }
  & img {
    width: 310px;
    height: 39px;
  }
  & span {
    position: relative;
    top: -12px;
    margin-left: 10px;
  }
  & .iconContainer > * {
    margin: 0px 10px;
  }
`;
