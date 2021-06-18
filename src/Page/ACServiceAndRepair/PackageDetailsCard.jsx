import React from "react";
import { AddButton, PackageDetailsCards } from "../../StyledComponents/Modal";

export default function PackageDetailsCard({
  setShowDetails,
  count,
  setCount,
  handleCount,
  data,
}) {
  console.log(data);

  const { name, service, repair, installation } = data;

  console.log(name, service, repair, installation);
  return (
    <PackageDetailsCards>
      <div id="service">
        <h2>{name}</h2>

        {/* safetyMessage optional with image */}
        {/* <div className="safetyMessage">
        <div>
          <img width="40px" height="55px" src="" alt="safety" />
        </div>
        <div>
          <h2>100% Hygienic and mess-free services</h2>
          <p>Sanitized equipment, single-use products</p>
        </div>
      </div> */}

        {/* service component block */}

        {service.map((item, id) => {
          return (
            <>
              <div className="menuData">
                <span
                  style={{
                    marginTop: "5px",
                    color: "#ffffff",
                    padding: "5px",
                    background: "#1c8e1c",
                    fontWeight: "bold",
                  }}
                >
                  30% off, 2nd AC Onwards
                </span>

                {/* Availables video or Image only */}
                <video preload="auto" controls="play/stop" autoplay>
                  <source
                    src="https://www.urbancompany.com/4b6f2fa4-7dcd-4a90-bf57-d5444a9b8736"
                    video="web/mp4"
                  />
                </video>

                <img src="" alt="" />

                {/* below images will show optional */}
                <div className="menuDataShortDetails">
                  <img src={item.img} alt="" />
                  {/* <img
              src="https://res.cloudinary.com/urbanclap/image/upload/t_medium_res_portfolio_thumb,q_auto:low,f_auto/images/growth/luminosity/1612450053888-a545d8.jpeg"
              alt=""
            /> */}

                  <div className="menuDataShortDetailsPrice">
                    <div className="data">
                      <h3>{item.name}</h3>
                      <p>
                        <span
                          style={{ color: "#1C8E1C", fontWeight: "bolder" }}
                        >
                          {item.rating}
                        </span>{" "}
                        {item.totalRating}
                      </p>
                      <p>
                        ₹ {item.price} <del>{Math.round(item.price * 1.5)}</del>
                        <span> ⓘ</span>
                      </p>
                      <p>{item.time} min</p>
                    </div>
                    <AddButton>
                      {count === 0 ? (
                        <button
                          className="addToCartItem"
                          onClick={() => setCount(1)}
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
                  </div>
                </div>
                <div style={{ width: "85%", margin: "15px 7.5% 15px auto" }}>
                  {item.offer.map((item) => {
                    return (
                      <>
                        <li style={{ color: "#757575" }}>{item}</li>
                      </>
                    );
                  })}

                  {/* <li style={{ color: "#757575" }}>
                    Recommended if your last service was done a year ago
                  </li> */}
                </div>

                {/* this button is optional */}
                {/* <button className="EditThisPackageButton">
            SAMPLE <span>❯</span>
          </button> */}
                <div
                  className="viewDetailsModel"
                  onClick={() => setShowDetails(true)}
                >
                  View details <span>❯</span>
                </div>
              </div>
            </>
          );
        })}
      </div>

      {/* Repair part */}

      {repair.map((item, id) => {
        return (
          <>
            <div id="repair">
              <h2>{item.name}</h2>

              {/* safetyMessage optional with image */}
              {/* <div className="safetyMessage">
        <div>
          <img width="40px" height="55px" src="" alt="safety" />
        </div>
        <div>
          <h2>100% Hygienic and mess-free services</h2>
          <p>Sanitized equipment, single-use products</p>
        </div>
      </div> */}

              {/* service component block */}

              {item.service.map((item, id) => {
                return (
                  <>
                    <div className="menuData">
                      <span
                        style={{
                          marginTop: "5px",
                          color: "#ffffff",
                          padding: "5px",
                          background: "#1c8e1c",
                          fontWeight: "bold",
                        }}
                      >
                        30% off, 2nd AC Onwards
                      </span>

                      {/* Availables video or Image only */}
                      <video preload="auto" controls="play/stop" autoplay>
                        <source
                          src="https://www.urbancompany.com/4b6f2fa4-7dcd-4a90-bf57-d5444a9b8736"
                          video="web/mp4"
                        />
                      </video>

                      <img src="" alt="" />

                      {/* below images will show optional */}
                      <div className="menuDataShortDetails">
                        <img src={item.img} alt="" />
                        {/* <img
              src="https://res.cloudinary.com/urbanclap/image/upload/t_medium_res_portfolio_thumb,q_auto:low,f_auto/images/growth/luminosity/1612450053888-a545d8.jpeg"
              alt=""
            /> */}

                        <div className="menuDataShortDetailsPrice">
                          <div className="data">
                            <h3>{item.name}</h3>
                            <p>
                              <span
                                style={{
                                  color: "#1C8E1C",
                                  fontWeight: "bolder",
                                }}
                              >
                                {item.rating}
                              </span>{" "}
                              {item.totalRating}
                            </p>
                            <p>
                              ₹ {item.price}{" "}
                              <del>{Math.round(item.price * 1.5)}</del>
                              <span> ⓘ</span>
                            </p>
                            <p>{item.time} min</p>
                          </div>
                          <AddButton>
                            {count === 0 ? (
                              <button
                                className="addToCartItem"
                                onClick={() => setCount(1)}
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
                                <button onClick={() => handleCount(-1)}>
                                  -
                                </button>
                                <button>{count}</button>
                                <button onClick={() => handleCount(1)}>
                                  +
                                </button>
                              </div>
                            )}
                          </AddButton>
                        </div>
                      </div>
                      <div
                        style={{ width: "85%", margin: "15px 7.5% 15px auto" }}
                      >
                        {item.offer.map((item) => {
                          return (
                            <>
                              <li style={{ color: "#757575" }}>{item}</li>
                            </>
                          );
                        })}

                        {/* <li style={{ color: "#757575" }}>
                    Recommended if your last service was done a year ago
                  </li> */}
                      </div>

                      {/* this button is optional */}
                      {/* <button className="EditThisPackageButton">
            SAMPLE <span>❯</span>
          </button> */}
                      <div
                        className="viewDetailsModel"
                        onClick={() => setShowDetails(true)}
                      >
                        View details <span>❯</span>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
          </>
        );
      })}

      {/* installation part */}
      <div id="installation">
        <h2>{installation.name}</h2>

        {/* safetyMessage optional with image */}
        {/* <div className="safetyMessage">
        <div>
          <img width="40px" height="55px" src="" alt="safety" />
        </div>
        <div>
          <h2>100% Hygienic and mess-free services</h2>
          <p>Sanitized equipment, single-use products</p>
        </div>
      </div> */}

        {/* service component block */}

        {installation.service.map((item, id) => {
          return (
            <>
              <div className="menuData">
                <span
                  style={{
                    marginTop: "5px",
                    color: "#ffffff",
                    padding: "5px",
                    background: "#1c8e1c",
                    fontWeight: "bold",
                  }}
                >
                  30% off, 2nd AC Onwards
                </span>

                {/* Availables video or Image only */}
                <video preload="auto" controls="play/stop" autoplay>
                  <source
                    src="https://www.urbancompany.com/4b6f2fa4-7dcd-4a90-bf57-d5444a9b8736"
                    video="web/mp4"
                  />
                </video>

                <img src="" alt="" />

                {/* below images will show optional */}
                <div className="menuDataShortDetails">
                  <img src={item.img} alt="" />
                  {/* <img
              src="https://res.cloudinary.com/urbanclap/image/upload/t_medium_res_portfolio_thumb,q_auto:low,f_auto/images/growth/luminosity/1612450053888-a545d8.jpeg"
              alt=""
            /> */}

                  <div className="menuDataShortDetailsPrice">
                    <div className="data">
                      <h3>{item.name}</h3>
                      <p>
                        <span
                          style={{ color: "#1C8E1C", fontWeight: "bolder" }}
                        >
                          {item.rating}
                        </span>{" "}
                        {item.totalRating}
                      </p>
                      <p>
                        ₹ {item.price} <del>{Math.round(item.price * 1.5)}</del>
                        <span> ⓘ</span>
                      </p>
                      <p>{item.time} min</p>
                    </div>
                    <AddButton>
                      {count === 0 ? (
                        <button
                          className="addToCartItem"
                          onClick={() => setCount(1)}
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
                  </div>
                </div>
                <div style={{ width: "85%", margin: "15px 7.5% 15px auto" }}>
                  {item.offer.map((item) => {
                    return (
                      <>
                        <li style={{ color: "#757575" }}>{item}</li>
                      </>
                    );
                  })}

                  {/* <li style={{ color: "#757575" }}>
                    Recommended if your last service was done a year ago
                  </li> */}
                </div>

                {/* this button is optional */}
                {/* <button className="EditThisPackageButton">
            SAMPLE <span>❯</span>
          </button> */}
                <div
                  className="viewDetailsModel"
                  onClick={() => setShowDetails(true)}
                >
                  View details <span>❯</span>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </PackageDetailsCards>
  );
}
