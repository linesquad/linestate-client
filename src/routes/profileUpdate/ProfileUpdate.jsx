import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import apiReq from "../../lib/apiReq";
import { useNavigate } from "react-router-dom";
import UploadWidget from "../../components/uploadWidget/UploadWidget";
import { RxAvatar } from "react-icons/rx";

const ProfileUpdate = () => {
  const { currentUser, updateUser } = useContext(AuthContext);
  const [avatar, setAvatar] = useState(currentUser.avatar);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleUpdate = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const { username, email, password } = Object.fromEntries(formData);
    try {
      setIsLoading(true);
      const res = await apiReq.put(`/users/${currentUser.id}`, {
        username,
        email,
        password,
        avatar,
      });
      updateUser(res.data);
      navigate("/profile");
    } catch (error) {
      console.log(error);
      setError(error.response.data.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex w-full justify-between gap-16 items-center">
      <div className="flex flex-col items-center">
        <h1 className="font-light">Update Profile</h1>
        <form onSubmit={handleUpdate} className="flex flex-col gap-4">
          <input
            type="text"
            name="username"
            defaultValue={currentUser.username}
            placeholder="Username"
            className="border p-2"
          />
          <input
            type="email"
            name="email"
            defaultValue={currentUser.email}
            placeholder="Email"
            className="border p-2"
            autoComplete="email"
          />
          <input
            type="password"
            name="password"
            defaultValue=""
            placeholder="Password (leave blank to keep current)"
            className="border p-2"
            autoComplete="current-password"
          />

          <button
            type="submit"
            className="py-3 px-6 bg-[#fece51] cursor-pointer border-none"
            disabled={isLoading}
          >
            {isLoading ? "Updating..." : "Update"}
          </button>
          {error && <p className="text-red-500">{error}</p>}
        </form>
      </div>
      <div className="ml-8">
        {avatar ? (
          <img
            src={avatar}
            alt="Avatar"
            className="w-32 h-32 rounded-full border"
          />
        ) : (
          <RxAvatar className="w-32 h-32 text-gray-400" />
        )}
        <UploadWidget
          uwConfig={{
            cloudName: "ddlvpobpv",
            uploadPreset: "linestate",
            multiple: false,
            maxImageFileSize: 2000000,
            folder: "avatars",
          }}
          setAvatar={setAvatar}
        />
      </div>
    </div>
  );
};

export default ProfileUpdate;
