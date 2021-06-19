import React from "react";
import {
  AddButton,
  CartModel,
  FrequntlyAdded,
  FrequntlyAddedProduct,
  ItemsInCart,
} from "../../StyledComponents/Modal";
import { AddButtons } from "./MiniComponents";

export default function Cart({
  count,
  setCount,
  handleCount,
  setSefty,
  setMoveLocation,
  setSafteyAgree,
}) {
  const handlePay = () => {
    setMoveLocation(true);
    setSafteyAgree(false);
  };
  return (
    <CartModel>
      <div className="header">
        <p
          onClick={() => {
            setSafteyAgree(false);
            setSefty(true);
          }}
        >
          &#129120;
        </p>
        <p>AC Service and Repair</p>
        <p onClick={() => setSafteyAgree(false)}>✖</p>
      </div>
      <div className="cart">
        <ItemsInCart className="cartItem">
          <div>
            <h4>Split AC service</h4>
            <ul>
              <li>Offer is valid on same booking and same place</li>
              <li>Recommended if your last service was done a year ago</li>
              <li>Our Powerjet AC Servicing ensures 2X faster cooling</li>
            </ul>
            <p>₹599</p>
          </div>

          <AddButton className="button">
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
          {/* <AddButtons /> */}
        </ItemsInCart>

        <div className="bottomBorder"></div>

        <FrequntlyAdded>
          <h3>Frequently added together</h3>
          <div className="suggetions">
            <FrequntlyAddedProduct>
              <img
                src="https://res.cloudinary.com/urbanclap/image/upload//t_medium_res_category//images/growth/luminosity/1616302301647-bb9cc7.png"
                alt=""
              />
              <p>Window AC Service</p>
              <p style={{ fontWeight: "500", margin: "15px 0" }}>₹599</p>
              <AddButtons />
            </FrequntlyAddedProduct>

            <FrequntlyAddedProduct>
              <img
                src="https://res.cloudinary.com/urbanclap/image/upload//t_medium_res_category//images/growth/luminosity/1607329286904-14e1ed.png"
                alt=""
              />
              <p>Split AC Regular Service</p>
              <p style={{ fontWeight: "500", margin: "15px 0" }}>₹499</p>
              <AddButtons />
            </FrequntlyAddedProduct>

            <FrequntlyAddedProduct>
              <img
                src="https://res.cloudinary.com/urbanclap/image/upload//t_medium_res_category//images/growth/luminosity/1614838761970-2b74d2.jpeg"
                alt=""
              />
              <p>Split AC Check-up</p>
              <p style={{ fontWeight: "500", margin: "15px 0" }}>₹299</p>
              <AddButtons />
            </FrequntlyAddedProduct>

            <FrequntlyAddedProduct>
              <img
                src="https://res.cloudinary.com/urbanclap/image/upload//t_medium_res_category//images/growth/luminosity/1616302177347-716140.png"
                alt=""
              />
              <p>Split AC Installation</p>
              <p style={{ fontWeight: "500", margin: "15px 0" }}>₹1499</p>
              <AddButtons />
            </FrequntlyAddedProduct>
          </div>
        </FrequntlyAdded>

        <div className="bottomBorder"></div>

        <div className="offer">
          <div>
            <div className="promo">
              <div>
                <p
                  style={{
                    border: "1px solid",
                    padding: "4px",
                    borderRadius: "50%",
                  }}
                >
                  ％
                </p>
              </div>
              <div>
                <p style={{ fontWeight: "480", color: "#212121" }}>
                  Offer, promo code and gift cards
                </p>
                <p
                  style={{
                    fontSize: "14px",
                    marginTop: "-15px",
                    color: "#757575",
                  }}
                >
                  3 offers available
                </p>
              </div>
            </div>
          </div>
          <div>
            <p style={{ fontSize: "20px", color: "#757575" }}>❯</p>
          </div>
        </div>

        <div className="bottomBorder"></div>

        <div className="total">
          <div>
            <p>Item total</p>
            <p>₹599</p>
          </div>
          <div>
            <p>Safety & Partner Welfare Fees</p>
            <p>₹100</p>
          </div>
          <img
            src="https://res.cloudinary.com/urbanclap/image/upload/t_high_res_portfolio_new,q_auto:low,f_auto/images/growth/luminosity/1619510980301-e7891f.png"
            alt=""
          />
          <div>
            <p style={{ fontWeight: "500", color: "#212121" }}>Total</p>
            <p style={{ fontWeight: "500", color: "#212121" }}>₹699</p>
          </div>
        </div>

        <div className="bottomBorder"></div>
      </div>

      <div className="payment">
        <img
          src="https://res.cloudinary.com/urbanclap/image/upload/t_medium_res_portfolio_new,q_auto:low,f_auto/images/growth/home-screen/1600322256932-bce425.png"
          alt=""
        />
        <div>
          <h3>Become a UC Plus Member and get</h3>
          <p>
            10% off on Salon & Men's Haircut ₹100 off on Appliance Repair &
            Cleaning services ₹50 off on Home Repair services
          </p>
        </div>
        <div>
          <button onClick={handlePay}>No, I will pay ₹699</button>
          <button>View UC Plus Membership</button>
        </div>
      </div>
    </CartModel>
  );
}
