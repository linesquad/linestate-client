import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import Chat from "../../components/card/Chat";
import List from "../../components/list/List";
import apiReq from "../../lib/apiReq";
import { AuthContext } from "../../context/AuthContext";
import { RxAvatar } from "react-icons/rx";
const ProfilePage = () => {
  const navigate = useNavigate();
  const { currentUser, updateUser } = useContext(AuthContext);

  const logout = async () => {
    try {
      const res = await apiReq.post("/auth/logout");
      updateUser(null);
      console.log(res.data);
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="flex w-full">
      <div className="flex-[3]">
        <div className="pr-[5px] flex flex-col gap-[50px]">
          <div className="flex items-center justify-between">
            <h1 className="font-light">User Information</h1>
            <Link
              to="/profile/update"
              className="py-3 px-6 bg-[#fece51] cursor-pointer border-none"
            >
              Update Profile
            </Link>
          </div>
          <div className="flex flex-col gap-[20px]">
            <span className="flex items-center gap-[20px]">
              Avatar:
              {currentUser.profilePicture ? (
                <img
                  src={currentUser.profilePicture}
                  alt=""
                  className="w-[40px] h-[40px] rounded-full object-cover"
                />
              ) : (
                <RxAvatar className="w-10 h-10" />
              )}
            </span>
            <span className="flex items-center gap-[20px]">
              Username: <b>{currentUser.username}</b>
            </span>
            <span className="flex items-center gap-[20px]">
              E-mail: <b>{currentUser.email}</b>
            </span>
            <button
              onClick={logout}
              className="py-3 px-6 bg-[#fece51] cursor-pointer border-none"
            >
              Logout
            </button>
          </div>
          <div>
            <h1 className="font-light">My List</h1>
            <button className="py-3 px-6 bg-[#fece51] cursor-pointer border-none">
              Create New Post
            </button>
          </div>
          <List />
          <div>
            <h1 className="font-light">Saved List</h1>
          </div>
          <List />
        </div>
      </div>
      <div className="flex-[2] bg-[#fcf5f3] h-full">
        <div className="px-[20px]">
          <Chat />
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
