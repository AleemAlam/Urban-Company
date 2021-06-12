import React, { useState } from "react";
import {
  AddButton,
  PackageDetails,
} from "../../StyledComponents/MensHaircutAndGrooming";

export default function PackageDetail({
  setShowDetails,
  count,
  setCount,
  handleCount,
}) {
  // const [cartBtn, setCartBtn] = useState(0);

  return (
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
        </div>
        <div style={{ width: "85%", margin: "15px 7.5% 15px auto" }}>
          <li>
            More than 7L Men trust us with their haircut | No mess left behind
            after the service
          </li>
          <li>
            Enjoy a hassle free experience by saving your preferred haircut with
            us
          </li>
        </div>
        <button className="EditThisPackageButton">
          SAMPLE <span>❯</span>
        </button>
        <div className="viewDetailsModel" onClick={() => setShowDetails(true)}>
          View details <span>❯</span>
        </div>
      </div>
    </PackageDetails>
  );
}
