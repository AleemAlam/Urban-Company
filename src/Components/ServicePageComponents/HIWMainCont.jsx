import React from 'react'
import { StyleHIWMainCont } from '../../StyledComponents/AcServiceAndRepairStyle'
import { HIWChooseTextCont } from './HIWChooseTextCont'
import { HIWTextContBorderLine } from './HIWTextContBorderLine'

export const HIWMainCont = () => {
    return (
       <StyleHIWMainCont>
           <HIWChooseTextCont textH4="Choose a Saloon Service" textP="Select from various salon packages & services" url="https://res.cloudinary.com/urbanclap/image/upload/categories/category_v2/category_d08fb660.jpeg"/>
           <HIWTextContBorderLine/>
           <HIWChooseTextCont textH4="Choose a Saloon Service" textP="Select from various salon packages & services" url="https://res.cloudinary.com/urbanclap/image/upload/categories/category_v2/category_d08fb660.jpeg"/>
           <HIWTextContBorderLine/>
           <HIWChooseTextCont textH4="Choose a Saloon Service" textP="Select from various salon packages & services" url="https://res.cloudinary.com/urbanclap/image/upload/categories/category_v2/category_d08fb660.jpeg"/>
           <HIWTextContBorderLine/>
           <HIWChooseTextCont textH4="Choose a Saloon Service" textP="Select from various salon packages & services" url="https://res.cloudinary.com/urbanclap/image/upload/categories/category_v2/category_d08fb660.jpeg"/>
           
       </StyleHIWMainCont>
    )
}
