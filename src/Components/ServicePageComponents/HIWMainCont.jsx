import React from 'react'
import { StyleHIWMainCont } from '../../StyledComponents/AcServiceAndRepairStyle'
import { HIWChooseTextCont } from './HIWChooseTextCont'
import { HIWTextContBorderLine } from './HIWTextContBorderLine'

export const HIWMainCont = () => {
    return (
       <StyleHIWMainCont>
           <HIWChooseTextCont textH4="Choose a Saloon Service" textP="Select from various salon packages & services" url="https://res.cloudinary.com/urbanclap/image/upload/categories/category_v2/category_bf6773f0.png"/>
           <HIWTextContBorderLine/>
           <HIWChooseTextCont textH4="Choose a Saloon Service" textP="Select from various salon packages & services" url="https://res.cloudinary.com/urbanclap/image/upload/categories/category_v2/category_bf6773f0.png"/>
           <HIWTextContBorderLine/>
           <HIWChooseTextCont textH4="Choose a Saloon Service" textP="Select from various salon packages & services" url="https://res.cloudinary.com/urbanclap/image/upload/categories/category_v2/category_bf6773f0.png"/>
           <HIWTextContBorderLine/>
           <HIWChooseTextCont textH4="Choose a Saloon Service" textP="Select from various salon packages & services" url="https://res.cloudinary.com/urbanclap/image/upload/categories/category_v2/category_bf6773f0.png"/>
           
       </StyleHIWMainCont>
    )
}
