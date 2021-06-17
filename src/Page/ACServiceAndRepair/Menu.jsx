import React from "react";
import { MENU } from "../../StyledComponents/Modal";

export default function Menu() {
  return (
    <MENU>
      <a href="#SERVICE">
        <button>Service</button>
      </a>

      <a href="#REPAIR">
        <button>Repair</button>
      </a>

      <button>Installation & Uninstallation</button>
    </MENU>
  );
}
