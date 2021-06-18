import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { servicesData } from "../../Redux/app/Services/action";
import { PackageDetails } from "../../StyledComponents/Modal";
import PackageDetailsCard from "./PackageDetailsCard";
import Loader from "../../Components/Loader";

export default function PackageDetail({
  setShowDetails,
  count,
  setCount,
  handleCount,
}) {
  const dispatch = useDispatch();
  const service = useSelector((state) => state.service);

  //console.log(service.services[0].acService);

  useEffect(() => {
    dispatch(servicesData());
  }, [dispatch]);

  return (
    <>
      {service.isLoading ? (
        <Loader />
      ) : service.isError ? (
        <h1>Error 404!</h1>
      ) : (
        <PackageDetails>
          {service?.services[0]?.acService.length > 0 &&
            service.services[0].acService.map((item, id) => {
              return (
                <>
                  <PackageDetailsCard
                    key={id}
                    data={item}
                    setShowDetails={setShowDetails}
                    count={count}
                    setCount={setCount}
                    handleCount={handleCount}
                  />
                </>
              );
            })}
        </PackageDetails>
      )}
    </>
  );
}
