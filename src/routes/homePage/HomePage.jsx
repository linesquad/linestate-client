import SearchBar from "../../components/searchBar/SearchBar";

const HomePage = () => {
  return (
    <div className="flex ">
      <div className="flex flex-[3]">
        <div className="pr-[100px] flex flex-col justify-center gap-12">
          <h1 className="text-[64px] font-bold leading-none">
            Find Real Estate & Get Your Dream Place
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
            explicabo suscipit cum eius, iure est nulla animi consequatur
            facilis id pariatur fugit quos laudantium temporibus dolor ea
            repellat provident impedit!
          </p>
          <SearchBar />
          <div className="flex gap-[50px]">
            <div>
              <h1 className="text-4xl font-bold">16+</h1>
              <h2 className="text-xl font-light">Years of Experience</h2>
            </div>
            <div>
              <h1 className="text-4xl font-bold">200</h1>
              <h2 className="text-xl font-light">Award Gained</h2>
            </div>
            <div>
              <h1 className="text-4xl font-bold">2000+</h1>
              <h2 className="text-xl font-light">Property Ready</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-[2] bg-[#fcf5f3] h-screen relative items-center">
        <img src="/bg.png" alt="" className="w-[115%] absolute right-0" />
      </div>
    </div>
  );
};

export default HomePage;
