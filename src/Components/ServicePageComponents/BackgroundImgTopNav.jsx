import React from 'react'
import { 
  StyleBackgroundImageTopNav,
  StyleWhiteColorDiv,
  StyleBackgroundImageheadingH1,
  StyleBackImgH1Subheading
} 
from '../../StyledComponents/AcServiceAndRepairStyle'
import { Link } from "react-router-dom"

export const BackgroundImgTopNav = () => {
  return (<>
    <StyleBackgroundImageTopNav>
   
      <Link to="/"  style= { { textDecoration: 'none' }}>
        <StyleWhiteColorDiv className="colorWhite">Home</StyleWhiteColorDiv>
      </Link>

      <StyleWhiteColorDiv colorWhite>/</StyleWhiteColorDiv>

      <Link to="/"  style= { { textDecoration: 'none' }}>
        <StyleWhiteColorDiv>New Delhi</StyleWhiteColorDiv>
      </Link>

      <StyleWhiteColorDiv colorWhite>/</StyleWhiteColorDiv>

      <Link to="/ac-service-repair"  style= { { textDecoration: 'none' }}>
        <StyleWhiteColorDiv colorWhite>Ac Service Repair</StyleWhiteColorDiv>
      </Link>

    </StyleBackgroundImageTopNav>

    <StyleBackgroundImageheadingH1>
      <h1>AC Service & Repair in New Delhi</h1>
    </StyleBackgroundImageheadingH1>

    <StyleBackImgH1Subheading>
      <ul>
        <li>Power Jet AC Service for better cooling</li>
        <li>90 day repair warranty</li>
        <li>Background checked and trained technicians with genuine parts & fixed  pricing</li>
      </ul>
    </StyleBackImgH1Subheading>
    </>
  )
}
