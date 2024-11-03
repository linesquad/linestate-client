import { useState } from "react";
import BurgerMenu from "./BurgerMenu";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleBurgerMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="flex justify-between h-[100px] items-center">
      <div className="flex flex-[3] items-center gap-[50px]">
        <Link
          to="/"
          className="flex font-bold gap-[10px] text-[20px] items-center transition-all duration-400 ease-in-out hover:scale-105"
        >
          <img src="/logo.png" alt="" className="w-7" />
          <span className="text-xl md:hidden lg:inline-block">LineEstate</span>
        </Link>
        <div className="md:flex items-center gap-[50px] hidden md:text-base">
          <a
            href="/"
            className="transition-all duration-400 ease-in-out hover:scale-105"
          >
            Home
          </a>
          <a
            href="/"
            className="transition-all duration-400 ease-in-out hover:scale-105"
          >
            About
          </a>
          <a
            href="/"
            className="transition-all duration-400 ease-in-out hover:scale-105"
          >
            Contact
          </a>
          <a
            href="/"
            className="transition-all duration-400 ease-in-out hover:scale-105"
          >
            Agents
          </a>
        </div>
      </div>
      <div className="md:flex flex-[2] items-center justify-end  lg:bg-[#fcf5f3] lg:h-screen hidden">
        <a
          href="/"
          className="px-3 py-2 m-5 transition-all duration-400 ease-in-out hover:scale-105"
        >
          Sign in
        </a>
        <a
          href="/"
          className="bg-[#fece51] px-3 py-2 m-5 transition-all duration-400 ease-in-out hover:scale-105"
        >
          Sign up
        </a>
      </div>
      <div className="w-9 md:hidden z-50" onClick={toggleBurgerMenu}>
        <img src="/menu.png" alt="burger menu" />
      </div>
      <BurgerMenu isOpen={isOpen} />
    </nav>
  );
};

export default Navbar;
