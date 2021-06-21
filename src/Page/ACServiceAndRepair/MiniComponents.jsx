import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AddToCart } from "../../Redux/app/action";
import {
  AddButton,
  Date,
  ItemsInCart,
  PayUsingDetail,
  Timing,
} from "../../StyledComponents/Modal";

import { BsChevronDown } from "react-icons/bs";
import { BsChevronUp } from "react-icons/bs";

export function AddButtons({ data }) {
  const [count, setCount] = useState(0);

  const handleCount = (num) => {
    setCount(count + num);
  };

  const dispatch = useDispatch();
  const cart = useSelector((state) => state.app.cart);

  console.log(cart);

  const handleToStorage = () => {
    // saveData("cart", data);
    dispatch(AddToCart({ ...data, qty: count }));
    // saveData("count", count);
  };
  return (
    <AddButton>
      {count === 0 ? (
        <button
          className="addToCartItem"
          onClick={() => {
            setCount(1);
            handleToStorage();
          }}
        >
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
  );
}

export function TimingComponent({ e }) {
  const [selectTiming, setSelectTiming] = useState(false);

  const handleSelectTiming = () => {
    setSelectTiming(!selectTiming);
  };
  return (
    <Timing
      onClick={handleSelectTiming}
      style={{
        border: `${selectTiming ? "1px solid black" : "1px solid #dbdbdb"}`,
      }}
    >
      <p>{e}</p>
    </Timing>
  );
}

export default function DateComponent({ e }) {
  const [selectDate, setSelectDate] = useState(false);

  const handleSelectDate = () => {
    setSelectDate(!selectDate);
  };
  return (
    <Date
      onClick={handleSelectDate}
      style={{
        border: `${selectDate ? "1px solid black" : "1px solid #dbdbdb"}`,
      }}
    >
      <p>{e.day}</p>
      <h2>{e.date}</h2>
    </Date>
  );
}

export function PayUsingDetails({ e, setSelectPayment }) {
  const [details, setDetails] = useState(false);
  return (
    <>
      <PayUsingDetail onClick={() => setDetails(!details)}>
        <img
          style={{ marginLeft: "20px", width: "30px", height: "30px" }}
          src={e.img}
          alt=""
        />
        <h3 style={{ width: "75%" }}>{e.type}</h3>
        <p style={{ marginRight: "20px", fontSize: "20px", color: "#757575" }}>
          {details ? <BsChevronUp /> : <BsChevronDown />}
        </p>
      </PayUsingDetail>
      <div>
        {details ? (
          <div className="details">
            <div
              style={{
                display: "flex",
                justifContent: "space-between",
                alignItems: "center",
                width: "100%",
                height: "80px",
                boxShadow: "0px 1px 1px 0px grey",
                margin: "5px",
                borderRadius: "5px",
              }}
            >
              <p style={{ width: "90%", marginLeft: "20px", fontSize: "18px" }}>
                Pay online after service
              </p>
              <input
                onChange={() => setSelectPayment(true)}
                style={{ marginRight: "20px" }}
                type="radio"
                value="pay"
                name="cash"
              />
            </div>
            <div
              style={{
                display: "flex",
                justifContent: "space-between",
                alignItems: "center",
                width: "100%",
                height: "80px",
                boxShadow: "0px 1px 1px 0px grey",
                margin: "5px",
                borderRadius: "5px",
              }}
            >
              <p style={{ width: "90%", marginLeft: "20px", fontSize: "18px" }}>
                Pay with cash
              </p>
              <input
                onChange={() => setSelectPayment(true)}
                style={{ marginRight: "20px" }}
                type="radio"
                value="pay"
                name="cash"
              />
            </div>
          </div>
        ) : null}
      </div>
    </>
  );
}

export function ServicesInCart({ e, count = 1, setCount, handleCount }) {
  // const cart = useSelector((state) => state.app.cart);

  return (
    <ItemsInCart className="cartItem">
      <div>
        <h4>{e.name}</h4>
        <ul>
          {e.offer.map((el, ind) => {
            return <li key={ind}>{el}</li>;
          })}
        </ul>
        <p>₹ {e.price}</p>
      </div>

      <AddButton className="button">
        {/* {count === 0 ? (
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
        )} */}

        <div className="addedToCartItem">
          <button onClick={() => handleCount(-1)}>-</button>
          <button>{1}</button>
          <button onClick={() => handleCount(1)}>+</button>
        </div>
      </AddButton>
      {/* <AddButtons /> */}
    </ItemsInCart>
  );
}

export function FAQComponents({ question, answer }) {
  const [faq, setFaq] = useState(false);

  return (
    <div className="question">
      <div
        style={{ display: "flex", justifyContent: "space-between" }}
        onClick={() => setFaq(!faq)}
      >
        <p>{question}</p>
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
          {answer}
        </p>
      ) : null}
    </div>
  );
}
