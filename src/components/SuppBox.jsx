import React from "react";
import { PhoneIcon, ArrowSmRightIcon } from "@heroicons/react/outline";
import { ChipIcon, SupportIcon } from "@heroicons/react/solid";

export const SuppBox = ({ name, iconName = "support", text }) => {
  const selectIcon = (iconName) => {
    const classStyle =
      "w-16 p-4 bg-indigo-600 text-white rounded-lg mt-[-4rem]";

    if (iconName === "phone") {
      return <PhoneIcon className={classStyle} />;
    } else if (iconName === "chip") {
      return <ChipIcon className={classStyle} />;
    } else if (iconName === "support") {
      return <SupportIcon className={classStyle} />;
    }
  };
  return (
    <>
      <div className=" bg-white rounded-xl shadow-2xl">
        <div className="p-8">
          {selectIcon(iconName)}
          <h3 className="font-bold text-2xl my-6">{name}</h3>
          <p className="text-gray-600 text-xl">{text}</p>
        </div>
        <div className=" bg-slate-100 pl-8 py-4">
          <p className="flex items-center text-indigo-600">
            Contact Us <ArrowSmRightIcon className="w-5 ml-2"/>
          </p>
        </div>
      </div>
    </>
  );
};
