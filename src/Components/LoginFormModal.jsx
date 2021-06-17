import React, { useState } from "react";
import ClearIcon from "@material-ui/icons/Clear";
import styled from "styled-components";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import firebase from "../utils/firebase";
import { useDispatch, useSelector } from "react-redux";
import { userLogin } from "../Redux/auth/action";
import { motion, AnimatePresence } from "framer-motion";
import Loader from "./Loader";
const StyledModal = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 340px;
  height: 100%;
  border: "none";
  background-color: white;
  border-radius: 3px;
  & p {
    margin: 0;
    margin-left: 10px;
  }
  & .head {
    margin: 10px 0px;
    display: flex;
    padding: 10px;
  }
  & .separator {
    height: 0.5px;
    background-color: lightgray;
  }
  & .form {
    margin: 30px 15px;
    border: 1px solid #e8ebe9;
    border-radius: 5px;
  }
  & input {
    border: none;
    padding: 10px;
    outline: none;
    width: 160px;
    font-size: 16px;
    position: relative;
    top: -5px;
  }
  & .labelSep {
    display: inline-block;
    border-right: 1px solid #e8ebe9;
    padding: 15px 5px 15px 15px;
    margin: 0px;
  }
  & button {
    width: 90%;
    color: white;
    padding: 15px;
    margin-left: 20px;
    background-color: #333;
    border: none;
    outline: none;
    border-radius: 3px;
    font-size: 18px;
  }
  & img {
    width: 20px;
    height: 13px;
    margin-right: 10px;
    position: relative;
    top: -5px;
  }
  & span {
    position: relative;
    top: -5px;
  }
  & svg {
    margin: 0;
  }
`;
export default function LoginFormModal({ showModal, setShowModal }) {
  const [number, setNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);
  const [showOtp, setShowOtp] = useState("");
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.auth.isLoading);
  const configCaptcha = () => {
    window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier(
      "sign-in-button",
      {
        size: "invisible",
        callback: (response) => {
          onSignInSubmit();
          console.log("verified");
        },
        defaultCountry: "IN",
      }
    );
  };

  const onSignInSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    const phoneNumber = "+91" + number;
    configCaptcha();
    const appVerifier = window.recaptchaVerifier;
    firebase
      .auth()
      .signInWithPhoneNumber(phoneNumber, appVerifier)
      .then((confirmationResult) => {
        // SMS sent. Prompt user to type the code from the message, then sign the
        // user in with confirmationResult.confirm(code).
        window.confirmationResult = confirmationResult;
        console.log("OTP Send");
        setShowOtp(true);
        setLoading(false);
        // ...
      })
      .catch((error) => {
        // Error; SMS not sent
        console.log("OTP not Send", error);

        // ...
      });
  };

  const handleSignIn = (e) => {
    e.preventDefault();
    dispatch(userLogin(otp, setShowModal));
  };
  console.log(isLoading);

  return (
    showModal && (
      <>
        <AnimatePresence exitBeforeEnter>
          <motion.div
            variants={{ visible: { opacity: 1 }, hidden: { opacity: 1 } }}
            initial="hidden"
            animate="visible"
            transition={{ duration: 1 }}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundColor: "rgba(0,0,0,.7)",
              zIndex: 1,
            }}
          >
            {(loading || isLoading) && <Loader transparent={true} />}
            <StyledModal
              as={motion.div}
              initial={{ x: "50vw" }}
              animate={{ x: 0 }}
              transition={{ type: "none", duration: 0.5, bounce: 0.3 }}
              // style={{
              //   overlay: {
              //     backgroundColor: "rgba(0,0,0,.7)",
              //   },
              // }}
              onRequestClose={() => setShowModal(false)}
            >
              <div className="head">
                <ClearIcon
                  onClick={() => setShowModal(false)}
                  style={{ cursor: "pointer" }}
                />
                <p>Please Login to continue</p>
              </div>
              <div className="separator"></div>
              {showOtp ? (
                <form onSubmit={handleSignIn}>
                  <div className="form">
                    <input
                      type="text"
                      placeholder="Enter OTP"
                      value={otp}
                      style={{ top: 0 }}
                      onChange={(e) => setOtp(e.target.value)}
                    />
                  </div>
                  <button>Submit</button>
                </form>
              ) : (
                <form onSubmit={onSignInSubmit}>
                  <div className="form">
                    <div id="sign-in-button"></div>
                    <div className="innerContainer">
                      <div className="labelSep">
                        <label htmlFor="">
                          <img
                            src="https://www.countryflags.com/wp-content/uploads/india-flag-png-xl.png"
                            alt=""
                          />
                          <span class="flag-icon flag-icon-gr">+91 </span>
                          <ArrowDropDownIcon />
                        </label>
                      </div>
                      <input
                        type="text"
                        placeholder="Your Phone Number"
                        value={number}
                        onChange={(e) => setNumber(e.target.value)}
                      />
                    </div>
                  </div>
                  <button>Continue</button>
                </form>
              )}
            </StyledModal>
          </motion.div>
        </AnimatePresence>
      </>
    )
  );
}
