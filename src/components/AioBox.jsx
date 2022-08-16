import React from "react";
import { CheckIcon } from "@heroicons/react/outline";

export const AioBox = () => {
  return (
    <div className="flex">
      <div>
        <CheckIcon className="w-7 mr-4 text-green-600" />
      </div>
      <div>
        <h3 className=" font-bold text-lg">Notifications</h3>
        <p className=" text-lg pt-2 pb-4">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati
          iure fuga praesentium autem ipsum sed aliquam magni cum minus eum illo
          iste facilis dolorem, explicabo repellat inventore accusantium
          molestias officia?
        </p>
      </div>
    </div>
  );
};
