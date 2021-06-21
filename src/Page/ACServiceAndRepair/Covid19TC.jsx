import React, { useState } from "react";
import { SafteyCondition } from "../../StyledComponents/Modal";

export default function Covid19TC({ setSefty, setSafteyAgree }) {
  //const [acceptTC, setAcceptTC] = useState(false);

  const handleAgree = () => {
    // if (acceptTC === true) {
    //   setSafteyAgree(true);
    //   setSefty(false);
    // }
    setSafteyAgree(true);
    setSefty(false);
  };
  return (
    <SafteyCondition>
      <div className="header">
        <p onClick={() => setSefty(false)}>&#129120;</p>
        <p>AC Service and Repair</p>
        <p
          onClick={() => {
            setSefty(false);
            localStorage.removeItem("cart");
          }}
        >
          ✖
        </p>
      </div>

      {/* This below div is used for Men's hair and salon */}
      {/* <div>
        <div className="safteyNote">
          <p>I am safe and healthy</p>
          <p>
            COVID-19 Self-Declaration: Your honest response will ensure your
            safety and that of our professionals. Help control the spread of
            COVID-19
          </p>
        </div>
        <div className="condition">
          <input
            onChange={() => setAcceptTC(true)}
            type="radio"
            value="radio"
          />{" "}
          <strong>Click here to agree</strong>
          <ul>
            <li>
              I am not suffering from flu-like symptoms: Fever, Cough,
              Breathlessness, Sore throat etc.
            </li>
            <li>
              I have not traveled domestically or internationally in last 14
              days
            </li>
            <li>
              I have not come in contact with any COVID-19 case in last 14 days
            </li>
            <li>
              I understand that while, Urban Company is taking all necessary
              safety & hygiene precautions, it cannot be held liable in the
              unfortunate event that a customer or professional is diagnosed
              with COVID-19
            </li>
          </ul>
        </div>

        <div className="buttonDiv">
          <button onClick={handleAgree}>I agree</button>
        </div>
      </div> */}

      <div className="AC-Safety">
        <p>Safety Guidelines</p>
        <img
          src="https://s3-ap-southeast-1.amazonaws.com/urbanclap-prod/images/growth/home-screen/1615376961748-38b39f.png"
          alt=""
        />
      </div>
      <div className="buttonDiv">
        <button onClick={handleAgree}>Next</button>
      </div>
    </SafteyCondition>
  );
}
