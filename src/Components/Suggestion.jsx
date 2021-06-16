import React from "react";
import { SuggestionContainer } from "../StyledComponents/HomePageStyledComponents";
import { Link } from "react-router-dom";
const suggestionTags = [
  { name: "salon for men" },
  { name: "salon for women" },
  { name: "makeup & hairstyling" },
  { name: "salon classic" },
  { name: "massage therapy for women" },
  { name: "ac service & repair" },
  { name: "ro service & repair" },
  { name: "electricians" },
  { name: "painting services" },
  { name: "house painters" },
  { name: "carpenters" },
  { name: "full home cleaning" },
  { name: "geyser repair" },
];
export default function Suggestion({ text }) {
  return (
    <SuggestionContainer>
      {suggestionTags.map(
        (item) =>
          item.name.includes(text) && (
            <div>
              <Link to="/ac-service-repair/">{item.name}</Link>
            </div>
          )
      )}
    </SuggestionContainer>
  );
}
