import React from "react";
import { ViewDetails } from "../../StyledComponents/Modal";
import ViewDetailsCard from "./ViewDetailsCard";

export default function ViewDetail({
  showDetails,
  setShowDetails,
  count,
  setCount,
  handleCount,
}) {
  return (
    <ViewDetails>
      <ViewDetailsCard
        showDetails={showDetails}
        setShowDetails={setShowDetails}
        count={count}
        setCount={setCount}
        handleCount={handleCount}
      />
    </ViewDetails>
  );
}
