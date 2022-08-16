import React from "react";
import { AioBox } from "../components/AioBox";

export const AllInOne = () => {
  const loremText =
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati iure fuga praesentium autem ipsum sed aliquam magni cum minus eum illo iste facilis dolorem, explicabo repellat inventore accusantium molestias officia?";

  return (
    <div name="plataforms" className="w-full my-32">
      <div className="max-w-[1240px] mx-auto px-2">
        <h2 className="text-5xl font-bold text-center">All-In-One Plataform</h2>
        <p className="text-2xl px-1 py-8 text-gray-500 text-center md:px-0">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt tenetur
          totam minus ratione deserunt, aperiam saepe similique atque ullam
          nisi?
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4">
          <AioBox name="Notifications" text={loremText} />
          <AioBox name="Notifications" text={loremText} />
          <AioBox name="Notifications" text={loremText} />
          <AioBox name="Notifications" text={loremText} />
          <AioBox name="Notifications" text={loremText} />
          <AioBox name="Notifications" text={loremText} />
          <AioBox name="Notifications" text={loremText} />
          <AioBox name="Notifications" text={loremText} />
        </div>
      </div>
    </div>
  );
};
