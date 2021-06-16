import React from 'react'
import { StyleNavigationBarCont } from '../../StyledComponents/AcServiceAndRepairStyle'
import { StickyNavigationBarBtn } from './StickyNavigationBarBtn'

export const NavigationBarSticky = () => {

    return (
        <StyleNavigationBarCont>

            <StickyNavigationBarBtn text="How it Works" />
            <StickyNavigationBarBtn text="Technicians" className="technicians"/>
            <StickyNavigationBarBtn text="Customer Reviwes"/>
            <StickyNavigationBarBtn text="Blogs"/>
            <StickyNavigationBarBtn text="About Ac Repairs"/>

        </StyleNavigationBarCont>
    )
}
