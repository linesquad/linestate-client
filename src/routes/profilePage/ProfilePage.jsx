import Chat from "../../components/card/Chat";
import List from "../../components/list/List";

const ProfilePage = () => {
  return (
    <div className="flex w-full">
      <div className="flex-[3]">
        <div className="pr-[5px] flex flex-col gap-[50px]">
          <div className="flex items-center justify-between">
            <h1 className="font-light">User Information</h1>
            <button className="py-3 px-6 bg-[#fece51] cursor-pointer border-none">
              Update Profile
            </button>
          </div>
          <div className="flex flex-col gap-[20px]">
            <span className="flex items-center gap-[20px]">
              Avatar:
              <img
                src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt=""
                className="w-[40px] h-[40px] rounded-full object-cover"
              />
            </span>
            <span className="flex items-center gap-[20px]">
              Username: <b>John Doe</b>
            </span>
            <span className="flex items-center gap-[20px]">
              E-mail: <b>john@gmail.com</b>
            </span>
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
