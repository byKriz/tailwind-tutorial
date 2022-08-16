import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { useState } from "react";
import { Link, animateScroll as scroll } from "react-scroll";

export function NavBar() {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  const navItems = [
    {
      name: "Home",
      link: (
        <Link to="home" smooth={true} duration={500}>
          Home
        </Link>
      ),
    },
    {
      name: "About",
      link: (
        <Link to="about" smooth={true} offset={-140} duration={500}>
          About
        </Link>
      ),
    },
    {
      name: "Support",
      link: (
        <Link to="support" smooth={true} offset={-100} duration={500}>
          Support
        </Link>
      ),
    },
    {
      name: "Plataforms",
      link: (
        <Link to="plataforms" smooth={true} offset={-100} duration={500}>
          Plataforms
        </Link>
      ),
    },
    {
      name: "Pricing",
      link: (
        <Link to="pricing" smooth={true} offset={-50} duration={500}>
          Pricing
        </Link>
      ),
    },
  ];

  return (
    <div className="w-screen h-[80px] z-10 bg-zinc-200 drop-shadow-lg fixed">
      <div className="px-2 flex justify-between items-center h-full w-full">
        <div className="flex items-center">
          <h1 className="text-3xl font-bold mr-4 sm:text-4xl">BRAND.</h1>
          <ul className="hidden md:flex">
            {navItems.map((link) => (
              <li className="p-4" key={link.name}>
                {link.link}
              </li>
            ))}
          </ul>
        </div>
        <div className="hidden md:flex pr-4">
          <button className="border-none bg-transparent text-black mr-4">
            Sign In
          </button>
          <button className="px-4 py-3">Sign Up</button>
        </div>
        <div className="md:hidden mr-4" onClick={handleClick}>
          {!nav ? <MenuIcon className="w-8" /> : <XIcon className="w-8" />}
        </div>
      </div>

      <ul className={!nav ? "hidden" : "absolute bg-zinc-200 w-full px-8 md:hidden"}>
        {navItems.map((link) => (
          <li className="p-4 border-b-2 border-zinc-300 w-full" key={link.name}>
            {link.link}
          </li>
        ))}

        <div className="flex flex-col my-4">
          <button className="bg-transparent text-indigo-600 px-8 py-3 mb-4 font-semibold">
            Sign In
          </button>
          <button className="px-8 py-3 font-semibold">Sign Up</button>
        </div>
      </ul>
    </div>
  );
}
