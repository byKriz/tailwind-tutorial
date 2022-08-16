import React from "react";
import { PriceBox } from "../components/PriceBox";

export const Pricing = () => {
  return (
    <div name="pricing" className="w-full text-white my-24">
      <div className="w-full h-[800px] bg-slate-900 absolute mix-blend-overlay"></div>

      <div className="max-w-[1240px] mx-auto py-12">
        <div className="text-center py-8 text-slate-300">
          <h2 className="text-3xl uppercase">Pricing</h2>
          <h3 className="text-5xl font-bold text-white py-8">
            The right price for research.
          </h3>
          <p className="text-3xl px-2 md:px-0">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim eius
            possimus maxime, non nam ea eveniet earum amet sed nesciunt
            molestias sapiente similique tempore alias velit ratione, quis
            perferendis iure.
          </p>
        </div>

        <div className="grid md:grid-cols-2">
          <PriceBox plan="Started" price={49} />
          <PriceBox plan="Premium" price={99} />
        </div>
      </div>
    </div>
  );
};
