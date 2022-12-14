import React from "react";
import { CheckIcon } from "@heroicons/react/solid";

export const PriceBox = ({ plan, price }) => {
  return (
    <div className=" bg-white text-slate-900 m-4 p-8 rounded-xl shadow-2xl relative">
      <span className=" uppercase px-3 py-1 bg-indigo-200 text-indigo-900 rounded-2xl text-sm">
        {plan}
      </span>
      <div>
        <p className=" text-6xl font-bold py-4 flex">
          ${price}
          <span className=" text-xl text-slate-500 flex flex-col justify-end">
            /mo
          </span>
        </p>
      </div>
      <p className="text-2xl py-8 text-slate-500">
        Lorem ipsum, dolor sit amet consectetur adipisicing.
      </p>

      <div className="text-2xl">
        <p className="flex py-4">
          <CheckIcon className="w-8 mr-5 text-green-600" />
          Lorem, ipsum dolor.
        </p>
        <p className="flex py-4">
          <CheckIcon className="w-8 mr-5 text-green-600" />
          Lorem, ipsum dolor.
        </p>
        <p className="flex py-4">
          <CheckIcon className="w-8 mr-5 text-green-600" />
          Lorem, ipsum dolor.
        </p>
        <p className="flex py-4">
          <CheckIcon className="w-8 mr-5 text-green-600" />
          Lorem, ipsum dolor.
        </p>
        <p className="flex py-4">
          <CheckIcon className="w-8 mr-5 text-green-600" />
          Lorem, ipsum dolor.
        </p>

        <button className="w-full py-4 my-4">Get Started</button>
      </div>
    </div>
  );
};
