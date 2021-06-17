import {
    StyleCarosuleNavDiv
}
    from '../../StyledComponents/AcServiceAndRepairStyle'

export const CarosuleNavbar = (props) => {
    return (
        <>
        <StyleCarosuleNavDiv id={props.id}>
        <h2>{props.text}</h2>
    </StyleCarosuleNavDiv>
    </>
    )
}
