import {
  StyleCarosuleDiv,
  StyleCarosuleMainDiv,
  ImgDiv,
} from "../../StyledComponents/AcServiceAndRepairStyle";

import Carousel from "react-elastic-carousel";

import { CarosuleNavbar } from "./CarosuleNavbar.jsx";
import "./style.css";

export const CarosuleBlogs = () => {
  const breakPoints = [
    { width: 500, itemsToShow: 3 },
    { width: 263, itemsToShow: 3, itemsToScroll: 2 },
    { width: 600, itemsToShow: 3 },
    { width: 1200, itemsToShow: 3 },
  ];

  return (
    <StyleCarosuleDiv>
      <CarosuleNavbar text="Featured Blogs on Home Improvement Blogs" id="blogs"/>

      <StyleCarosuleMainDiv>
        <Carousel breakPoints={breakPoints}>
          <div>
            <ImgDiv>
              <img
                src="https://de927adv5b23k.cloudfront.net/wp-content/uploads/2018/05/10191842/shutterstock_716916271.jpg"
                alt="error"
              />
            </ImgDiv>
            <p>How to Buy the Best Washing Machine for Your Home</p>
          </div>

          <div>
            <ImgDiv>
              <img
                src="https://de927adv5b23k.cloudfront.net/wp-content/uploads/2018/05/10113743/tips_for_washing_machine_repair.jpg"
                alt="error"
              />
            </ImgDiv>
            <p>How to Buy the Best Washing Machine for Your Home</p>
          </div>

          <div>
            <ImgDiv>
              <img
                src="https://de927adv5b23k.cloudfront.net/wp-content/uploads/2018/03/03160618/shutterstock_767179996.jpg"
                alt="error"
              />
            </ImgDiv>
            <p>How to Buy the Best Washing Machine for Your Home</p>
          </div>

          <div>
            <ImgDiv>
              <img
                src="https://de927adv5b23k.cloudfront.net/wp-content/uploads/2018/03/03160631/shutterstock_261661412.jpg"
                alt="error"
              />
            </ImgDiv>
            <p>How to Buy the Best Washing Machine for Your Home</p>
          </div>

          <div>
            <ImgDiv>
              <img
                src="https://de927adv5b23k.cloudfront.net/wp-content/uploads/2018/03/03160739/shutterstock_616567397-tender-1.jpg"
                alt="error"
              />
            </ImgDiv>
            <p>How to Buy the Best Washing Machine for Your Home</p>
          </div>

          <div>
            <ImgDiv>
              <img
                src="https://de927adv5b23k.cloudfront.net/wp-content/uploads/2018/03/03163008/shutterstock_727143685.jpg"
                alt="error"
              />
            </ImgDiv>
            <p>How to Buy the Best Washing Machine for Your Home</p>
          </div>

          <div>
            <ImgDiv>
              <img
                src="https://de927adv5b23k.cloudfront.net/wp-content/uploads/2018/03/03163243/shutterstock_402961492.jpg"
                alt="error"
              />
            </ImgDiv>
            <p>How to Buy the Best Washing Machine for Your Home</p>
          </div>

          <div>
            <ImgDiv>
              <img
                src="https://de927adv5b23k.cloudfront.net/wp-content/uploads/2018/03/25163626/shutterstock_3754729241.jpg"
                alt="error"
              />
            </ImgDiv>
            <p>How to Buy the Best Washing Machine for Your Home</p>
          </div>

          <div>
            <ImgDiv>
              <img
                src="https://de927adv5b23k.cloudfront.net/wp-content/uploads/2018/03/25174517/shutterstock_2766108681.jpg"
                alt="error"
              />
            </ImgDiv>
            <p>How to Buy the Best Washing Machine for Your Home</p>
          </div>

          <div>
            <ImgDiv>
              <img
                src="https://de927adv5b23k.cloudfront.net/wp-content/uploads/2018/03/25175634/shutterstock_533140003.jpg"
                alt="error"
              />
            </ImgDiv>
            <p>How to Buy the Best Washing Machine for Your Home</p>
          </div>
        </Carousel>
      </StyleCarosuleMainDiv>
    </StyleCarosuleDiv>
  );
};
