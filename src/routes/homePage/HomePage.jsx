import SearchBar from "../../components/searchBar/SearchBar";
const HomePage = () => {
  return (
    <div className="flex flex-col md:justify-center h-screen lg:flex-row lg:gap-5">
      <div className="flex lg:flex-[3] flex-[1] justify-center">
        <div className="flex flex-col justify-center gap-12 ">
          <h1 className="sm:text-[64px] font-bold leading-none smaller:text-[48px] text-[52px] smaller:leading-tight">
            Find Real Estate & Get Your Dream Place
          </h1>
          <p className="smaller:text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
            explicabo suscipit cum eius, iure est nulla animi consequatur
            facilis id pariatur fugit quos laudantium temporibus dolor ea
            repellat provident impedit!
          </p>
          <SearchBar />
          <div className="md:flex gap-[50px]md:gap-0 md:justify-between hidden">
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
      <div className="lg:flex lg:flex-[2] flex-[1] bg-[#fcf5f3] h-screen relative items-center hidden ">
        <img src="/bg.png" alt="" className="w-[115%] absolute right-0" />
      </div>
    </div>
  );
};

export default HomePage;
