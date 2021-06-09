import React from "react";
import styled from "styled-components";

// npm install npm@latest -g
// rm -rf node_modules && npm install
// npm update

const Heading = styled.div`
  width: 100vw;
  height: 75px;
  color: #424242;
  background: #f7f8fa;
`;

const Container = styled.div``;
export default function Services() {
  return (
    <>
      <Heading>Men's Haircut and Grooming</Heading>
      <Container></Container>
    </>
  );
}
