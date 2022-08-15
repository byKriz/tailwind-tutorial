import React from "react";
import { PhoneIcon, ArrowSmRightIcon } from "@heroicons/react/outline";
import { ChipIcon, SupportIcon } from "@heroicons/react/solid";

export const SuppBox = ({ iconName = "support", text }) => {
  const selectIcon = (iconName) => {
    if (iconName === "phone") {
      return <PhoneIcon />;
    } else if (iconName === "chip") {
      return <ChipIcon />;
    } else if (iconName === "support") {
      return <SupportIcon />;
    }
  };
  return (
    <div>
      <div>
        {selectIcon(iconName)}
        <h3>Sales</h3>
        <p>
          {text}
        </p>
      </div>
      <div>
        <p>
          Contact Us <ArrowSmRightIcon />
        </p>
      </div>
    </div>
  );
};
