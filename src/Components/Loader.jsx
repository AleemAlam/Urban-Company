import React from "react";
import styled from "styled-components";
export default function Loader({ transparent }) {
  return (
    <LoaderContainer transparent={transparent}>
      <div className="outer">
        <div className="text">UC</div>
      </div>
    </LoaderContainer>
  );
}

const LoaderContainer = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(196, 196, 196, 0.658);
  text-align: center;
  & .outer {
    width: 40%;
    margin: auto;
    margin-top: 50px;
    background-color: ${(props) => (props.transparent ? "none" : " white")};
    border-radius: 3px;
    padding: 400px 0px;
  }
  & .text {
    display: inline-block;
    padding: 10px 15px;
    background-color: black;
    border-radius: 2px;
    color: white;
    font-size: 20px;
    font-weight: bold;
    animation: myAnimation 5s infinite;
  }

  @keyframes myAnimation {
    0% {
      transform: rotateY(0);
    }
    100% {
      transform: rotateY(31.42rad);
    }
  }
`;
