import { motion } from "framer-motion";

const BurgerMenu = ({ isOpen }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: "100%" }}
      animate={isOpen ? { opacity: 1, x: "0%" } : { opacity: 0, x: "100%" }}
      transition={{ duration: 0.6 }}
      className="bg-black text-white h-full w-[50%] fixed top-0 right-0 z-40 flex flex-col items-center pt-20"
    >
      <a href="/" className="py-2">
        Home
      </a>
      <a href="/" className="py-2">
        About
      </a>
      <a href="/" className="py-2">
        Contact
      </a>
      <a href="/" className="py-2">
        Agents
      </a>
      <a href="/" className="py-2">
        Sign in
      </a>
      <a href="/" className="py-2">
        Sign up
      </a>
    </motion.div>
  );
};

export default BurgerMenu;
