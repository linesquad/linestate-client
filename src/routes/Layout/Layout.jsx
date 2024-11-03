import { Outlet } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";

const Layout = () => {
  return (
    <div className="h-screen max-w-[1366px] mx-auto px-5">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Layout;
