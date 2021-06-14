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
box-shadow: none;
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
box-shadow: none;
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
color: #ddd;
`
export const StyleBackgroundImageheadingH1 = styled(StyleBackgroundImageTopNav)`
margin-top: 90px;
color: #fff;
font-size: 19px;
font-family: axiforma-regular,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif;

`
export const StyleBackImgH1Subheading = styled(StyleBackgroundImageTopNav)`
line-height: 46px;
margin-top: 175px;
color: #b4b2a9;
font-size: 17px;
margin-left: 46px;
opacity: .9;
font-weight: 600;
`
export const StyleServiceCard = styled(StyleBackgroundImageTopNav)`

position: fixed;
width: 25%;
margin: 100px 835px 70px;
background-image: linear-gradient(130deg,#642b73,#c6426e);
border-top-left-radius: 4px;
border-top-right-radius: 4px;
text-align: center;
padding: 20px 24px 30px;
display: flex;
flex-direction: column;
height: auto;

`
export const StyleServiceCardH2 = styled(HIWHeaderHeading)`
font-size: 23px;
color: white;
text-align: left;
padding: 0px;
`

export const StyleServicecardButton = styled.button`
width:  310px;
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
margin:0px;
font-size: 17px;
font-family: axiforma-regular,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif;
color: #000000;
font-weight: 500;
opacity: .9
}

`
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

.rightDiv{
    display: flex;
    flex-direction: column;
    text-align: left;
    padding: 0px 24px;
    width: 57%;
    margin-left: 25px;

}

.leftDiv{
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

`

