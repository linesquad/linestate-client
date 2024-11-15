import { Link } from "react-router-dom";

const Card = ({ item }) => {
  console.log(item);
  return (
    <div className="flex gap-5 pb-[20px]">
      <Link to={`/${item.id}`} className="flex-[2] h-[200px]">
        <img
          src={item.images[0]}
          alt="image"
          className="w-full h-full object-cover rounded-lg"
        />
      </Link>
      <div className="flex-[3] flex flex-col justify-between gap-[10px]">
        <h2 className="text-xl font-semibold text-[#444] transition-all duration-400 ease-in-out hover:scale-105 hover:text-[#000]">
          <Link to={`/${item.id}`}>{item.title}</Link>
        </h2>
        <p className="text-sm flex items-center gap-[5px] text-[#888]">
          <img src="/pin.png" alt="mark map" className="w-4 h-4" />
          <span>{item.address}</span>
        </p>
        <p className="text-xl font-light p-[5px] rounded-[5px] bg-[#c6f75d] max-w-max">
          $ {item.price}
        </p>
        <div className="flex justify-between gap-[10px]">
          <div className="flex gap-[20px] text-sm">
            <div className="flex items-center gap-[5px] bg-slate-200 p-[5px] rounded-[5px]">
              <img src="/bed.png" alt="bed" className="w-4 h-4" />
              <span className="">{item.bedrooms} bedroom</span>
            </div>
            <div className="flex items-center gap-[5px] bg-slate-200 p-[5px] rounded-[5px]">
              <img src="/bath.png" alt="bed" className="w-4 h-4" />
              <span>{item.bathrooms} bathroom</span>
            </div>
          </div>
          <div className="flex gap-[20px]">
            <div
              className="border border-[#999] px-[2px] py-[5px] rounded-[5px] cursor-pointer flex items-center justify-center
            hover:bg-slate-400"
            >
              <img src="/save.png" alt="save" className="w-4 h-4" />
            </div>
            <div
              className="border border-[#999] px-[2px] py-[5px] rounded-[5px] cursor-pointer flex items-center justify-center
            hover:bg-slate-400"
            >
              <img src="/chat.png" alt="chat" className="w-4 h-4" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
