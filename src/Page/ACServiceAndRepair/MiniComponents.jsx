import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AddToCart } from "../../Redux/app/action";
import {
  AddButton,
  Date,
  PayUsingDetail,
  Timing,
} from "../../StyledComponents/Modal";
import { saveData } from "../../utils/Storage";
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
    dispatch(AddToCart(data));
    saveData("count", count);
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
