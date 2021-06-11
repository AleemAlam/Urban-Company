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
position: relative;
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

width: 54%;
height: 75px;
background-color: #ffffff;
padding: 0px 30px;
margin: 0px 0px 0px 32px;
position: sticky;
position: -webkit-sticky;
top: 0;
display: flex;
z-index: 5;
box-shadow: 0 4px 12px 0 #ddd;
margin-left: 65px;
`

export const StyleHowItWorksCont = styled(StyleNavigationBarCont)`
height: 95px;
margin: 0 32px;
z-index: 1;
margin-top: 20px;
margin-left: 65px;
`
export const StyleHIWMainCont = styled(StyleHowItWorksCont)`
height: auto;
margin-top: 0.2%;
padding-top: 20px;
padding-bottom: 20px;
display:flex;
flex-direction: column;
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
font-size: 16.5px;
text-align: left;
color: #616161;
cursor: pointer;
font-family: axiforma-regular,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif;
-webkit-font-smoothing: antialiased;
`
export const HIWHeaderHeading = styled.h2`
display: block;
font-size: 22px;
padding: 31px 24px;
margin: 0;
font-weight: 700;
font-family: axiforma-regular,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif;

`
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
`
export const StyleHIWLogoCont = styled(StyleHIWTextCont)`
width: 7%;
background-color: none;
height: 43px;
border-radius: 50%;
margin: 0;
`
export const StyleHIWTextContHeading = styled.h4`

font-size: 16px;
font-weight: 700;
line-height: 1.43;
color: #000;
padding: 0px;
margin: 0px;
text-align: left;
`

export const StyleHIWTextContParagraph = styled.p`

font-size: 15px;
font-weight: 400;
line-height: 1.5;
letter-spacing: normal;
color: #757575;
padding: 0px;
margin: 0px;
text-align: left;

`

export const StyleHIWTextContH4AndPBox = styled.div`
width: 86%;
margin: 0px 0px 0px 33px;
padding: 0;
`
export const HIWTextContLogo = styled.img`

width: 100%;
height: 100%;
`

export const StyleHIWTextContBorderLine = styled.div`
height: 27px;
width: 0.3%;
background-color: #e2e2e2;
margin-left: 6.3%;
`
export const StyleBackgroundImageTopNav = styled(StyleNavigationBarCont)`
background-color: transparent;
box-shadow: none;
position: absolute;
margin: 11px 50px 30px 70px;
padding: 0;
display: flex;
column-gap: 10px;
flex-direction: row;
font-size: 15.2px;
`
export const StyleWhiteColorDiv = styled.div`
color: #DDDDDD;
`
export const StyleBackgroundImageheadingH1 = styled(StyleBackgroundImageTopNav)`
margin-top: 90px;
color: white;
font-weight: 600;
font-size: 18.5px;
font-family: axiforma-regular,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif;
`
