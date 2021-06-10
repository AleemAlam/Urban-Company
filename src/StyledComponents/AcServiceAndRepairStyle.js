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
height: 75px;
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
height: 95px;
margin: 0 32px;
z-index: 1;
margin-top: 20px;
`
export const StyleHIWMainCont = styled(StyleHowItWorksCont)`
height: 323px;
margin-top: 0.2%;
`
export const StyleAcServiceInCont = styled(StyleHowItWorksCont)`

height: 130px;
margin-top: 40px;
`
export const StyleStickyNavBtn = styled.div`

padding: 24px 0px 15px;
border-bottom: 3.3px solid black;
height: 33px;
margin: 0px 12px 0px 20px;
display: inline-block;
font-size: 18px;
text-align: left;
color: #616161;
cursor: pointer;
font-family: axiforma-regular,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif;
-webkit-font-smoothing: antialiased;
`
export const HIWHeaderHeading = styled.h2`
display: block;
font-size: 25px;
padding: 28px 24px;
margin: 0;
font-weight: 600;

`