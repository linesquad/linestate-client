import { useState } from "react";
import { useSearchParams } from "react-router-dom";

const Filter = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState({
    city: searchParams.get("city") || "",
    type: searchParams.get("type") || "",
    propertyType: searchParams.get("propertyType") || "",
    minPrice: searchParams.get("minPrice") || 0,
    maxPrice: searchParams.get("maxPrice") || 1000000,
    bedrooms: searchParams.get("bedrooms") || 1,
  });

  const handleChange = (e) => {
    setQuery((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleFilter = () => {
    setSearchParams(query);
  };

  return (
    <div className="flex flex-col gap-[10px]">
      <h1 className="font-light text-2xl">
        Search results for <b>{searchParams.get("city")}</b>
      </h1>
      <div>
        <div className="flex flex-col gap-[2px]">
          <label htmlFor="city">Location</label>
          <input
            type="text"
            id="city"
            name="city"
            placeholder="City Location"
            className="w-full p-[10px] border-[#e0e0e0] border-[5px] text-sm"
            onChange={handleChange}
            value={query.city}
          />
        </div>
      </div>
      <div className="flex w-full justify-between items-center">
        <div className="flex flex-col gap-[2px]">
          <label htmlFor="type">Type</label>
          <select
            name="type"
            id="type"
            className="w-[100px] p-[10px] border-[#e0e0e0] border-[5px] text-sm"
            onChange={handleChange}
            value={query.type}
          >
            <option value="">any</option>
            <option value="buy">Buy</option>
            <option value="rent">Rent</option>
          </select>
        </div>
        <div className="flex flex-col gap-[2px]">
          <label htmlFor="property">Property</label>
          <select
            name="propertyType"
            id="propertyType"
            className="w-[100px] p-[10px] border-[#e0e0e0] border-[5px] text-sm"
            onChange={handleChange}
            value={query.propertyType}
          >
            <option value="">any</option>
            <option value="apartment">Apartment</option>
            <option value="house">House</option>
            <option value="condo">Condo</option>
            <option value="land">Land</option>
          </select>
        </div>
        <div className="flex flex-col gap-[2px]">
          <label htmlFor="minPrice">Min Price</label>
          <input
            type="number"
            id="minPrice"
            name="minPrice"
            placeholder="any"
            className="w-[100px] p-[10px] border-[#e0e0e0] border-[5px] text-sm"
            onChange={handleChange}
            value={query.minPrice}
          />
        </div>
        <div className="flex flex-col gap-[2px]">
          <label htmlFor="maxPrice">Max Price</label>
          <input
            type="number"
            id="maxPrice"
            name="maxPrice"
            placeholder="any"
            className="w-[100px] p-[10px] border-[#e0e0e0] border-[5px] text-sm"
            onChange={handleChange}
            value={query.maxPrice}
          />
        </div>
        <div className="flex flex-col gap-[2px]">
          <label htmlFor="bedroom">Bedroom</label>
          <input
            type="number"
            id="bedroom"
            name="bedrooms"
            placeholder="any"
            className="w-[100px] p-[10px] border-[#e0e0e0] border-[5px] text-sm"
            onChange={handleChange}
            value={query.bedrooms || ""}
          />
        </div>
        <button
          onClick={handleFilter}
          className="bg-[#fece51] p-[10px] cursor-pointer"
        >
          <img src="/search.png" alt="search" className="w-6" />
        </button>
      </div>
    </div>
  );
};

export default Filter;
