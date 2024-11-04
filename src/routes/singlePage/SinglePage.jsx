import Slider from "../../components/slider/Slider";
import { singlePostData, userData } from "../../lib/dummydata";
import Map from "../../components/map/Map";

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
        <div className="px-[20px] flex flex-col gap-[20px]">
          <p className="font-bold text-lg mb-[10px]">General</p>
          <div className="flex flex-col gap-[20px] px-[20px] py-[10px] bg-white rounded-[10px]">
            <div className="flex items-center gap-[10px]">
              <img src="/utility.png" alt="" className="w-6 h-6 bg-green-500" />
              <div>
                <span className="font-bold">Utilities</span>
                <p className="text-sm">Renter is responsible</p>
              </div>
            </div>
            <div className="flex items-center gap-[10px]">
              <img src="/pet.png" alt="" className="w-6 h-6 bg-green-500" />
              <div>
                <span className="font-bold">Pet Policy</span>
                <p className="text-sm">Pets Allowed</p>
              </div>
            </div>
            <div className="flex items-center gap-[10px]">
              <img src="/fee.png" alt="" className="w-6 h-6 bg-green-500" />
              <div>
                <span className="font-bold">Property Fees</span>
                <p className="text-sm">
                  Mush have 3x the rent in total household income
                </p>
              </div>
            </div>
          </div>
          <p className="font-bold text-lg mb-[10px]">Sizes</p>
          <div className="flex justify-between">
            <div className="flex items-center gap-[10px] bg-white p-[10px] rounded-[5px]">
              <img src="/size.png" alt="" className="w-6 h-6" />
              <span>80sqft</span>
            </div>
            <div className="flex items-center gap-[10px] bg-white p-[10px] rounded-[5px]">
              <img src="/bed.png" alt="" className="w-6 h-6" />
              <span>2 beds</span>
            </div>
            <div className="flex items-center gap-[10px] bg-white p-[10px] rounded-[5px]">
              <img src="/bath.png" alt="" className="w-6 h-6" />
              <span>1 bathroom</span>
            </div>
          </div>
          <p className="font-bold text-lg mb-[10px]">Nearby places</p>
          <div className="flex justify-between px-[20px] py-[10px] bg-white rounded-[10px]">
            <div>
              <img src="/school.png" alt="" className="w-6 h-6" />
              <div>
                <span>School</span>
                <p>250m away</p>
              </div>
            </div>
            <div>
              <img src="/pet.png" alt="" className="w-6 h-6" />
              <div>
                <span>Bus Stop</span>
                <p>100m away</p>
              </div>
            </div>
            <div>
              <img src="/fee.png" alt="" className="w-6 h-6" />
              <div>
                <span>Restaurant</span>
                <p>200m away</p>
              </div>
            </div>
          </div>
          <p className="font-bold text-lg mb-[10px]">Location</p>
          <div className="w-full h-[200px]">
            <Map items={[singlePostData]} />
          </div>
          <div>
            <button>
              <img src="/chat.png" alt="" className="w-6 h-6" />
              Send a Message
            </button>
            <button>
              <img src="/save.png" alt="" className="w-6 h-6" />
              Save the Place
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SinglePage;
