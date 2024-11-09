import { useContext, useState } from "react";
import BurgerMenu from "./BurgerMenu";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { RxAvatar } from "react-icons/rx";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const { currentUser } = useContext(AuthContext);

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
          <Link
            to="/home"
            className="transition-all duration-400 ease-in-out hover:scale-105"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="transition-all duration-400 ease-in-out hover:scale-105"
          >
            About
          </Link>
          <Link
            to="/"
            className="transition-all duration-400 ease-in-out hover:scale-105"
          >
            Contact
          </Link>
          <Link
            to="/agents"
            className="transition-all duration-400 ease-in-out hover:scale-105"
          >
            Agents
          </Link>
        </div>
      </div>
      <div className="md:flex flex-[2] items-center justify-end  lg:bg-[#fcf5f3]  hidden">
        {currentUser ? (
          <div className="flex items-center font-bold gap-5">
            {currentUser.profilePicture ? (
              <img
                src={currentUser.profilePicture}
                alt=""
                className="w-10 h-10 rounded-full object-cover mr-[20px]"
              />
            ) : (
              <RxAvatar className="w-10 h-10" />
            )}
            <span>{currentUser.username}</span>
            <Link
              to="/profile"
              className="px-3 py-3 bg-[#fece51] cursor-pointer border-none relative"
            >
              <div className="absolute top-[-8px] right-[-8px] bg-red-600 text-white rounded-full w-[26px] h-[26px] flex items-center justify-center">
                3
              </div>
              <span>Profile</span>
            </Link>
          </div>
        ) : (
          <>
            <Link
              to="/login"
              className="px-3 py-2 m-5 transition-all duration-400 ease-in-out hover:scale-105"
            >
              Sign in
            </Link>
            <Link
              to="/register"
              className="bg-[#fece51] px-3 py-2 m-5 transition-all duration-400 ease-in-out hover:scale-105"
            >
              Sign up
            </Link>
          </>
        )}
      </div>
      <div className="w-9 md:hidden z-50" onClick={toggleBurgerMenu}>
        <img src="/menu.png" alt="burger menu" />
      </div>
      <BurgerMenu isOpen={isOpen} />
    </nav>
  );
};

export default Navbar;
