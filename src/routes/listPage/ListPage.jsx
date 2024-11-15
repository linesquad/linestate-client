import { Await, useLoaderData } from "react-router-dom";
import Card from "../../components/card/Card";
import Filter from "../../components/filter/Filter";
import Map from "../../components/map/Map";
import { Suspense } from "react";
const ListPage = () => {
  const data = useLoaderData();

  return (
    <div className="flex h-[calc(100vh-100px)]">
      <div className="flex-[3] h-full overflow-y-auto pr-[50px] flex flex-col gap-[50px]">
        <Filter />
        <Suspense fallback={<div>Loading...</div>}>
          <Await resolve={data.postResponse} errorElement={<p>Error</p>}>
            {(postResponse) =>
              postResponse.data.map((item) => (
                <Card key={item.id} item={item} />
              ))
            }
          </Await>
        </Suspense>
      </div>

      <div className="flex-[2] h-full bg-[#fcf5f3]">
        <Suspense fallback={<div>Loading...</div>}>
          <Await resolve={data.postResponse} errorElement={<p>Error</p>}>
            {(postResponse) => <Map items={postResponse.data} />}
          </Await>
        </Suspense>
      </div>
    </div>
  );
};

export default ListPage;
