import React, { useState } from "react";
import { Container, Heading, CartNote } from "../../StyledComponents/Modal";
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

export default function AcServiceAndRepairModal() {
  const [showDetails, setShowDetails] = useState(false);

  const [count, setCount] = useState(0);
  const [safty, setSafty] = useState(false);
  const [safteyAgree, setSafteyAgree] = useState(false);
  const [moveLocation, setMoveLocation] = useState(false);
  const [selectLocation, setSelectLocation] = useState(false);

  const handleCount = (num) => {
    setCount(count + num);
  };

  // const dispatch = useDispatch();
  // const service = useSelector((state) => state.service);

  // console.log(service);

  // useEffect(() => {
  //   dispatch(servicesData());
  // }, []);

  return (
    <>
      <Heading>
        <p></p>
        <p>AC Service and Repair</p>
        <p style={{ marginRight: "30px" }}>✖</p>
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
      {count !== 0 &&
      !safty &&
      !safteyAgree &&
      !moveLocation &&
      !selectLocation ? (
        <CartNote>
          <div className="cartCoupon">
            <h4>Click to save ₹00 on final bill</h4>
            <h4>❯</h4>
          </div>
          <div className="cartDetails" onClick={() => setSafty(true)}>
            <h4>
              <span>0</span> ₹000
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
        />
      ) : null}

      {selectLocation ? (
        <SelectLocation
          setMoveLocation={setMoveLocation}
          setSelectLocation={setSelectLocation}
        />
      ) : null}
    </>
  );
}
