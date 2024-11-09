import { Navigate, Outlet } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

export const Layout = () => {
  return (
    <div className="h-screen max-w-[1366px] mx-auto px-5">
      <Navbar />
      <Outlet />
    </div>
  );
};
export const RequireAuth = () => {
  const { currentUser } = useContext(AuthContext);

  return !currentUser ? (
    <Navigate to="/login" />
  ) : (
    <div className="h-screen max-w-[1366px] mx-auto px-5">
      <Navbar />
      <Outlet />
    </div>
  );
};
