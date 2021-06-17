import {
  StylePopularServiceDiv,
  StylePopularServiceNavbar,
  StylePopularServiceMainDiv,
} from "../../StyledComponents/AcServiceAndRepairStyle";

export const PopularServices = () => {
  return (
    <div style={{ marginLeft: "10%" }}>
      <StylePopularServiceDiv>
        <StylePopularServiceNavbar>
          <h2>Popular Services Near You</h2>
        </StylePopularServiceNavbar>

        <StylePopularServiceMainDiv>
          <div>
            <p>AC Repair</p>
          </div>

          <div>
            <p>Massage For Men</p>
          </div>

          <div>
            <p>Plumbers</p>
          </div>

          <div>
            <p>Cleaning Services</p>
          </div>

          <div>
            <p>Washing Machine Repair</p>
          </div>
        </StylePopularServiceMainDiv>
      </StylePopularServiceDiv>
    </div>
  );
};
