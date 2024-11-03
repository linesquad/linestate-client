import Card from "../../components/card/Card";
import Filter from "../../components/filter/Filter";
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

      <div className="flex-[2] bg-[#fcf5f3] h-full">map</div>
    </div>
  );
};

export default ListPage;
