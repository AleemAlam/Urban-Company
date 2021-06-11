import React, { useState } from "react";
import styled from "styled-components";

// npm install npm@latest -g
// rm -rf node_modules && npm install
// npm update

const Heading = styled.div`
  width: 100vw;
  height: 75px;
  color: #424242;
  background: #f7f8fa;
  font-size: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
`;

const Container = styled.div`
  width: 100%;
  margin-top: 75px;
  max-height: 90vh;
  position: fixed;
  /* display: grid;
  grid-template-columns: 29vw 35vw 34vw; */
  display: flex;
  justify-content: space-between;
  /* align-items: center; */
`;
const MENU = styled.div`
  width: 29%;

  border-right: 1px solid #dbdbdb;

  button:nth-child(1) {
    margin-top: 30px;
  }
  button {
    display: flex;
    flex-direction: column;
    padding: 10px;
    margin: 20px 30px auto auto;
    border-radius: 5px;
    outline: none;
    border: 1px solid;
    cursor: pointer;
    background: transparent;
  }
`;
const PackageDetails = styled.div`
  width: 35%;
  margin: auto;
  border-right: 1px solid #dbdbdb;
  overflow-y: scroll;
  height: 90vh;
  h1 {
    font-size: 36px;
    margin: 10px 7%;
  }

  .safetyMessage {
    width: 77.5%;
    margin: auto 7%;
    height: auto;
    padding: 20px;
    background: #6598ff;
    display: flex;
    gap: 20px;
    align-items: center;
  }

  .safetyMessage > div:nth-child(2) > h2 {
    color: #ffffff;
  }

  .safetyMessage > div:nth-child(2) > p {
    color: #ffffff;
  }

  .menuData {
    border: 1px solid #dbdbdb;
    margin: 20px 7%;
  }

  .menuData video {
    width: 85%;
    height: 200px;
    margin: 20px 7.5% auto 7.5%;
  }

  .menuDataShortDetails {
    display: flex;
    align-items: center;
    border-bottom: 1px solid #dbdbdb;
    width: 85%;
    margin: 2vh 7.5% auto;
    flex-wrap: wrap;
  }

  .menuDataShortDetails > img {
    width: 90px;
    height: 60px;
    border-radius: 3px;
    margin-right: 10px;
  }

  .menuDataShortDetailsPrice {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 73.5%;
    p {
      margin-top: -15px;
    }
  }

  .addToCartItem {
    color: #6598ff;
    border: 1px solid #6598ff;
    outline: #6598ff;
    padding: 5px 10px;
    font-size: 18px;
    border-radius: 2px;
    background: transparent;
  }

  .EditThisPackageButton {
    padding: 5px;
    margin-left: 7.5%;
    color: #1c8e1c;
    border-radius: 2px;
    outline: #1c8e1c;
    background: transparent;
    border: 1px solid #1c8e1c;
  }

  .viewDetailsModel {
    width: 85%;
    margin-left: 7.5%;
    color: #6598ff;
    cursor: pointer;
    margin: 10px auto 30px auto;
  }
`;
const ViewDetails = styled.div`
  width: 35%;

  margin: auto;
  border-right: 1px solid #dbdbdb;
  overflow-y: scroll;
  height: 90vh;

  .closeDetails {
    display: flex;
  }

  .closeDetails > p {
    background: #c7c9ce;
    width: 30px;
    height: 30px;
    margin-top: 40px;
    margin-left: 0px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 24px;
    color: white;
    cursor: pointer;
  }

  .closeDetails > video {
    width: 85%;
    height: 50vh;
    margin: 5vh 7.5% 5vh 1%;
  }

  .closeDetails > img {
    width: 85%;
    height: 50vh;
    margin: 5vh 7.5% 5vh 1%;
  }

  .menuDataShortDetails {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 85%;
    margin: auto 7.5%;

    p {
      margin-top: -15px;
    }
  }

  .addToCartItem {
    color: #6598ff;
    border: 1px solid #6598ff;
    outline: #6598ff;
    padding: 5px 10px;
    font-size: 18px;
    border-radius: 2px;
    background: transparent;
  }

  .servicesIncluded {
    width: 84%;
    margin: 1vh 7%;
    height: auto;
    padding: 5px;
    display: flex;
    gap: 15px;
    align-items: center;
    border-bottom: 1px solid #dbdbdb;
  }
  .servicesIncluded > img {
    width: 100px;
    height: 100px;
    border-radius: 3px;
  }
  .favoriteLook {
    margin-left: 7.5%;
  }
`;

const UCPromise = styled.div`
  margin: 7vh 7.5% 2vh;

  img {
    width: 100%;
    height: 35vh;
  }

  .PromiseFeature {
    display: flex;
    justify-content: space-evenly;
    margin: 7vh 0 0vh 0;
    align-items: center;
  }

  .PromiseFeature > div {
    width: 33%;
  }

  .PromiseFeature > div > img {
    width: 50px;
    height: 50px;
    margin-left: 30%;
  }

  .PromiseFeature > div > p {
    text-align: center;
  }

  .whyServices {
    p {
      margin-top: --10px;
    }
    div {
      display: flex;
      gap: 10%;

      img {
        width: 100px;
        height: 70px;
      }
    }
  }
`;

const FrequentlyAskedQue = styled.div`
  width: 84%;
  margin: 8vh 7.5%;

  .question {
    border-bottom: 1px solid #dbdbdb;
    div > p {
      font-weight: 480;
      font-size: 18px;
    }
  }
`;

const ReviewPastMonth = styled.div`
  width: 84%;
  margin: 8vh 7.5%;

  img {
    width: 100%;
    height: 35vh;
  }

  .ratingAverage {
    display: flex;
    gap: 30px;
  }

  .overallRating {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    span {
      font-size: 20px;
      color: #1c8e1c;
    }

    h1 {
      margin-top: -15px;
      color: #1c8e1c;
    }

    p {
      margin-top: -10px;
      background: #e5f2e5;
      color: #1c8e1c;
      padding: 5px 10px;
      font-weight: 480;
    }
  }
  .hygieneRating {
    border: 1px solid #dbdbdb;
    border-radius: 3px;
    padding: 0 10px;

    div {
      display: flex;
      gap: 20px;

      span {
        font-size: 14px;
        color: #1c8e1c;
      }
      h2 {
        margin-top: -15px;
        color: #1c8e1c;
      }
    }

    div p {
      margin-top: -10px;
      background: #e5f2e5;
      color: #1c8e1c;
      padding: 5px 10px;
      font-weight: 480;
    }
  }
  .ratingGraph {
    width: 84%;
    margin: 8vh 7.5%;
  }
`;

const MostHelpfulReviews = styled.div`
  width: 84%;
  margin: 8vh 7.5%;

  div {
    display: flex;
    justify-content: space-between;
  }

  .reviewer {
    display: flex;
    gap: 20px;

    div > img {
      width: 60px;
      height: 60px;
      margin-top: 20px;
      border-radius: 50%;
    }
    div {
      display: flex;
      flex-direction: column;
    }
  }
`;

export default function MensHairCutAndGrooming() {
  const [faq, setFaq] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  return (
    <>
      <Heading>Men's Haircut & Grooming</Heading>
      <Container>
        <MENU>
          <button>Pakage Deals</button>
          <button>Make Your Own Package</button>
          <button>Haircut for Men</button>
        </MENU>
        <PackageDetails>
          <h1>Haircut for Men</h1>
          <div className="safetyMessage">
            <div>
              <img width="40px" height="55px" src="" alt="safety" />
            </div>
            <div>
              <h2>100% Hygienic and mess-free services</h2>
              <p>Sanitized equipment, single-use products</p>
            </div>
          </div>
          <div className="menuData">
            <span
              style={{
                marginTop: "5px",
                color: "#ffffff",
                padding: "5px",
                background: "#1c8e1c",
                fontWeight: "bold",
              }}
            >
              BESTSELLER
            </span>

            <video preload="auto" controls="play/stop" autoplay>
              <source
                src="https://www.urbancompany.com/4b6f2fa4-7dcd-4a90-bf57-d5444a9b8736"
                video="web/mp4"
              />
            </video>

            <div className="menuDataShortDetails">
              {/* <img
                src="https://res.cloudinary.com/urbanclap/image/upload/t_medium_res_portfolio_thumb,q_auto:low,f_auto/images/growth/luminosity/1612450053888-a545d8.jpeg"
                alt=""
              /> */}
              {/* <img
                src="https://res.cloudinary.com/urbanclap/image/upload/t_medium_res_portfolio_thumb,q_auto:low,f_auto/images/growth/luminosity/1612450053888-a545d8.jpeg"
                alt=""
              /> */}

              <div className="menuDataShortDetailsPrice">
                <div>
                  <h3>Hair Cut</h3>
                  <p>
                    <span style={{ color: "#1C8E1C", fontWeight: "bolder" }}>
                      ★ 4.76
                    </span>{" "}
                    573k ratings
                  </p>
                  <p>₹249</p>
                  <p>30 min</p>
                </div>
                <div>
                  <button className="addToCartItem">
                    ADD
                    <strong
                      style={{
                        width: "20px",
                        background: "#EFF1FF",
                        marginLeft: "10px",
                      }}
                    >
                      +
                    </strong>
                  </button>
                </div>
              </div>
            </div>
            <div style={{ width: "85%", margin: "15px 7.5% 15px auto" }}>
              <li>
                More than 7L Men trust us with their haircut | No mess left
                behind after the service
              </li>
              <li>
                Enjoy a hassle free experience by saving your preferred haircut
                with us
              </li>
            </div>
            <button className="EditThisPackageButton">
              SAMPLE <span>❯</span>
            </button>
            <div
              className="viewDetailsModel"
              onClick={() => setShowDetails(true)}
            >
              View details <span>❯</span>
            </div>
          </div>
        </PackageDetails>
        <ViewDetails>
          {showDetails ? (
            <>
              <div className="closeDetails">
                <p onClick={() => setShowDetails(false)}>X</p>
                <video preload="auto" controls="play/stop" autoplay>
                  <source
                    src="blob:https://www.urbancompany.com/a615022d-de87-4e2c-9407-f929b35ff885"
                    video="web/mp4"
                  />
                </video>
                {/* <img src="" alt="" /> */}
              </div>

              <div className="menuDataShortDetails">
                <div>
                  <h3>Hair Cut</h3>
                  <p>
                    <span style={{ color: "#1C8E1C", fontWeight: "bolder" }}>
                      ★ 4.76
                    </span>{" "}
                    573k ratings
                  </p>
                  <p>₹249</p>
                  <p>30 min</p>
                </div>
                <div>
                  <button className="addToCartItem">
                    ADD
                    <strong
                      style={{
                        width: "20px",
                        background: "#EFF1FF",
                        marginLeft: "10px",
                      }}
                    >
                      +
                    </strong>
                  </button>
                </div>
              </div>
              <div>
                <h2 style={{ marginLeft: "7.5%" }}>
                  What does this service include?
                </h2>
                <div className="servicesIncluded">
                  <img
                    src="https://res.cloudinary.com/urbanclap/image/upload/t_medium_res_template,q_auto:low,f_auto/images/growth/home-screen/1621322855950-9b5a1d.jpeg"
                    alt=""
                  />
                  <div>
                    <p style={{ fontWeight: "600" }}>
                      Haircut in the Safety of your Home
                    </p>
                    <p style={{ marginTop: "-15px" }}>
                      Disposable towel, cape, and single-use peoducts
                    </p>
                  </div>
                </div>
              </div>
              <div className="servicesIncluded">
                <div>
                  <p style={{ fontWeight: "600" }}>100% Mess Free experience</p>
                  <p style={{ marginTop: "-15px" }}>
                    Post service cleanup guaranteed with no hair left behind on
                    the floor
                  </p>
                </div>
                <img
                  src="https://res.cloudinary.com/urbanclap/image/upload/t_medium_res_template,q_auto:low,f_auto/images/growth/luminosity/1599584111284-d0f1fb.jpeg"
                  alt=""
                />
              </div>
              <div className="favoriteLook">
                <h2>How to Save your Favorite Look with Us?</h2>
                <p>Choose your preferred hairstyle before the booking</p>
                <p>
                  Enjoy a 100% hygienic and mess free haircut within the safety
                  of home
                </p>
                <p>
                  Post the service, save the image of your haircut on our 100%
                  UC SAFE portal
                </p>
                <p>
                  Your Stylist will refer to this image for the next service
                </p>
              </div>

              <UCPromise>
                <h2>UC Promise</h2>
                <img
                  src="https://res.cloudinary.com/urbanclap/image/upload/t_medium_res_template,q_auto:low,f_auto/images/growth/luminosity/1600859033165-2141fa.png"
                  alt=""
                />

                <div className="PromiseFeature">
                  <div className="PromiseImg">
                    <img
                      src="https://res.cloudinary.com/urbanclap/image/upload/t_medium_res_template,q_auto:low,f_auto/images/growth/luminosity/1599822735788-9f61b5.png"
                      alt=""
                    />
                    <p>Disposable cape & towel</p>
                  </div>
                  <div>
                    <img
                      src="https://res.cloudinary.com/urbanclap/image/upload/t_medium_res_template,q_auto:low,f_auto/images/growth/luminosity/1599822733027-05830d.png"
                      alt=""
                    />
                    <p>Sanitised tools</p>
                  </div>
                  <div>
                    <img
                      src="https://res.cloudinary.com/urbanclap/image/upload/t_medium_res_template,q_auto:low,f_auto/images/growth/luminosity/1599822738156-6feb66.png"
                      alt=""
                    />
                    <p>100% Mess Free</p>
                  </div>
                </div>
                <div className="whyServices">
                  <h2>Why get a UC grooming service</h2>
                  <p>
                    <span>💇 </span> Haircut in the Safety of your Home
                  </p>
                  <p>
                    <span>✂ </span> Expert Stylists and Mess Free service
                  </p>
                  <p>
                    More than 7L men trust us for a safe and hygienic haircut
                  </p>
                  <p>
                    Disposable capes to ensure zero mess is left behind post the
                    service
                  </p>
                  <p>
                    Enjoy a hassle free experience by saving your preferred
                    haircut with us.
                  </p>
                  <div>
                    <img
                      src="https://res.cloudinary.com/urbanclap/image/upload/t_medium_res_template,q_auto:low,f_auto/categories/category_v2/category_d01f0750.png"
                      alt=""
                    />
                    <p>
                      For best results, shampoo your hair before you get a
                      haircut
                    </p>
                  </div>
                </div>
              </UCPromise>
              <FrequentlyAskedQue>
                <h2>Frequently asked questions</h2>
                <div className="question">
                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                    onClick={() => setFaq(!faq)}
                  >
                    <p>Will there be mess post service?</p>
                    <p>{faq ? "❮" : "❯"}</p>
                  </div>
                  {faq ? (
                    <p style={{ marginTop: "-5px" }}>
                      Our stylists carry floor sheets to catch the hair that
                      falls on the floor. They perform a thorough cleanup post
                      service to ensure zero mess is left behind.
                    </p>
                  ) : null}
                </div>
              </FrequentlyAskedQue>
              <ReviewPastMonth>
                <h2>Review in the past month</h2>
                <div className="ratingAverage">
                  <div className="overallRating">
                    <h1>
                      <span>★</span> 4.76
                    </h1>
                    <p>EXCELLENT</p>
                  </div>
                  <div className="hygieneRating">
                    <p>HYGIENE RATING ⓘ</p>
                    <div>
                      <h2>
                        <span>ĵ </span> 4.95
                      </h2>
                      <p>EXCELLENT</p>
                    </div>
                  </div>
                </div>
                <div className="ratingGraph">show rating graph</div>
                <img
                  src="https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_30/categories/category_v2/category_bc376c70.png"
                  alt=""
                />
              </ReviewPastMonth>
              <MostHelpfulReviews>
                <h2>Most helpful reviews</h2>
                <div>
                  <div className="reviewer">
                    <div>
                      <img
                        src="https://s3-ap-southeast-1.amazonaws.com/urbanclap-prod/categories/category_v2/category_00a40d80.jpeg"
                        alt=""
                      />
                    </div>

                    <div>
                      <h3>Prajakti Ranjit</h3>
                      <p style={{ marginTop: "-18px" }}>Pune, 8th jun, 2021</p>
                      <p
                        style={{
                          fontWeight: "480",
                          fontSize: "18px",
                          marginTop: "-8px",
                        }}
                      >
                        Excellent service. Thanks.
                      </p>
                    </div>
                  </div>
                  <div>
                    <h3
                      style={{
                        fontSize: "20px",
                        color: "#1c8e1c",
                        width: "51px",
                      }}
                    >
                      ★ 5.0
                    </h3>
                  </div>
                </div>
                {/* {blow div is only for checking, will be removed after backend work} */}
                <div>
                  <div className="reviewer">
                    <div>
                      <img
                        src="https://lh3.googleusercontent.com/--dIcRuOEJgY/AAAAAAAAAAI/AAAAAAAAAAA/ZKqmQAIQa8s/s64-c/106068255399485577478.jpg"
                        alt=""
                      />
                    </div>

                    <div>
                      <h3>Aditya sdfsef</h3>
                      <p style={{ marginTop: "-18px" }}>Pune, 8th jun, 2021</p>
                      <p
                        style={{
                          fontWeight: "480",
                          fontSize: "18px",
                          marginTop: "-8px",
                        }}
                      >
                        Simple and quick haircut! Even during the high bookings,
                        Zahid ensured he gave a quality haircut rather than
                        rushing away. 10/10 would recommend and definitely going
                        to ask for him the next time I book.
                      </p>
                    </div>
                  </div>
                  <div>
                    <h3
                      style={{
                        fontSize: "20px",
                        color: "#1c8e1c",
                        width: "51px",
                      }}
                    >
                      ★ 5.0
                    </h3>
                  </div>
                </div>
              </MostHelpfulReviews>
            </>
          ) : null}
        </ViewDetails>
      </Container>
    </>
  );
}
