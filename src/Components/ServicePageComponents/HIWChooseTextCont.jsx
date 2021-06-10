import React from 'react'
import {
    HIWTextContLogo,
    StyleHIWLogoCont,
    StyleHIWTextCont,
    StyleHIWTextContH4AndPBox,
    StyleHIWTextContHeading,
    StyleHIWTextContParagraph,
}
    from '../../StyledComponents/AcServiceAndRepairStyle'

export const HIWChooseTextCont = (props) => {
    return (
        <>
        <StyleHIWTextCont>
            <StyleHIWLogoCont>
                <HIWTextContLogo src={props.url} alt="error" />
            </StyleHIWLogoCont>
            <StyleHIWTextContH4AndPBox >
                <StyleHIWTextContHeading>{props.textH4}</StyleHIWTextContHeading>
                <StyleHIWTextContParagraph>{props.textP}</StyleHIWTextContParagraph>
            </StyleHIWTextContH4AndPBox>
        </StyleHIWTextCont>
        </>
    )
}
