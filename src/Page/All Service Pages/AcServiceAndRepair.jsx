import React from "react";
import { HIWMainCont } from "../../Components/ServicePageComponents/HIWMainCont.jsx";
import { HowItworksHeader } from "../../Components/ServicePageComponents/HowItworksHeader.jsx";
import { AcServiceIn } from "../../Components/ServicePageComponents/AcServiceIn.jsx";
import { Technicians } from "../../Components/ServicePageComponents/Technicians.jsx";
import { ImageCont } from "../../Components/ServicePageComponents/ImageCont.jsx";
import { NavigationBarSticky } from "../../Components/ServicePageComponents/NavigationBarSticky.jsx";
import {MainCont} from "../../StyledComponents/AcServiceAndRepairStyle.js";
import { Reviews } from "../../Components/ServicePageComponents/Reviews.jsx";
import Navbar from "../../Components/Navbar.jsx"

export default function AcServiceAndRepair() {
  return (
    <>
    <Navbar/>
    <MainCont>
      
      <ImageCont image="https://res.cloudinary.com/urbanclap/image/upload/fl_progressive,t_medium_res_template/categories/category_v2/category_08f70800.jpeg"/>
      <NavigationBarSticky />
      <HowItworksHeader />
      <HIWMainCont />
      <AcServiceIn />
      <Technicians />
      <Reviews />
      <Reviews />
      <Reviews />
      <Reviews />

    </MainCont>
    </>
  );
}
