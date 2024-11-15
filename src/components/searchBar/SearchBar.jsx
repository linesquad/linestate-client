import { useState } from "react";
import { Link } from "react-router-dom";

const types = ["buy", "rent"];

const SearchBar = () => {
  const [query, setQuery] = useState({
    type: "buy",
    city: "",
    minPrice: 0,
    maxPrice: 1000000,
  });

  const switchType = (val) => {
    setQuery((prev) => ({ ...prev, type: val }));
  };

  const handleChange = (e) => {
    setQuery((prev) => ({ ...prev, [e.target.name]: e.target.value }));
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
          name="city"
          placeholder="city"
          className="md:w-[200px] border border-[#999] w-full p-5 md:border-none"
          onChange={handleChange}
        />
        <input
          type="number"
          name="minPrice"
          min={0}
          max={10000000}
          placeholder="Min Price"
          className="md:w-[200px] border border-[#999] w-full p-5 md:border-none"
          onChange={handleChange}
        />
        <input
          type="number"
          name="maxPrice"
          min={0}
          max={10000000}
          placeholder="Max Price"
          className="md:w-[200px] border border-[#999] w-full p-5 md:border-none"
          onChange={handleChange}
        />
        <Link
          to={`/list?type=${query.type}&city=${query.city}&minPrice=${query.minPrice}&maxPrice=${query.maxPrice}`}
        >
          <button
            className="cursor-pointer bg-[#fece51] p-5 flex justify-center
        "
          >
            <img src="/search.png" alt="search" className="w-6" />
          </button>
        </Link>
      </form>
    </div>
  );
};

export default SearchBar;
