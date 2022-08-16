import React from "react";

export const ItemsBox = ({
  tittle = "Solutions",
  items = ["Marketing", "Analytics", "Commerse", "Data", "Cloud"],
}) => {
  return (
    <div>
      <h6 className=" font-bold uppercase pt-2">{tittle}</h6>
      <ul>
        {items.map((item) => (
          <li key={item} className="py-1">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};
