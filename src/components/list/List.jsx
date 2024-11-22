import Card from "../card/Card";

const List = ({ posts, checker }) => {
  return (
    <div className="flex flex-col gap-[50px]">
      {checker == "saved"
        ? posts.savedPost.map((item) => <Card key={item.id} item={item} />)
        : posts.profilePosts.map((item) => <Card key={item.id} item={item} />)}
    </div>
  );
};

export default List;
