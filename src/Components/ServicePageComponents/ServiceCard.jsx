import {
  StyleServiceCard,
  StyleServiceCardH2,
} from "../../StyledComponents/AcServiceAndRepairStyle";
import { ServiceCardButton } from "./ServiceCardButton";

export const ServiceCard = ({ setShowServiceModal }) => {
  return (
    <StyleServiceCard>
      <StyleServiceCardH2>Need an AC Expert for:</StyleServiceCardH2>

      <ServiceCardButton text="AC Servicing" />
      <ServiceCardButton text="AC not cooling/ Repair" />
    </StyleServiceCard>
  );
};
