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
  width: 100vw;
  margin-top: 75px;
  max-height: 90vh;
  display: grid;
  grid-template-columns: 29vw 35vw 34vw;
`;
const MENU = styled.div`
  margin-top: 30px;
  border-right: 1px solid #dbdbdb;
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
  width: 82%;
  margin: auto;
  /* overflow-y: scroll; */
  h1 {
    font-size: 36px;
  }

  .safetyMessage {
    width: 400px;
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
    margin: 20px auto;
  }

  .menuData video {
    width: 370px;
    height: 200px;
    margin: auto 7.5%;
  }

  .menuDataShortDetails {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #dbdbdb;
    width: 85%;
    margin: auto 7.5%;
  }

  .menuDataShortDetails > div > button {
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
const ViewDetails = styled.div``;

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
            <h3
              style={{
                marginTop: "-10px",
                color: "#ffffff",
                padding: "5px",
                background: "#1c8e1c",
              }}
            >
              BESTSELLER
            </h3>

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
                <button>
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
              assdda <span>❯</span>
            </button>
            <div className="viewDetailsModel">
              View details <span>❯</span>
            </div>
          </div>
        </PackageDetails>
        <ViewDetails></ViewDetails>
      </Container>
    </>
  );
}
