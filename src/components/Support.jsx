import React from "react";
import supportImg from "../assets/support.jpg";
import { SuppBox } from "./SuppBox";

export const Support = () => {
  return (
    <div className=" w-full h-screen mt-24">
      <div className="w-full h-[700px] bg-gray-900/90 absolute">
        <img
          className="w-full h-full object-cover mix-blend-overlay"
          src={supportImg}
          alt="/"
        />
      </div>

      <div className="max-w-[1240px] mx-auto text-white relative">
        <div className=" px-4 py-12">
          <h2 className="text-3xl pt-8 text-slate-300 uppercase text-center">
            Support
          </h2>
          <h3 className="text-5xl font-bold py-6 text-center">
            Finding the right team
          </h3>
          <p className="text-3xl py-4 text-slate-300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio illum,
            expedita sed magni repellendus ipsum? Accusantium, natus, accusamus
            quos ratione facilis laborum iure architecto eveniet, esse dolores
            recusandae labore maiores.
          </p>
        </div>

        {/* aqui comienza el componente suppBox */}
        <div className="grid grid-cols-1 lg:grid-cols-3 relative gap-x-8 gap-y-16 px-4 pt-12 sm:pt-20 text-black">
          <SuppBox
            name="Sales"
            iconName="phone"
            text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse sint
          rerum, incidunt velit voluptatibus aliquam, voluptatum a provident
          ipsam accusamus odio numquam impedit nisi ipsa culpa iste nobis,
          perspiciatis cupiditate."
          />
          <SuppBox
            name="Technical Support"
            iconName="support"
            text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse sint
          rerum, incidunt velit voluptatibus aliquam, voluptatum a provident
          ipsam accusamus odio numquam impedit nisi ipsa culpa iste nobis,
          perspiciatis cupiditate."
          />
          <SuppBox
            name="Media Inquiries"
            iconName="chip"
            text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse sint
          rerum, incidunt velit voluptatibus aliquam, voluptatum a provident
          ipsam accusamus odio numquam impedit nisi ipsa culpa iste nobis,
          perspiciatis cupiditate."
          />
        </div>
        {/* aqui termina el componente suppBox */}
      </div>
    </div>
  );
};
