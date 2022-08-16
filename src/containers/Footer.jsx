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
    <footer className="w-full mt-24 bg-slate-900 text-gray-300 py-2 px-2">
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
        <div className="col-span-2 pt-8 md:pt-2">
          <p className=" font-bold uppercase">Subscribe to our newsletter</p>
          <p className="py-4">
            The lastest news, articles and recources, sent to your inbox weekly.
          </p>
          <form className="flex flex-col sm:flex-row">
            <input className="w-full p-2 mr-4 rounded-md mb-4" type="email" />
            <button className="p-2 mb-4">Subscribe</button>
          </form>
        </div>
      </div>

      <div className="flex flex-col max-w-[1240px] px-2 py-4 m-auto justify-between sm:flex-row text-gray-500">
        <p>2022 Workflow, LLC. All rights reserved</p>
        <div className="flex justify-between sm:max-w-[360px] text-2xl gap-2 pt-2 sm:pt-0">
          <FaFacebook className=" hover:text-white"/>
          <FaInstagram className=" hover:text-white"/>
          <FaTwitter className=" hover:text-white"/>
          <FaTwitch className=" hover:text-white"/>
          <FaGithub className=" hover:text-white"/>
        </div>
      </div>
    </footer>
  );
};
