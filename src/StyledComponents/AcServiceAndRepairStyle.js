import styled from "styled-components";

export const MainCont = styled.div`
width: 100%;
margin: 0%;
background-color: #f5f5f5;
`

export const StyleImageCont = styled.div`
width: 100%;
height: 458px;
margin: 0%;
padding: 0%;
`

export const StyleBackgroundImage = styled.img`

width: 100%;
height: 100%;
object-fit: cover;
filter: brightness(.5);
top:0;
margin: 0%;
`

export const StyleNavigationBarCont = styled.div`

width: 58%;
height: 58px;
background-color: #ffffff;
padding: 0px 30px;
margin: 0px 0px 0px 32px;
position: sticky;
position: -webkit-sticky;
top: 0;
display: flex;
z-index: 5;
`

export const StyleHowItWorksCont = styled(StyleNavigationBarCont)`
height: 40px;
margin: 0 32px;
padding: 28px 0 0;
z-index: 1;
`