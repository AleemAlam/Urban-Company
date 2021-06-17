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
import OfferSection from "../Components/OfferSection";
import TwoCard from "../Components/TwoCard";
import LoginFormModal from "../Components/LoginFormModal";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import Loader from "../Components/Loader";
import styled from "styled-components";

const services = [
  {
    name: "AC Service & Repairer",
    img: "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/images/growth/home-screen/1615440995882-3b2e17.png",
  },
  {
    name: "Appliance Repair",
    img: "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/categories/category_v2/category_72d18950.png",
  },
  {
    name: "Painter",
    img: "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/images/growth/home-screen/1609757627074-4b1dca.png",
  },
  {
    name: "Cleaning & infection",
    img: "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/categories/category_v2/category_6b1f5250.png",
  },
  {
    name: "Electricians",
    img: "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/categories/category_v2/category_07f29980.jpeg",
  },
  {
    name: "Plumber",
    img: "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/categories/category_v2/category_6fbad370.png",
  },
  {
    name: "Carpenters",
    img: "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/categories/category_v2/category_c65717e0.png",
  },
  {
    name: "Pest Control",
    img: "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/images/growth/home-screen/1604066433584-3d7851.png",
  },
  {
    name: "Salon For Women",
    img: "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/images/growth/home-screen/1609757635235-1a139e.png",
  },
  {
    name: "Spa For Women",
    img: "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/categories/category_v2/category_1312fb60.png",
  },
];

const packages = [
  {
    img: "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_568/t_high_res_template/images/growth/home-screen/1618991718888-881ef6.png",
    name: "cleaning",
  },
  {
    img: "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_568/t_high_res_template/images/growth/home-screen/1617874003009-c3adf2.png",
    name: "cleaning",
  },
  {
    img: "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_568/t_high_res_template/images/growth/home-screen/1617795245531-c90a8c.png",
    name: "cleaning",
  },
  {
    img: "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_568/t_high_res_template/images/growth/home-screen/1617620015732-976562.png",
    name: "cleaning",
  },
  {
    img: "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_568/t_high_res_template/images/growth/home-screen/1617976798082-c530ca.png",
    name: "cleaning",
  },
  {
    img: "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_568/t_high_res_template/images/growth/home-screen/1617733266485-fa6511.png",
    name: "cleaning",
  },
  {
    img: "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_568/t_high_res_template/images/growth/home-screen/1617733267598-bccfc6.png",
    name: "cleaning",
  },
];

const offers = [
  {
    img: "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/images/growth/home-screen/1603078782132-dfcd55.jpeg",
    title: "Saloon At Home For Women",
    subTitle: "Free Waxing",
  },
  {
    img: "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/images/growth/home-screen/1615874646690-66ab68.jpeg",
    title: "Saloon For Men",
    subTitle: "Up to 40% off",
  },
  {
    img: "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/images/growth/home-screen/1601893536279-77bf02.png",
    title: "Massage Therapy For Women",
    subTitle: "Free Head Massage",
  },
  {
    img: "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/categories/category_v2/category_165bfd50.png",
    title: "Bathroom Cleaning",
    subTitle: "Flat 100 Rs off",
  },
];

const cleaning = [
  {
    img: "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/categories/category_v2/category_165bfd50.png ",
    title: "Bathroom Cleaning",
    subTitle: "Up to 40% off",
  },
  {
    img: "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/categories/category_v2/category_f4015e10.png",
    title: "Car Cleaning",
    subTitle: "",
  },
  {
    img: "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/categories/category_v2/category_2effaaf0.png",
    title: "Sofa & Carpet Cleaning",
    subTitle: "Up to 50% off",
  },
  {
    img: "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/categories/category_v2/category_5cadb240.jpeg",
    title: "Pest Control",
    subTitle: "",
  },
];

const appliances = [
  {
    img: "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/categories/category_v2/category_ef2b79d0.png",
    title: "Ac Service And Repair",
    subTitle: "Up to 30% off",
  },
  {
    img: "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/images/growth/home-screen/1616584247480-40cead.png",
    title: "Video Consultation",
    subTitle: "",
  },
  {
    img: "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/categories/category_v2/category_bbb8c690.png",
    title: "RO Service & Repair",
    subTitle: "",
  },
  {
    img: "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/categories/category_v2/category_b78221c0.png",
    title: "Washing Machine & Repair",
    subTitle: "Up to 40% off",
  },
];

const giftImg = [
  {
    img: "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_568/t_high_res_template/images/growth/home-screen/1610438277275-5116a7.png",
  },
  {
    img: "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_568/t_high_res_template/images/growth/home-screen/1610356403080-d23302.png",
  },
  {
    img: "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_568/t_high_res_template/images/growth/home-screen/1610438309832-fe458d.png ",
  },
];
const tweets = [
  {
    img: "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_568/t_high_res_template/categories/category_v2/category_3782c0d0.png",
  },
  {
    img: "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_568/t_high_res_template/categories/category_v2/category_38337330.png",
  },
  {
    img: "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_568/t_high_res_template/categories/category_v2/category_387cb130.png",
  },
  {
    img: "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_568/t_high_res_template/categories/category_v2/category_3bbf0af0.png",
  },
];

const StyledCarousel = styled(Carousel)`
  & .rec.rec-arrow-right {
    margin-left: 96%;
  }
  & .rec-arrow {
    margin-top: 0;
  }
  .rec-carousel-item:hover {
    outline: none;
    box-shadow: none !important;
  }
`;

export default function HomePage({ showModal, setShowModal }) {
  const breakPoints = [
    { width: 540, itemsToShow: 1 },
    { width: 830, itemsToShow: 2 },
    { width: 950, itemsToShow: 3 },
    { width: 1050, itemsToShow: 4 },
  ];
  const isLoading = useSelector((state) => state.auth.isLoading);
  return (
    <div>
      {isLoading && <Loader transparent={false} />}
      <MyCarousel />
      <Container>
        {services.map((service, i) => (
          <Link
            style={{ textDecoration: "none", color: "black" }}
            to="ac-service-repair"
          >
            <ServiceSmallCard key={i} name={service.name} img={service.img} />
          </Link>
        ))}
      </Container>
      <ImgCardContainer>
        <StyledCarousel breakPoints={breakPoints}>
          {packages.map((item, i) => (
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              style={{ background: "none", border: "none", padding: "10px" }}
            >
              <ServiceImgCard
                as={motion.div}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                {...item}
              />
            </motion.button>
          ))}
        </StyledCarousel>
      </ImgCardContainer>
      <Separator margin={true} />
      <BigCard img="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_2880/t_high_res_template/images/growth/home-screen/1618376960342-f0afcb.jpeg" />
      <Separator style={{ marginBottom: 30 }} />
      <OfferSection
        text="Best Offers"
        subHeading={"Hygienic &single-usproducts | low-contact services"}
        cardDetails={offers}
      />
      <Separator margin={true} />
      <OfferSection
        text="Cleaning & Pest Control"
        subHeading={"Removes hard stains & more"}
        cardDetails={cleaning}
      />
      <Separator margin={true} />
      <OfferSection
        text="Appliances"
        subHeading={"Service, Repair, Installation & Uninstallation"}
        cardDetails={appliances}
      />
      <Separator margin={true} />
      <OfferSection
        text="Gift an Experience"
        subHeading={
          "Gift your love ones an amazing UC experience which they will remember"
        }
        cardDetails={giftImg}
      />
      <Separator margin={true} />
      <OfferSection
        text="Customer Safety is our priority"
        subHeading={"What customer are saying about our safety standards    "}
        cardDetails={tweets}
      />
      <Separator style={{ marginTop: 30 }} />
      <BigCard img="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_2159/t_high_res_template/images/growth/luminosity/1614591609525-df202d.jpeg" />
      <Separator />
      <BigCard img="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_2159/t_high_res_template/categories/category_v2/category_a4e46fa0.png" />

      <Separator />
      <BigCard img="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_2159/t_high_res_template/categories/category_v2/category_3cffdf20.png" />
      <Separator style={{ marginBottom: 30 }} />
      <TwoCard />
      <LoginFormModal showModal={showModal} setShowModal={setShowModal} />
    </div>
  );
}
