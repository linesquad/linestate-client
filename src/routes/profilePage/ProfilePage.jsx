import { Await, Link, useLoaderData, useNavigate } from "react-router-dom";
import { Suspense, useContext } from "react";
import Chat from "../../components/card/Chat";
import List from "../../components/list/List";
import apiReq from "../../lib/apiReq";
import { AuthContext } from "../../context/AuthContext";
import { RxAvatar } from "react-icons/rx";
const ProfilePage = () => {
  const data = useLoaderData();
  const navigate = useNavigate();
  const { currentUser, updateUser } = useContext(AuthContext);

  const logout = async () => {
    try {
      const res = await apiReq.post("/auth/logout");
      updateUser(null);
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
              className="py-3 px-6 w-fit bg-[#fece51] cursor-pointer border-none"
            >
              Logout
            </button>
          </div>
          <Link
            to="/add"
            className="py-3 px-6 w-fit bg-[#fece51] cursor-pointer border-none"
          >
            Create New Post
          </Link>
          <div>
            <h1 className="font-light">My List</h1>
          </div>
          <Suspense fallback={<div>Loading...</div>}>
            <Await resolve={data.postResponse} errorElement={<p>Error</p>}>
              {(postResponse) => (
                <List posts={postResponse.data} checker="list" />
              )}
            </Await>
          </Suspense>
          <div>
            <h1 className="font-light">Saved List</h1>
          </div>
          <Suspense fallback={<div>Loading...</div>}>
            <Await resolve={data.postResponse} errorElement={<p>Error</p>}>
              {(postResponse) => (
                <List posts={postResponse.data} checker="saved" />
              )}
            </Await>
          </Suspense>
        </div>
      </div>
      <div className="flex-[2] bg-[#fcf5f3] h-full">
        <div className="px-[20px]">
          <Suspense fallback={<div>Loading...</div>}>
            <Await resolve={data.chatResponse} errorElement={<p>Error</p>}>
              {(chatResponse) => <Chat chats={chatResponse.data} />}
            </Await>
          </Suspense>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
