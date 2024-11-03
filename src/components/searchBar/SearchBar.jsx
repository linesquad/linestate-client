import { useState } from "react";

const types = ["buy", "rent"];

const SearchBar = () => {
  const [query, setQuery] = useState({
    type: "buy",
    location: "",
    minPrice: 0,
    maxPrice: 0,
  });

  const switchType = (val) => {
    setQuery((prev) => ({ ...prev, type: val }));
  };

  return (
    <div className="">
      <div>
        {types.map((type, index) => (
          <button
            key={type}
            className={`${
              query.type === type
                ? "bg-black text-white"
                : "bg-white text-black"
            } px-5 py-3 border border-b-0 text-transform: capitalize border-[#999]  ${
              index === 0 ? "rounded-tl-[5px] border-r-0" : ""
            }
            ${index === 1 ? "border-l-0 rounded-tr-[5px]" : ""}`}
            onClick={() => switchType(type)}
          >
            {type}
          </button>
        ))}
      </div>
      <form className="border border-[#999] flex justify-between h-16 g-[5px]">
        <input
          type="text"
          name="location"
          placeholder="City Location"
          className="py-2 px-2 w-[200px]"
        />
        <input
          type="number"
          name="minPrice"
          min={0}
          max={10000000}
          placeholder="Min Price"
          className="py-2 px-2 w-[200px]"
        />
        <input
          type="number"
          name="maxPrice"
          min={0}
          max={10000000}
          placeholder="Max Price"
          className="py-2 px-2 w-[200px]"
        />
        <button className="cursor-pointer bg-[#fece51] px-4">
          <img src="/search.png" alt="search" className="w-6" />
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
