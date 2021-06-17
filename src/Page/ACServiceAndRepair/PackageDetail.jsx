import React from "react";
import { PackageDetails } from "../../StyledComponents/Modal";
import PackageDetailsCard from "./PackageDetailsCard";

export default function PackageDetail({
  setShowDetails,
  count,
  setCount,
  handleCount,
}) {
  return (
    <PackageDetails>
      <PackageDetailsCard
        setShowDetails={setShowDetails}
        count={count}
        setCount={setCount}
        handleCount={handleCount}
      />
    </PackageDetails>
  );
}
