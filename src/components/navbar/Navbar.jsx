import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleBurgerMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="flex justify-between h-[100px] items-center">
      <div className="flex flex-[3] items-center gap-[50px]">
        <a
          href="/"
          className="flex font-bold gap-[10px] text-[20px] items-center transition-all duration-400 ease-in-out hover:scale-105"
        >
          <img src="/logo.png" alt="" className="w-7" />
          <span className="text-xl md:hidden lg:inline-block">LineEstate</span>
        </a>
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
      <div className="md:flex flex-[2] items-center justify-end bg-[#fcf5f3] h-full hidden">
        <a
          href="/"
          className="px-3 py-6 m-5 transition-all duration-400 ease-in-out hover:scale-105"
        >
          Sign in
        </a>
        <a
          href="/"
          className="bg-[#fece51] px-3 py-6 m-5 transition-all duration-400 ease-in-out hover:scale-105"
        >
          Sign up
        </a>
      </div>
      <div className="w-9 md:hidden" onClick={toggleBurgerMenu}>
        <img src="/menu.png" alt="burger menu" />
      </div>

      {/* <div className="absolute bg-black text-white h-full w-[50%] top-0 right-[-50%]">
        <a href="/">Home</a>
        <a href="/">About</a>
        <a href="/">Contact</a>
        <a href="/">Agents</a>
        <a href="/">Sign in</a>
        <a href="/">Sign up</a>
      </div> */}
    </nav>
  );
};

export default Navbar;
