import React from "react";
import { AddButton, PackageDetails } from "../../StyledComponents/Modal";

export default function PackageDetail({
  setShowDetails,
  count,
  setCount,
  handleCount,
}) {
  return (
    <PackageDetails>
      <h2>Service</h2>

      {/* safetyMessage optional with image */}
      {/* <div className="safetyMessage">
        <div>
          <img width="40px" height="55px" src="" alt="safety" />
        </div>
        <div>
          <h2>100% Hygienic and mess-free services</h2>
          <p>Sanitized equipment, single-use products</p>
        </div>
      </div> */}

      {/* service component block */}
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

        {/* Availables video or Image only */}
        <video preload="auto" controls="play/stop" autoplay>
          <source
            src="https://www.urbancompany.com/4b6f2fa4-7dcd-4a90-bf57-d5444a9b8736"
            video="web/mp4"
          />
        </video>

        <img src="" alt="" />

        {/* below images will show optional */}
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
              <h3>Split AC Service</h3>
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
        </div>
        <div style={{ width: "85%", margin: "15px 7.5% 15px auto" }}>
          <li style={{ color: "#b5b5b5" }}>
            More than 7L Men trust us with their haircut No mess left behind
            after the service
          </li>
          <li style={{ color: "#b5b5b5" }}>
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
