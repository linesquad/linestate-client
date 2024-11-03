import Card from "../../components/card/Card";
import Filter from "../../components/filter/Filter";
import Map from "../../components/map/Map";
import { listData } from "../../lib/dummydata";

const ListPage = () => {
  const data = listData;
  return (
    <div className="flex h-[calc(100vh-100px)]">
      <div className="flex-[3] h-full overflow-y-auto pr-[50px] flex flex-col gap-[50px]">
        <Filter />
        {data.map((item) => (
          <Card key={item.id} item={item} />
        ))}
      </div>

      <div className="flex-[2] h-full bg-[#fcf5f3] ">
        <Map items={data} />
      </div>
    </div>
  );
};

export default ListPage;
