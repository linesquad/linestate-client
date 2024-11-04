import Slider from "../../components/slider/Slider";
import { singlePostData, userData } from "../../lib/dummydata";

const SinglePage = () => {
  return (
    <div className="flex h-full">
      <div className="flex-[3]">
        <div className="pr-[50px]">
          <Slider images={singlePostData.images} />
          <div className="mt-10">
            <div className="flex justify-between">
              <div className="flex flex-col gap-[20px]">
                <h1 className="font-normal text-xl">{singlePostData.title}</h1>
                <div className="flex gap-[5px] items-center text-[#888] text-sm">
                  <img src="/pin.png" alt="" className="w-4 h-4" />
                  <span>{singlePostData.address}</span>
                </div>
                <div className="p-[5px] border rounded-[5px] bg-green-500 w-max text-xl font-light">
                  $ {singlePostData.price}
                </div>
              </div>
              <div className="flex flex-col items-center justify-center gap-[20px] px-[50px] border rounded-[10px] bg-green-500 font-semibold">
                <img
                  src={userData.img}
                  alt=""
                  className="w-[50px] h-[50px] rounded-full object-cover"
                />
                <span>{userData.name}</span>
              </div>
            </div>
            <div className="mt-[50px] text-[#555] leading-[20px]">
              {singlePostData.description}
            </div>
          </div>
        </div>
      </div>
      <div className="flex-[2] bg-[#fcf5f3]">
        <div className="px-[20px]"></div>
      </div>
    </div>
  );
};

export default SinglePage;
