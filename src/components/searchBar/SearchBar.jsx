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
    <div className="smaller:flex smaller:flex-col">
      <div>
        {types.map((type, index) => (
          <button
            key={type}
            className={`${
              query.type === type
                ? "bg-black text-white"
                : "bg-white text-black"
            } border border-b-0 text-transform: capitalize border-[#999]  ${
              index === 0 ? "rounded-tl-[5px] border-r-0" : ""
            }
            ${
              index === 1 ? "border-l-0 rounded-tr-[5px]" : ""
            } smaller:px-8 px-9 py-5`}
            onClick={() => switchType(type)}
          >
            {type}
          </button>
        ))}
      </div>
      <form className="border border-[#999] md:flex md:justify-between h-16 md:h-auto gap-[5px] flex flex-col md:flex-row">
        <input
          type="text"
          name="location"
          placeholder="City Location"
          className="md:w-[200px] border border-[#999] w-full p-5 md:border-none"
        />
        <input
          type="number"
          name="minPrice"
          min={0}
          max={10000000}
          placeholder="Min Price"
          className="md:w-[200px] border border-[#999] w-full p-5 md:border-none"
        />
        <input
          type="number"
          name="maxPrice"
          min={0}
          max={10000000}
          placeholder="Max Price"
          className="md:w-[200px] border border-[#999] w-full p-5 md:border-none"
        />
        <button
          className="cursor-pointer bg-[#fece51] p-5 flex justify-center
        "
        >
          <img src="/search.png" alt="search" className="w-6" />
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
