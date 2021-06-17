import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { servicesData } from "../../Redux/app/Services/action";
import { PackageDetails } from "../../StyledComponents/Modal";
import PackageDetailsCard from "./PackageDetailsCard";

export default function PackageDetail({
  setShowDetails,
  count,
  setCount,
  handleCount,
}) {
  const dispatch = useDispatch();
  const service = useSelector((state) => state.service);

  console.log(service.services);

  useEffect(() => {
    dispatch(servicesData());
  }, []);

  return (
    <PackageDetails>
      {service.services.map((item, id) => {
        return (
          <div key={id}>
            <PackageDetailsCard
              setShowDetails={setShowDetails}
              count={count}
              setCount={setCount}
              handleCount={handleCount}
            />
          </div>
        );
      })}
    </PackageDetails>
  );
}
