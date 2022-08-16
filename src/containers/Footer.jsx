import React from "react";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaTwitter,
  FaTwitch,
} from "react-icons/fa";
import { ItemsBox } from "../components/ItemsBox";

export const Footer = () => {
  return (
    <div className="w-full mt-24 bg-slate-900 text-gray-300 py-6 px-2">
      <div className="max-x-[1240px] mx-auto grid grid-cols-2 md:grid-cols-6 border-b-2 border-gray-600 py-8">
        <ItemsBox />
        <ItemsBox
          tittle="Support"
          items={["Pricing", "Documentation", "Guides", "Api Status"]}
        />
        <ItemsBox
          tittle="Company"
          items={["About", "Blog", "Jobs", "Press", "Partners"]}
        />
        <ItemsBox
          tittle="Legal"
          items={["Claims", "Privacy", "Terms", "Policies", "Conditions"]}
        />
      </div>
    </div>
  );
};
