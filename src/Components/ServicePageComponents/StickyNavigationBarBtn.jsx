import React from 'react'
import { StyleStickyNavBtn } from '../../StyledComponents/AcServiceAndRepairStyle'
import { AcServiceIn } from './AcServiceIn.jsx'

export const StickyNavigationBarBtn = (props) => {

const handleClick = ()=> {
    return(<>
    
    <AcServiceIn/>
    
    </>)
}

    return (
       <StyleStickyNavBtn onClick={handleClick}>{props.text}</StyleStickyNavBtn>
    )
}
