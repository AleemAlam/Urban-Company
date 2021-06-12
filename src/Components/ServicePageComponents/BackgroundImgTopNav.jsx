import React from 'react'
import {
  StyleBackgroundImageTopNav,
  StyleWhiteColorDiv
}
  from '../../StyledComponents/AcServiceAndRepairStyle'

import { Link } from "react-router-dom"

export const BackgroundImgTopNav = () => {
  return (<>
    <StyleBackgroundImageTopNav>

      <Link to="/" style={{ textDecoration: 'none' }}>
        <StyleWhiteColorDiv className="colorWhite">Home</StyleWhiteColorDiv>
      </Link>

      <StyleWhiteColorDiv colorWhite>/</StyleWhiteColorDiv>

      <Link to="/" style={{ textDecoration: 'none' }}>
        <StyleWhiteColorDiv>New Delhi</StyleWhiteColorDiv>
      </Link>

      <StyleWhiteColorDiv colorWhite>/</StyleWhiteColorDiv>

      <Link to="/ac-service-repair" style={{ textDecoration: 'none' }}>
        <StyleWhiteColorDiv colorWhite>Ac Service Repair</StyleWhiteColorDiv>
      </Link>

    </StyleBackgroundImageTopNav>
  </>
  )
}
