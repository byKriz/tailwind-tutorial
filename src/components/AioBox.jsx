import React from "react";
import { CheckIcon } from "@heroicons/react/outline";

export const AioBox = ({ name, text }) => {
  return (
    <div className="flex">
      <div>
        <CheckIcon className="w-7 mr-4 text-green-600" />
      </div>
      <div>
        <h3 className=" font-bold text-lg">{name}</h3>
        <p className=" text-lg pt-2 pb-4">{text}</p>
      </div>
    </div>
  );
};
