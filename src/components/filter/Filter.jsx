const Filter = () => {
  return (
    <div className="flex flex-col gap-[10px]">
      <h1 className="font-light text-2xl">
        Search results for <b>London</b>
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
          >
            <option value="">any</option>
            <option value="buy">Buy</option>
            <option value="rent">Rent</option>
          </select>
        </div>
        <div className="flex flex-col gap-[2px]">
          <label htmlFor="property">Property</label>
          <select
            name="property"
            id="property"
            className="w-[100px] p-[10px] border-[#e0e0e0] border-[5px] text-sm"
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
          />
        </div>
        <div className="flex flex-col gap-[2px]">
          <label htmlFor="maxPrice">Max Price</label>
          <input
            type="text"
            id="maxPrice"
            name="maxPrice"
            placeholder="any"
            className="w-[100px] p-[10px] border-[#e0e0e0] border-[5px] text-sm"
          />
        </div>
        <div className="flex flex-col gap-[2px]">
          <label htmlFor="bedroom">Bedroom</label>
          <input
            type="text"
            id="bedroom"
            name="bedroom"
            placeholder="any"
            className="w-[100px] p-[10px] border-[#e0e0e0] border-[5px] text-sm"
          />
        </div>
        <button className="bg-[#fece51] p-[10px] cursor-pointer">
          <img src="/search.png" alt="search" className="w-6" />
        </button>
      </div>
    </div>
  );
};

export default Filter;
