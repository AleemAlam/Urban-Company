import React from "react";
import { HowItworks } from "../../Components/ServicePageComponents/HowItworks.jsx";
import { ImageCont } from "../../Components/ServicePageComponents/ImageCont.jsx";
import { NavigationBarSticky } from "../../Components/ServicePageComponents/NavigationBarSticky.jsx";
import {MainCont} from "../../StyledComponents/AcServiceAndRepairStyle.js";

export default function AcServiceAndRepair() {
  return (
    <MainCont>
      <ImageCont image="https://res.cloudinary.com/urbanclap/image/upload/fl_progressive,t_medium_res_template/categories/category_v2/category_08f70800.jpeg"/>
      <NavigationBarSticky />
      <HowItworks />
    </MainCont>
  );
}
