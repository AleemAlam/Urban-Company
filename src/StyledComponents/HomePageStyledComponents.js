import styled from "styled-components";

export const StyledNavbar = styled.div`
  display: flex;
  padding: 10px;
  background-color: dodgerblue;
  color: #fff;
  justify-content: space-between;
  & div {
    display: flex;
  }
  & div > p {
    padding: 0px 10px;
  }
`;
