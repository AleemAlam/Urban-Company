import React from "react";
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
  justify-content: space-around;
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
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #dbdbdb;
    width: 85%;
    margin: auto 7.5%;
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

  video {
    width: 85%;
    height: 50vh;
    margin: 5vh 7.5%;
  }

  .menuDataShortDetails {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 85%;
    margin: auto 7.5%;
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
    margin: auto 7%;
    height: auto;
    padding: 5px;
    display: flex;
    gap: 15px;
    align-items: center;
  }
  .servicesIncluded > img {
    width: 100px;
    height: 100px;
    border-radius: 3px;
  }
`;

export default function MensHairCutAndGrooming() {
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
              <h2>100% Hygienic and mess-free servicce</h2>
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
            <div className="viewDetailsModel">
              View details <span>❯</span>
            </div>
          </div>
        </PackageDetails>
        <ViewDetails>
          <video preload="auto" controls="play/stop" autoplay>
            <source
              src="blob:https://www.urbancompany.com/a615022d-de87-4e2c-9407-f929b35ff885"
              video="web/mp4"
            />
          </video>
          <img src="" alt="" />
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
                <p>Disposable towel, cape, and single-use peoducts</p>
              </div>
            </div>
          </div>
        </ViewDetails>
      </Container>
    </>
  );
}
