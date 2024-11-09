import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import apiReq from "../../lib/apiReq";
import { useNavigate } from "react-router-dom";

const ProfileUpdate = () => {
  const { currentUser, updateUser } = useContext(AuthContext);
  const [username, setUsername] = useState(currentUser.username);
  const [email, setEmail] = useState(currentUser.email);
  const navigate = useNavigate();

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const res = await apiReq.put("/users/update", { username, email });
      updateUser({ ...currentUser, username, email });
      console.log(res.data);
      navigate("/profile");
    } catch (error) {
      console.log(error);
    }
  };
  const handleAvatarUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("avatar", file);

    try {
      const res = await apiReq.put("/users/upload-avatar", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      updateUser({ ...currentUser, profilePicture: res.data.profilePicture });
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex flex-col items-center">
      <h1 className="font-light">Update Profile</h1>
      <form onSubmit={handleUpdate} className="flex flex-col gap-4">
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
          className="border p-2"
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          className="border p-2"
        />
        <input
          type="file"
          accept="image/*"
          onChange={(e) => handleAvatarUpload(e)}
          className="border p-2"
        />
        <button
          type="submit"
          className="py-3 px-6 bg-[#fece51] cursor-pointer border-none"
        >
          Update
        </button>
      </form>
    </div>
  );
};

export default ProfileUpdate;
