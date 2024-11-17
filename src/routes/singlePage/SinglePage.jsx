import Slider from "../../components/slider/Slider";
import Map from "../../components/map/Map";
import { useLoaderData, redirect } from "react-router-dom";
import apiReq from "../../lib/apiReq.js";
import DOMPurify from "dompurify";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";

const SinglePage = () => {
  const post = useLoaderData();
  const [saved, setSaved] = useState(post.isSaved);
  const { currentUser } = useContext(AuthContext);

  const handleSave = async () => {
    setSaved((prev) => !prev);
    if (!currentUser) {
      redirect("/login");
    }
    try {
      await apiReq.post(`/users/save`, {
        postId: post.id,
      });
    } catch (error) {
      console.log(error);
      setSaved((prev) => !prev);
    }
  };

  return (
    <div className="flex h-full">
      <div className="flex-[3]">
        <div className="pr-[50px]">
          <Slider images={post.images} />
          <div className="mt-10">
            <div className="flex justify-between">
              <div className="flex flex-col gap-[20px]">
                <h1 className="font-normal text-xl">{post.title}</h1>
                <div className="flex gap-[5px] items-center text-[#888] text-sm">
                  <img src="/pin.png" alt="" className="w-4 h-4" />
                  <span>{post.address}</span>
                </div>
                <div className="p-[5px] border rounded-[5px] bg-green-500 w-max text-xl font-light">
                  $ {post.price}
                </div>
              </div>
              <div className="flex flex-col items-center justify-center gap-[20px] px-[50px] border rounded-[10px] bg-green-500 font-semibold">
                <img
                  src={post.user.avatar}
                  alt=""
                  className="w-[50px] h-[50px] rounded-full object-cover"
                />
                <span>{post.user.username}</span>
              </div>
            </div>
            <div
              className="mt-[50px] text-[#555] leading-[20px]"
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(post.postDetail.description),
              }}
            ></div>
          </div>
        </div>
      </div>
      <div className="flex-[2] h-full bg-[#fcf5f3]">
        <div className="px-[20px] flex flex-col gap-[20px]">
          <p className="font-bold text-lg mb-[10px]">General</p>
          <div className="flex flex-col gap-[20px] px-[20px] py-[10px] bg-white rounded-[10px]">
            <div className="flex items-center gap-[10px]">
              <img src="/utility.png" alt="" className="w-6 h-6 bg-green-500" />
              <div>
                <span className="font-bold">Utilities</span>
                <p className="text-sm">{post.postDetail.utilities}</p>
              </div>
            </div>
            <div className="flex items-center gap-[10px]">
              <img src="/pet.png" alt="" className="w-6 h-6 bg-green-500" />
              <div>
                <span className="font-bold">Pet Policy</span>
                <p className="text-sm">{post.postDetail.pet}</p>
              </div>
            </div>
            <div className="flex items-center gap-[10px]">
              <img src="/fee.png" alt="" className="w-6 h-6 bg-green-500" />
              <div>
                <span className="font-bold">Property Fees</span>
                <p className="text-sm">{post.postDetail.income}</p>
              </div>
            </div>
          </div>
          <p className="font-bold text-lg mb-[10px]">Sizes</p>
          <div className="flex justify-between">
            <div className="flex items-center gap-[10px] bg-white p-[10px] rounded-[5px]">
              <img src="/size.png" alt="" className="w-6 h-6" />
              <span>{post.postDetail.size} sqft</span>
            </div>
            <div className="flex items-center gap-[10px] bg-white p-[10px] rounded-[5px]">
              <img src="/bed.png" alt="" className="w-6 h-6" />
              <span>{post.bedrooms} beds</span>
            </div>
            <div className="flex items-center gap-[10px] bg-white p-[10px] rounded-[5px]">
              <img src="/bath.png" alt="" className="w-6 h-6" />
              <span>{post.bathrooms} bathrooms</span>
            </div>
          </div>
          <p className="font-bold text-lg mb-[10px]">Nearby places</p>
          <div className="flex justify-between px-[20px] py-[10px] bg-white rounded-[10px]">
            <div>
              <img src="/school.png" alt="" className="w-6 h-6" />
              <div>
                <span>School</span>
                <p>{post.postDetail.school}m away</p>
              </div>
            </div>
            <div>
              <img src="/pet.png" alt="" className="w-6 h-6" />
              <div>
                <span>Bus Stop</span>
                <p>{post.postDetail.bus}m away</p>
              </div>
            </div>
            <div>
              <img src="/fee.png" alt="" className="w-6 h-6" />
              <div>
                <span>Restaurant</span>
                <p>{post.postDetail.restaurant}m away</p>
              </div>
            </div>
          </div>
          <p className="font-bold text-lg mb-[10px]">Location</p>
          <div className="w-full h-[200px]">
            <Map items={[post]} />
          </div>
          <div className="flex justify-between">
            <button className="p-[20px] flex items-center gap-[5px] bg-white border border-[#fece51] rounded-[5px] cursor-pointer">
              <img src="/chat.png" alt="" className="w-4 h-4" />
              Send a Message
            </button>
            <button
              onClick={handleSave}
              className="p-[20px] flex items-center gap-[5px] bg-white border border-[#fece51] rounded-[5px] cursor-pointer"
            >
              <img src="/save.png" alt="" className="w-4 h-4" />
              {saved ? "Place Saved" : "Save the Place"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SinglePage;
