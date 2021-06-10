import React from 'react'
import { StyleStickyNavBtn } from '../../StyledComponents/AcServiceAndRepairStyle'

export const StickyNavigationBarBtn = (props) => {
    return (
       <a href="#StyleHIWMainCont"><StyleStickyNavBtn>{props.text}</StyleStickyNavBtn></a>
    )
}
