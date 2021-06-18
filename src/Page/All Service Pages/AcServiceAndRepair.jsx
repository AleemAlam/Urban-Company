import React from "react";
import { HIWMainCont } from "../../Components/ServicePageComponents/HIWMainCont.jsx";
import { HowItworksHeader } from "../../Components/ServicePageComponents/HowItworksHeader.jsx";
import { AcServiceIn } from "../../Components/ServicePageComponents/AcServiceIn.jsx";
import { Technicians } from "../../Components/ServicePageComponents/Technicians.jsx";
import { ImageCont } from "../../Components/ServicePageComponents/ImageCont.jsx";
import { NavigationBarSticky } from "../../Components/ServicePageComponents/NavigationBarSticky.jsx";
import { MainCont } from "../../StyledComponents/AcServiceAndRepairStyle.js";
import { Reviews } from "../../Components/ServicePageComponents/Reviews.jsx";
import Navbar from "../../Components/Navbar.jsx";
import { CarosuleTechnicians } from "../../Components/ServicePageComponents/CarosuleTechnicians.jsx";
import { CarosuleBlogs } from "../../Components/ServicePageComponents/CarosuleBlogs.jsx";
import { PopularServices } from "../../Components/ServicePageComponents/PopularServices.jsx";
import { PopularLocality } from "../../Components/ServicePageComponents/PopularLocality.jsx";
import { RelatedAcService } from "../../Components/ServicePageComponents/RelatedAcService.jsx";

export default function AcServiceAndRepair({ setShowServiceModal }) {
  return (
    <>
      <MainCont>
        <ImageCont
          setShowServiceModal={setShowServiceModal}
          image="https://res.cloudinary.com/urbanclap/image/upload/fl_progressive,t_medium_res_template/categories/category_v2/category_08f70800.jpeg"
        />
        
        <NavigationBarSticky />
        <HowItworksHeader />
        <HIWMainCont />
        <AcServiceIn />
        <Technicians />
        <Reviews />
        <Reviews />
        <Reviews />
        <Reviews />
        <Reviews />
        <Reviews />
        <Reviews />
        <RelatedAcService />
        <CarosuleTechnicians />
        <PopularServices />
        <PopularLocality />
        <CarosuleBlogs />
        
      </MainCont>
    </>
  );
}
