import React, { useState } from "react";
import {
  AddButton,
  FrequentlyAskedQue,
  MostHelpfulReviews,
  ReviewPastMonth,
  UCPromise,
  ViewDetails,
} from "../../StyledComponents/Modal";

export default function ViewDetail({
  showDetails,
  setShowDetails,
  count,
  setCount,
  handleCount,
}) {
  const [faq, setFaq] = useState(false);
  return (
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
              <p>
                ₹599 <del>₹699</del>
                <span> ⓘ</span>
              </p>
              <p>45 min</p>
            </div>
            <AddButton>
              {count === 0 ? (
                <button className="addToCartItem" onClick={() => setCount(1)}>
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
              ) : (
                <div className="addedToCartItem">
                  <button onClick={() => handleCount(-1)}>-</button>
                  <button>{count}</button>
                  <button onClick={() => handleCount(1)}>+</button>
                </div>
              )}
            </AddButton>
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
                <p style={{ fontWeight: "600", color: "#b5b5b5" }}>
                  Haircut in the Safety of your Home
                </p>
                <p style={{ marginTop: "-15px", color: "#b5b5b5" }}>
                  Disposable towel, cape, and single-use peoducts
                </p>
              </div>
            </div>
          </div>
          <div className="servicesIncluded">
            <div>
              <p style={{ fontWeight: "600", color: "#b5b5b5" }}>
                100% Mess Free experience
              </p>
              <p style={{ marginTop: "-15px", color: "#b5b5b5" }}>
                Post service cleanup guaranteed with no hair left behind on the
                floor
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
              Enjoy a 100% hygienic and mess free haircut within the safety of
              home
            </p>
            <p>
              Post the service, save the image of your haircut on our 100% UC
              SAFE portal
            </p>
            <p>Your Stylist will refer to this image for the next service</p>
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
              <p>More than 7L men trust us for a safe and hygienic haircut</p>
              <p>
                Disposable capes to ensure zero mess is left behind post the
                service
              </p>
              <p>
                Enjoy a hassle free experience by saving your preferred haircut
                with us.
              </p>
              <div>
                <img
                  src="https://res.cloudinary.com/urbanclap/image/upload/t_medium_res_template,q_auto:low,f_auto/categories/category_v2/category_d01f0750.png"
                  alt=""
                />
                <p>
                  For best results, shampoo your hair before you get a haircut
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
                <p
                  style={{
                    marginTop: "-5px",
                    fontSize: "14px",
                    color: "#a5a5a5",
                  }}
                >
                  Our stylists carry floor sheets to catch the hair that falls
                  on the floor. They perform a thorough cleanup post service to
                  ensure zero mess is left behind.
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
                  <h3 style={{ color: "#424242" }}>Prajakti Ranjit</h3>
                  <p style={{ marginTop: "-18px", color: "#a5a5a5" }}>
                    Pune, 8th jun, 2021
                  </p>
                  <p
                    style={{
                      fontWeight: "480",
                      fontSize: "18px",
                      marginTop: "-8px",
                      color: "#a5a5a5",
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
                  <h3 style={{ color: "#424242" }}>Aditya sdfsef</h3>
                  <p style={{ marginTop: "-18px", color: "#a5a5a5" }}>
                    Pune, 8th jun, 2021
                  </p>
                  <p
                    style={{
                      fontWeight: "480",
                      fontSize: "18px",
                      marginTop: "-8px",
                      color: "#a5a5a5",
                    }}
                  >
                    Simple and quick haircut! Even during the high bookings,
                    Zahid ensured he gave a quality haircut rather than rushing
                    away. 10/10 would recommend and definitely going to ask for
                    him the next time I book.
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
  );
}
