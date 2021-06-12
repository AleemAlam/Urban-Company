import React from "react";
import { StyledFooter } from "../StyledComponents/HomePageStyledComponents";
import SubHeading from "./SubHeading";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import YouTubeIcon from "@material-ui/icons/YouTube";
import PinterestIcon from "@material-ui/icons/Pinterest";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

const footerLinks = [
  {
    name: "About Us",
  },
  {
    name: "Terms & conditions",
  },
  {
    name: "Privacy Policy",
  },
  {
    name: "Anti Discrimination Policy",
  },
  {
    name: "Blog",
  },
  {
    name: "Reviews",
  },
  {
    name: "Careers",
  },
  {
    name: "Gift Cards",
  },
  {
    name: "Contact Us",
  },
];
const servingPlaces = [
  { country: "AUS", city: ["Sydney", "Melbourne"] },
  {
    country: "IND",
    city: [
      "Arunachal Pradesh",
      "Arunachal Pradesh",
      "Assam",
      "Bihar",
      "Chhattisgarh",
      "Goa",
      "Gujarat",
      "Haryana",
      "Himachal Pradesh",
      "Jammu and Kashmir",
      "Jharkhand",
      "Karnataka",
      "Kerala",
      "Madhya Pradesh",
      "Maharashtra",
      "Manipur",
      "Meghalaya",
      "Mizoram",
      "Nagaland",
      "Odisha",
      "Punjab",
      "Rajasthan",
      "Sikkim",
      "Tamil Nadu",
      "Telangana",
      "Tripura",
      "Uttar Pradesh",
      "Uttarakhand",
      "West Bengal",
      "Andaman and Nicobar Islands",
      "Chandigarh",
      "Dadra and Nagar Haveli",
      "Daman and Diu",
      "Lakshadweep",
      "Delhi",
      "Puducherry",
    ],
  },
  { country: "KSA", city: ["Riyadh"] },
  { country: "SGP", city: ["Singapore"] },
  { country: "UAE", city: ["Dubai", "Abu Dubai", "Sharjah"] },
];
export default function MyFooter() {
  return (
    <StyledFooter>
      <div className="container">
        <div className="linkMenu">
          {footerLinks.map((link) => (
            <p className="link">{link.name}</p>
          ))}
        </div>
        <hr />
        <SubHeading style={{ color: "white" }} text="Serving In" />
        {servingPlaces.map((place) => (
          <div>
            <p className="country">{place.country}</p>
            <div className="city">
              {place.city.map((city) => (
                <span>{city}</span>
              ))}
            </div>
          </div>
        ))}
        <hr />
        <div className="copyRightContainer">
          <div className="copyRight">
            <img
              src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep/t_high_res_template,q_auto:low,f_auto/categories/category_v2/category_425cd8c0.png"
              alt=""
            />
            <span>© 2014-20 UrbanClap Technologies India Pvt. Ltd.</span>
          </div>
          <div className="iconContainer">
            <FacebookIcon />
            <TwitterIcon />
            <InstagramIcon />
            <YouTubeIcon />
            <PinterestIcon />
            <LinkedInIcon />
          </div>
        </div>
      </div>
    </StyledFooter>
  );
}
