import React from "react";
import { MENU } from "../../StyledComponents/Modal";

export default function Menu() {
  return (
    <MENU>
      <a href="#service">
        <button>Service</button>
      </a>

      <a href="#repair">
        <button>Repair</button>
      </a>
      <a href="#installation">
        <button>Installation & Uninstallation</button>
      </a>
    </MENU>
  );
}
