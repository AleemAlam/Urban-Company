import React, { useState } from "react";
import { useHistory } from "react-router";
import { MakePayment } from "../../StyledComponents/Modal";
import { PayUsingDetails } from "./MiniComponents";

export default function Payment({ setSelectTime, setPayment }) {
  const [selectPayment, setSelectPayment] = useState(false);

  const history = useHistory();

  const payUsing = [
    {
      img: "https://img.icons8.com/dotty/80/000000/wallet-app.png",
      type: "UPI",
      arrow1: "&#8744;",
      arrow2: "^",
    },
    {
      img: "https://img.icons8.com/dotty/80/000000/bank-card-back-side.png",
      type: "Credit/Debit Cards",
      arrow1: "&#8744;",
      arrow2: "^",
    },
    {
      img: "https://img.icons8.com/dotty/80/000000/wallet-app.png",
      type: "Wallet",
      arrow1: "&#8744;",
      arrow2: "^",
    },

    {
      img: "https://img.icons8.com/ios/50/000000/transaction-approved.png",
      type: "Netbanking",
      arrow1: "&#8744;",
      arrow2: "^",
    },
    {
      img: "https://img.icons8.com/cotton/64/000000/pay.png",
      type: "Pay after Service",
      arrow1: "&#8744;",
      arrow2: "^",
    },
  ];

  const handleMove = () => {
    if (selectPayment) {
      setPayment(false);
      alert("Congratulations Your service has been booked successfully");
      history.push("/ac-service-repair");
    } else {
      alert("Please select the payment method");
    }
  };

  const price = 399;
  const SafteyFee = 49;
  return (
    <MakePayment>
      <div className="header">
        <p
          onClick={() => {
            setSelectTime(true);
            setPayment(false);
          }}
        >
          &#129120;
        </p>
        <p>AC Service and Repair</p>
        <p onClick={() => setPayment(false)}>✖</p>
      </div>
      <div className="containt">
        {/* PAYMENT MAKING METHOD ^ */}
        <div className="paymentType">
          <h3>Pay Using</h3>
          {payUsing.map((e) => (
            <PayUsingDetails e={e} setSelectPayment={setSelectPayment} />
          ))}
        </div>

        {/* PAYMENT SUMMARY */}
        <div className="paymentSummary">
          <h3>Payment Summary</h3>
          <div className="priceDatails">
            <div>
              <p>Service total</p>
              <p>₹ {price}</p>
            </div>

            <div>
              <p>Service Amount Payable</p>
              <p>₹ {price}</p>
            </div>

            <div>
              <p>Safety & Partner Welfare Fees</p>
              <p>₹ {SafteyFee}</p>
            </div>

            <div>
              <h3>Total Service Amount</h3>
              <h3>₹ {price + SafteyFee}</h3>
            </div>

            <div style={{ borderBottom: "none", marginTop: "10px" }}>
              <h3>Amount Payable</h3>
              <h3>₹ {price + SafteyFee}</h3>
            </div>
          </div>

          <div className="insurance">
            <h3>Rs. 10000 insurance on online payment</h3>
            <p>ⓘ</p>
          </div>
          <p className="conditions">
            By proceeding you accept the latest versions of our
            <a href="#T&Cs">T&Cs</a>{" "}
            <a href="#Privacy Policy">Privacy Policy</a> and{" "}
            <a href="#Cancellation Policy">Cancellation Policy</a>
          </p>
        </div>
      </div>
      <div className="buttondiv">
        <button
          className="oldbtn"
          style={{ background: `${selectPayment ? "#4caf50" : "#d4d4d4"}` }}
          onClick={handleMove}
        >
          {" "}
          {selectPayment ? "Place Request" : "Continue"}
        </button>
      </div>
    </MakePayment>
  );
}
