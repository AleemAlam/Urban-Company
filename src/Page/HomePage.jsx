import React from "react";
import MyCarousel from "../Components/MyCarousel";
import Carousel from "react-elastic-carousel";
import ServiceImgCard from "../Components/ServiceImgCard";
import ServiceSmallCard from "../Components/ServiceSmallCard";
import {
  Container,
  ImgCardContainer,
  Separator,
} from "../StyledComponents/HomePageStyledComponents";
import BigCard from "../Components/BigCard";
import BigText from "../Components/BigText";
import OfferSection from "../Components/OfferSection";

const services = [
  {
    name: "AC Service & Repairer",
    img: "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/images/growth/home-screen/1615440995882-3b2e17.png",
  },
  {
    name: "AC Service & Repairer",
    img: "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/images/growth/home-screen/1615440995882-3b2e17.png",
  },
  {
    name: "AC Service & Repairer",
    img: "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/images/growth/home-screen/1615440995882-3b2e17.png",
  },
  {
    name: "AC Service & Repairer",
    img: "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/images/growth/home-screen/1615440995882-3b2e17.png",
  },
  {
    name: "AC Service & Repairer",
    img: "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/images/growth/home-screen/1615440995882-3b2e17.png",
  },
  {
    name: "AC Service & Repairer",
    img: "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/images/growth/home-screen/1615440995882-3b2e17.png",
  },
  {
    name: "AC Service & Repairer",
    img: "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/images/growth/home-screen/1615440995882-3b2e17.png",
  },
  {
    name: "AC Service & Repairer",
    img: "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/images/growth/home-screen/1615440995882-3b2e17.png",
  },
  {
    name: "AC Service & Repairer",
    img: "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/images/growth/home-screen/1615440995882-3b2e17.png",
  },
  {
    name: "AC Service & Repairer",
    img: "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/images/growth/home-screen/1615440995882-3b2e17.png",
  },
];

const packages = [
  {
    img: "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_568/t_high_res_template/images/growth/home-screen/1618991718888-881ef6.png",
    name: "cleaning",
  },
  {
    img: "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_568/t_high_res_template/images/growth/home-screen/1618991718888-881ef6.png",
    name: "cleaning",
  },
  {
    img: "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_568/t_high_res_template/images/growth/home-screen/1618991718888-881ef6.png",
    name: "cleaning",
  },
  {
    img: "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_568/t_high_res_template/images/growth/home-screen/1618991718888-881ef6.png",
    name: "cleaning",
  },
  {
    img: "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_568/t_high_res_template/images/growth/home-screen/1618991718888-881ef6.png",
    name: "cleaning",
  },
  {
    img: "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_568/t_high_res_template/images/growth/home-screen/1618991718888-881ef6.png",
    name: "cleaning",
  },
  {
    img: "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_568/t_high_res_template/images/growth/home-screen/1618991718888-881ef6.png",
    name: "cleaning",
  },
];

const offers = [
  {
    img: "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/images/growth/home-screen/1615874646690-66ab68.jpeg",
    title: "Saloon For Men",
    subTitle: "flat 10% off",
  },
  {
    img: "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/images/growth/home-screen/1615874646690-66ab68.jpeg",
    title: "Saloon For Men",
    subTitle: "flat 10% off",
  },
  {
    img: "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/images/growth/home-screen/1615874646690-66ab68.jpeg",
    title: "Saloon For Men",
    subTitle: "flat 10% off",
  },
  {
    img: "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/images/growth/home-screen/1615874646690-66ab68.jpeg",
    title: "Saloon For Men",
    subTitle: "flat 10% off",
  },
];

const cleaning = [
  {
    img: "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/categories/category_v2/category_165bfd50.png ",
    title: "Bathroom Cleaning",
    subTitle: "Up to 40% off",
  },
  {
    img: "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/categories/category_v2/category_165bfd50.png ",
    title: "Bathroom Cleaning",
    subTitle: "Up to 40% off",
  },
  {
    img: "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/categories/category_v2/category_165bfd50.png ",
    title: "Bathroom Cleaning",
    subTitle: "Up to 40% off",
  },
  {
    img: "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/categories/category_v2/category_165bfd50.png ",
    title: "Bathroom Cleaning",
    subTitle: "Up to 40% off",
  },
];

const appliances = [
  {
    img: "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/categories/category_v2/category_ef2b79d0.png",
    title: "Ac Service And Repair",
    subTitle: "Up to 40% off",
  },
  {
    img: "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/categories/category_v2/category_ef2b79d0.png",
    title: "Ac Service And Repair",
    subTitle: "Up to 40% off",
  },
  {
    img: "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/categories/category_v2/category_ef2b79d0.png",
    title: "Ac Service And Repair",
    subTitle: "Up to 40% off",
  },
  {
    img: "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/categories/category_v2/category_ef2b79d0.png",
    title: "Ac Service And Repair",
    subTitle: "Up to 40% off",
  },
];

const giftImg = [
  {
    img: "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_568/t_high_res_template/images/growth/home-screen/1610438277275-5116a7.png",
  },
  {
    img: "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_568/t_high_res_template/images/growth/home-screen/1610438277275-5116a7.png",
  },
  {
    img: "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_568/t_high_res_template/images/growth/home-screen/1610438277275-5116a7.png",
  },
];
const tweets = [
  {
    img: "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_568/t_high_res_template/categories/category_v2/category_3782c0d0.png",
  },
  {
    img: "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_568/t_high_res_template/categories/category_v2/category_3782c0d0.png",
  },
  {
    img: "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_568/t_high_res_template/categories/category_v2/category_3782c0d0.png",
  },
  {
    img: "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_568/t_high_res_template/categories/category_v2/category_3782c0d0.png",
  },
];

export default function HomePage() {
  const breakPoints = [
    { width: 600, itemsToShow: 2 },
    { width: 600, itemsToShow: 2 },
    { width: 900, itemsToShow: 4 },
  ];
  return (
    <div>
      <MyCarousel />
      <Container>
        {services.map((service, i) => (
          <ServiceSmallCard key={i} name={service.name} img={service.img} />
        ))}
      </Container>
      <ImgCardContainer>
        <Carousel breakPoints={breakPoints}>
          {packages.map((item, i) => (
            <ServiceImgCard {...item} />
          ))}
        </Carousel>
      </ImgCardContainer>
      <Separator />
      <BigCard img="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_2880/t_high_res_template/images/growth/home-screen/1618376960342-f0afcb.jpeg" />
      <Separator />
      <OfferSection
        text="Best Offers"
        subHeading={"Hygienic &single-usproducts | low-contact services"}
        cardDetails={offers}
      />
      <Separator />
      <OfferSection
        text="Cleaning & Pest Control"
        subHeading={"Removes hard stains & more"}
        cardDetails={cleaning}
      />
      <Separator />
      <OfferSection
        text="Appliances"
        subHeading={"Service, Repaire, Installation & Uninstallation"}
        cardDetails={appliances}
      />
      <Separator />
      <OfferSection
        text="Gift an Experience"
        subHeading={
          "Gift your love ones an amazing UC experience which they will remember"
        }
        cardDetails={giftImg}
      />
      <Separator />
      <OfferSection
        text="Customer Safety is our priority"
        subHeading={"What customer are saying about our safety standards    "}
        cardDetails={tweets}
      />
      <Separator style={{ margin: 0 }} />
      <BigCard img="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_2159/t_high_res_template/images/growth/luminosity/1614591609525-df202d.jpeg" />
      <Separator />
      <BigCard img="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_2159/t_high_res_template/categories/category_v2/category_a4e46fa0.png" />

      <Separator />
      <BigCard img="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_2159/t_high_res_template/categories/category_v2/category_3cffdf20.png" />
    </div>
  );
}
