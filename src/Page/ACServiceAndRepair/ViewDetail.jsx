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
            <p onClick={() => setShowDetails(false)}>✖</p>
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
              <h3>Split AC Regular Service</h3>
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
            <h2
              style={{
                marginLeft: "7.5%",
                fontWeight: "700",
                fontSize: "18px",
              }}
            >
              Know more about AC Servicing
            </h2>
            <div className="servicesIncluded">
              <img
                src="https://res.cloudinary.com/urbanclap/image/upload/t_medium_res_template,q_auto:low,f_auto/images/growth/home-screen/1621322855950-9b5a1d.jpeg"
                alt=""
              />
              <div>
                <p style={{ fontWeight: "600", color: "#212121" }}>
                  What is included
                </p>
                <p
                  style={{
                    marginTop: "-15px",
                    color: "#757575",
                    fontWeight: "400",
                    fontSize: "13px",
                  }}
                >
                  Disposable towel, cape, and single-use peoducts
                </p>
              </div>
            </div>
          </div>
          <div className="servicesIncluded">
            <div>
              <p style={{ fontWeight: "600", color: "#212121" }}>
                100% Mess Free experience
              </p>
              <p
                style={{
                  marginTop: "-15px",
                  color: "#757575",
                  fontWeight: "400",
                  fontSize: "13px",
                }}
              >
                Post service cleanup guaranteed with no hair left behind on the
                floor
              </p>
            </div>
            <img
              src="https://res.cloudinary.com/urbanclap/image/upload/t_medium_res_template,q_auto:low,f_auto/images/growth/luminosity/1599584111284-d0f1fb.jpeg"
              alt=""
            />
          </div>

          {/* this part is not required here */}
          {/* <div className="favoriteLook">
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
          </div> */}

          <img
            style={{ width: "90%", margin: "30px 5% 0" }}
            src="https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/images/growth/luminosity/1598252612847-eac8c8.png"
            alt=""
          />

          {/* Here UC promise is using for Leading brands */}
          <UCPromise>
            <h2>All Leading Brands Repaired</h2>
            <img
              src="https://res.cloudinary.com/urbanclap/image/upload/t_medium_res_template,q_auto:low,f_auto/images/growth/home-screen/1613992518048-dc8cbf.png"
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

            <img
              style={{ width: "90%", height: "50%", margin: "30px 5%" }}
              src="https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/images/growth/luminosity/1598253862063-8f18ae.png"
              alt=""
            />

            <img
              src="https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/images/growth/luminosity/1613668941534-fbd808.png"
              alt=""
            />

            {/* below div is required in men's salon */}
            {/* <div className="whyServices">
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
            </div> */}
          </UCPromise>

          <FrequentlyAskedQue>
            <h2>Frequently asked questions</h2>
            <div className="question">
              <div
                style={{ display: "flex", justifyContent: "space-between" }}
                onClick={() => setFaq(!faq)}
              >
                <p>How long will it take to repair my appliance?</p>
                <p>{faq ? "❮" : "❯"}</p>
              </div>
              {faq ? (
                <p
                  style={{
                    marginTop: "-5px",
                    fontSize: "14px",
                    color: "#757575",
                    fontWeight: "400",
                    lineHeight: "1.5",
                  }}
                >
                  Repair time depends on factors such as cause of the issue &
                  availability of spare parts. Our professionals will ensure it
                  is repaired in the shortest time possible.
                </p>
              ) : null}
            </div>

            <div className="question">
              <div
                style={{ display: "flex", justifyContent: "space-between" }}
                onClick={() => setFaq(!faq)}
              >
                <p>Will I have to provide anything?</p>
                <p>{faq ? "❮" : "❯"}</p>
              </div>
              {faq ? (
                <p
                  style={{
                    marginTop: "-5px",
                    fontSize: "14px",
                    color: "#757575",
                    fontWeight: "400",
                    lineHeight: "1.5",
                  }}
                >
                  Our professionals carry all required tools with them. However
                  you do have to ensure that your electricity connection is
                  working.
                </p>
              ) : null}
            </div>

            <div className="question">
              <div
                style={{ display: "flex", justifyContent: "space-between" }}
                onClick={() => setFaq(!faq)}
              >
                <p>What if the same issue occurs again?</p>
                <p>{faq ? "❮" : "❯"}</p>
              </div>
              {faq ? (
                <p
                  style={{
                    marginTop: "-5px",
                    fontSize: "14px",
                    color: "#757575",
                    fontWeight: "400",
                    lineHeight: "1.5",
                  }}
                >
                  Incase the same issue occurs again, we'll be happy to revisit.
                  Please check out our UC warranty section to know more.
                </p>
              ) : null}
            </div>

            <div className="question">
              <div
                style={{ display: "flex", justifyContent: "space-between" }}
                onClick={() => setFaq(!faq)}
              >
                <p>How can I be sure that genuine products are being used?</p>
                <p>{faq ? "❮" : "❯"}</p>
              </div>
              {faq ? (
                <p
                  style={{
                    marginTop: "-5px",
                    fontSize: "14px",
                    color: "#757575",
                    fontWeight: "400",
                    lineHeight: "1.5",
                  }}
                >
                  We value your trust in Urban Company and hence we ensure all
                  spare parts meet our high quality standards. Please check our
                  rate card for more details.
                </p>
              ) : null}
            </div>

            <div className="question">
              <div
                style={{ display: "flex", justifyContent: "space-between" }}
                onClick={() => setFaq(!faq)}
              >
                <p>What if my appliance gets damaged during the repair?</p>
                <p>{faq ? "❮" : "❯"}</p>
              </div>
              {faq ? (
                <p
                  style={{
                    marginTop: "-5px",
                    fontSize: "14px",
                    color: "#757575",
                    fontWeight: "400",
                    lineHeight: "1.5",
                  }}
                >
                  Although this is highly unlikely, in the rare case that this
                  might happen, your appliance will be covered under our Damage
                  Protection Plan. Please check out UC Warranty section to know
                  more.
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
                    <span> </span> 4.95
                  </h2>
                  <p>EXCELLENT</p>
                </div>
              </div>
            </div>
            <div className="ratingGraph">
              <div className="ratingGraph1">
                <p>Excellent(91.8%)</p>
                <p>Good(5.2%)</p>
                <p>Worst(1.3%)</p>
                <p>Average(1.2%)</p>
                <p>Poor(0.5%)</p>
              </div>
              <div className="ratingGraph2">
                <div style={{ background: "#228D27", width: "91.8%" }}></div>
                <div style={{ background: "#228D27", width: "5.2%" }}></div>
                <div style={{ background: "#DD0017", width: "1.3%" }}></div>
                <div style={{ background: "#ff9800", width: "1.2%" }}></div>
                <div style={{ background: "#dd0017", width: "0.5%" }}></div>
              </div>
            </div>
            {/* below image is used in men's salon */}
            {/* <img
              src="https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_30/categories/category_v2/category_bc376c70.png"
              alt=""
            /> */}
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
                  <h3 style={{ color: "#333", fontWeight: "500" }}>
                    Manisha Thakur
                  </h3>
                  <p
                    style={{
                      marginTop: "-18px",
                      color: "#888",
                      fontSize: "14px",
                    }}
                  >
                    New Delhi, 14th Jun, 2021
                  </p>
                  <p
                    style={{
                      fontWeight: "480",
                      fontSize: "18px",
                      marginTop: "-8px",
                      color: "#424242",
                    }}
                  >
                    Absolutely awesome work done.. very descent.well behaved...
                    overall excellent work.
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
                  <h3 style={{ color: "#333", fontWeight: "500" }}>
                    balraj gill
                  </h3>
                  <p
                    style={{
                      marginTop: "-18px",
                      color: "#888",
                      fontSize: "14px",
                    }}
                  >
                    New Delhi, 14th Jun, 2021
                  </p>
                  <p
                    style={{
                      fontWeight: "480",
                      fontSize: "18px",
                      marginTop: "-8px",
                      color: "#424242",
                    }}
                  >
                    V honest and hardworking technician
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
                    src="https://lh6.googleusercontent.com/-hSL3JBY1taE/AAAAAAAAAAI/AAAAAAAAJa8/3k-zwv9pjcQ/s96-c/photo.jpg"
                    alt=""
                  />
                </div>

                <div>
                  <h3 style={{ color: "#333", fontWeight: "500" }}>
                    Ramesh Tewari
                  </h3>
                  <p
                    style={{
                      marginTop: "-18px",
                      color: "#888",
                      fontSize: "14px",
                    }}
                  >
                    New Delhi, 14th Jun, 2021
                  </p>
                  <p
                    style={{
                      fontWeight: "480",
                      fontSize: "18px",
                      marginTop: "-8px",
                      color: "#424242",
                    }}
                  >
                    Acche se Prince
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
                    src="https://lh3.googleusercontent.com/-qU2GvZAszb4/AAAAAAAAAAI/AAAAAAAAAAA/n3CgalSyRbM/s64-c/104112222725894170346.jpg"
                    alt=""
                  />
                </div>

                <div>
                  <h3 style={{ color: "#333", fontWeight: "500" }}>
                    Ayush Tulsiyan
                  </h3>
                  <p
                    style={{
                      marginTop: "-18px",
                      color: "#888",
                      fontSize: "14px",
                    }}
                  >
                    New Delhi, 14th Jun, 2021
                  </p>
                  <p
                    style={{
                      fontWeight: "480",
                      fontSize: "18px",
                      marginTop: "-8px",
                      color: "#424242",
                    }}
                  >
                    very good behavior and was on time
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
