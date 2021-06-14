import React, { useState } from "react";
import {
  Container,
  Heading,
  CartNote,
} from "../../StyledComponents/MensHaircutAndGrooming";
import Cart from "./Cart";
import Covid19TC from "./Covid19TC";
import Menu from "./Menu";
import PackageDetail from "./PackageDetail";
import ViewDetail from "./ViewDetail";
import MoveLocation from "./MoveLocation";
import SelectLocation from "./SelectLocation";

// npm install npm@latest -g
// rm -rf node_modules && npm install
// npm update

export default function MensHairCutAndGrooming() {
  const [showDetails, setShowDetails] = useState(false);

  const [count, setCount] = useState(0);
  const [sefty, setSefty] = useState(false);
  const [safteyAgree, setSafteyAgree] = useState(false);
  const [moveLocation, setMoveLocation] = useState(false);
  const [selectLocation, setSelectLocation] = useState(false);

  const handleCount = (num) => {
    setCount(count + num);
  };

  return (
    <>
      <Heading>Men's Haircut & Grooming</Heading>
      <Container style={count === 0 ? { height: "90vh" } : { height: "80vh" }}>
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
      {count !== 0 &&
      !sefty &&
      !safteyAgree &&
      !moveLocation &&
      !selectLocation ? (
        <CartNote>
          <div className="cartCoupon">
            <h4>Click to save ₹00 on final bill</h4>
            <h4>❯</h4>
          </div>
          <div className="cartDetails" onClick={() => setSefty(true)}>
            <h4>
              <span>0</span> ₹000
            </h4>
            <h4>Continue</h4>
          </div>
        </CartNote>
      ) : null}

      {sefty ? (
        <Covid19TC setSefty={setSefty} setSafteyAgree={setSafteyAgree} />
      ) : null}

      {safteyAgree ? (
        <Cart
          count={count}
          setCount={setCount}
          handleCount={handleCount}
          setMoveLocation={setMoveLocation}
          setSafteyAgree={setSafteyAgree}
        />
      ) : null}

      {moveLocation ? (
        <MoveLocation
          setMoveLocation={setMoveLocation}
          setSelectLocation={setSelectLocation}
        />
      ) : null}

      {selectLocation ? <SelectLocation /> : null}
    </>
  );
}
