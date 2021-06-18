import {
  StyleCarosuleDiv,
  StyleCarosuleMainDiv,
  ImgDiv,
} from "../../StyledComponents/AcServiceAndRepairStyle";

import Carousel from "react-elastic-carousel";

import { CarosuleNavbar } from "./CarosuleNavbar.jsx";
import "./style.css";

export const CarosuleTechnicians = () => {
  const breakPoints = [
    { width: 500, itemsToShow: 3 },
    { width: 263, itemsToShow: 3, itemsToScroll: 2 },
    { width: 600, itemsToShow: 3 },
    { width: 1200, itemsToShow: 3 },
  ];

  return (
    <StyleCarosuleDiv>
      <CarosuleNavbar text="Customers in New Delhi also booked" id="reviews"/>

      <StyleCarosuleMainDiv>
        <Carousel breakPoints={breakPoints}>
          <div>
            <ImgDiv>
              <img
                src="https://res.cloudinary.com/urbanclap/image/upload/t_low_res_portfolio_medium,q_auto:low,f_auto/categories/category_v2/category_bd846e30.jpeg"
                alt="error"
              />
            </ImgDiv>
            <p>Washing Machine Repair Proffessionals</p>
          </div>

          <div>
            <ImgDiv>
              <img
                src="https://res.cloudinary.com/urbanclap/image/upload/t_low_res_portfolio_medium,q_auto:low,f_auto/categories/category_v2/category_a9373930.jpeg"
                alt="error"
              />
            </ImgDiv>
            <p>Plumbers</p>
          </div>

          <div>
            <ImgDiv>
              <img
                src="https://res.cloudinary.com/urbanclap/image/upload/t_low_res_portfolio_medium,q_auto:low,f_auto/categories/home_screen/categories/Home-cleaning.jpg"
                alt="error"
              />
            </ImgDiv>
            <p>Home Cleaning Service Proffessionals</p>
          </div>

          <div>
            <ImgDiv>
              <img
                src="https://res.cloudinary.com/urbanclap/image/upload/t_low_res_portfolio_medium,q_auto:low,f_auto/categories/category_v2/category_bd846e30.jpeg"
                alt="error"
              />
            </ImgDiv>
            <p>Washing Machine Repair Proffessionals</p>
          </div>

          <div>
            <ImgDiv>
              <img
                src="https://res.cloudinary.com/urbanclap/image/upload/t_low_res_portfolio_medium,q_auto:low,f_auto/categories/category_v2/category_a9373930.jpeg"
                alt="error"
              />
            </ImgDiv>
            <p>Plumbers</p>
          </div>
        </Carousel>
      </StyleCarosuleMainDiv>
    </StyleCarosuleDiv>
  );
};
