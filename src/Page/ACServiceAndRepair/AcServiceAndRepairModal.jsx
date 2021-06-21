import React, { useState } from "react";
import { Container, Heading, CartNote } from "../../StyledComponents/Modal";
import Cart from "./Cart";
import Covid19TC from "./Covid19TC";
import Menu from "./Menu";
import PackageDetail from "./PackageDetail";
import ViewDetail from "./ViewDetail";
import MoveLocation from "./MoveLocation";
import SelectLocation from "./SelectLocation";
import SelectTime from "./SelectTime";
import Payment from "./Payment";

import { useHistory } from "react-router";
import { useSelector } from "react-redux";

// import axios from "axios";
// import { useEffect } from "react";

// npm install npm@latest -g
// rm -rf node_modules && npm install
// npm update

export default function AcServiceAndRepairModal() {
  const [showDetails, setShowDetails] = useState(false);

  const [count, setCount] = useState(0);
  const [safty, setSafty] = useState(false);
  const [safteyAgree, setSafteyAgree] = useState(false);
  const [moveLocation, setMoveLocation] = useState(false);
  const [selectLocation, setSelectLocation] = useState(false);
  const [selectTime, setSelectTime] = useState(false);
  const [payment, setPayment] = useState(false);

  const history = useHistory();

  const [userLocation, setUserLocation] = useState({
    longitude: "",
    latitude: "",
  });

  const handleCount = (num) => {
    setCount(count + num);
  };

  const handleUserLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(getCoordinates);
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  };

  const getCoordinates = (position) => {
    const { longitude, latitude } = position.coords;
    setUserLocation({ longitude, latitude });
    // axios
    //   .get(
    //     `https://apis.mapmyindia.com/advancedmaps/v1/6hm1qanekr738vwho6stcqgyo47wrt4w/rev_geocode?lat=${latitude}&lng=${longitude}`
    //   )
    //   .then((res) => {
    //     setAddress(res.data.results[0]);
    //   })
    //   .catch(console.error);
  };
  console.log(userLocation);

  const cart = useSelector((state) => state.app.cart);

  //const check = cart.map((e) => e.price).reduce((a, b) => a + b);

  //console.log(check);

  const inCart = cart.length;
  return (
    <>
      <div
        style={{
          opacity: `${
            safty ||
            safteyAgree ||
            moveLocation ||
            selectLocation ||
            selectTime ||
            payment
              ? ".2"
              : 1
          }`,
        }}
      >
        <Heading>
          <p></p>
          <p>AC Service and Repair</p>
          <p
            style={{ marginRight: "30px" }}
            onClick={() => history.push("/ac-service-repair")}
          >
            ✖
          </p>
        </Heading>
        <Container
          style={{
            scrollBehavior: "smooth",
          }}
        >
          <Menu />
          <PackageDetail
            count={count}
            setCount={setCount}
            handleCount={handleCount}
            setShowDetails={setShowDetails}
          />
          <ViewDetail
            showDetails={showDetails}
            setShowDetails={setShowDetails}
            count={count}
            setCount={setCount}
            handleCount={handleCount}
          />
        </Container>
      </div>
      {cart.length !== 0 &&
      !safty &&
      !safteyAgree &&
      !moveLocation &&
      !selectLocation &&
      !selectTime &&
      !payment ? (
        <CartNote>
          <div className="cartCoupon">
            <h4>Click to save ₹100 on final bill</h4>
            <h4>❯</h4>
          </div>
          <div className="cartDetails" onClick={() => setSafty(true)}>
            <h4>
              <span>{inCart}</span> ₹
              {cart.map((e) => e.price).reduce((a, b) => a + b)}
            </h4>
            <h4>Continue</h4>
          </div>
        </CartNote>
      ) : null}

      {safty ? (
        <Covid19TC setSefty={setSafty} setSafteyAgree={setSafteyAgree} />
      ) : null}

      {safteyAgree ? (
        <Cart
          count={count}
          setCount={setCount}
          handleCount={handleCount}
          setSefty={setSafty}
          setMoveLocation={setMoveLocation}
          setSafteyAgree={setSafteyAgree}
        />
      ) : null}

      {moveLocation ? (
        <MoveLocation
          setSafteyAgree={setSafteyAgree}
          setMoveLocation={setMoveLocation}
          setSelectLocation={setSelectLocation}
          handleUserLocation={handleUserLocation}
        />
      ) : null}

      {selectLocation ? (
        <SelectLocation
          setMoveLocation={setMoveLocation}
          setSelectLocation={setSelectLocation}
          setSelectTime={setSelectTime}
          userLocation={userLocation}
        />
      ) : null}

      {selectTime ? (
        <SelectTime
          setSelectLocation={setSelectLocation}
          setSelectTime={setSelectTime}
          setPayment={setPayment}
        />
      ) : null}

      {payment ? (
        <Payment setSelectTime={setSelectTime} setPayment={setPayment} />
      ) : null}
    </>
  );
}
