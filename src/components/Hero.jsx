import React from "react";
import {
  CloudUploadIcon,
  DatabaseIcon,
  ServerIcon,
} from "@heroicons/react/solid";
import bgImg from "../assets/cyber-bg.png";

export function Hero() {
  return (
    <div className="w-full h-screen bg-zinc-200 flex flex-col justify-between">
      <div className="grid md:grid-cols-2 max-w-[1240px] m-auto">
        <div>
          <p>Unique Sequencing & Production</p>
          <h1>Cloud Managment</h1>
          <p>This is our Teach Brand.</p>
          <button>Get Started</button>
        </div>
      </div>
    </div>
  );
}
