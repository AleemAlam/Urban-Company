import React from "react";
import {
  AddButton,
  CartModel,
  FrequntlyAdded,
  FrequntlyAddedProduct,
  ItemsInCart,
} from "../../StyledComponents/Modal";

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
            <h4>Window AC Check-up</h4>
            <ul>
              <li>
                More than 7L Men trust us with their haircut | No mess left
                behind after the service
              </li>
              <li>
                Enjoy a hassle free experience by saving your preferred haircut
                with us
              </li>
            </ul>
            <p>₹000</p>
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
        </ItemsInCart>

        <div className="bottomBorder"></div>

        <FrequntlyAdded>
          <h3>Frequently added together</h3>
          <div className="suggetions">
            <FrequntlyAddedProduct>
              <img
                src="https://res.cloudinary.com/urbanclap/image/upload//t_medium_res_category//categories/category_v2/category_f7d85a20.jpeg"
                alt=""
              />
              <p>Head Massage Head Massage</p>
              <p style={{ fontWeight: "500", marginTop: "15px" }}>₹000</p>
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
            <p>₹000</p>
          </div>
          <div>
            <p>Safety & Partner Welfare Fees</p>
            <p>₹00</p>
          </div>
          <img
            src="https://res.cloudinary.com/urbanclap/image/upload/t_high_res_portfolio_new,q_auto:low,f_auto/images/growth/luminosity/1619510980301-e7891f.png"
            alt=""
          />
          <div>
            <p style={{ fontWeight: "500", color: "#212121" }}>Total</p>
            <p style={{ fontWeight: "500", color: "#212121" }}>₹000</p>
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
          <button onClick={handlePay}>No, I will pay ₹000</button>
          <button>View UC Plus Membership</button>
        </div>
      </div>
    </CartModel>
  );
}
