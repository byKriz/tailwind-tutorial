import React from "react";
import {CheckIcon} from "@heroicons/react/outline"
import { AioBox } from "../components/AioBox";

export const AllInOne = () => {
  return (
    <div className="w-full my-32">
      <div className="max-w-[1240px] mx-auto px-2">
        <h2 className="text-5xl font-bold text-center">All-In-One Plataform</h2>
        <p className="text-2xl py-8 text-gray-500 text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt tenetur
          totam minus ratione deserunt, aperiam saepe similique atque ullam
          nisi?
        </p>


        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4">

          {/* <div>
            <div>
              <CheckIcon />
            </div>
          </div> */}
          <AioBox />
          <AioBox />
          <AioBox />
          <AioBox />
          <AioBox />
          <AioBox />
          <AioBox />
          <AioBox />

        </div>
      </div>
    </div>
  );
};
