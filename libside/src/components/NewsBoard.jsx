import NewsCard from "./NewsCar";

function NewsBoard() {
  return (
    <div className="flex flex-col items-center max-w-xl mx-auto text-center w-fit m-4 p-3 rounded-xl bg-white ring-1 ring-gray-300">
      <NewsCard />
      <NewsCard />
      <NewsCard />
      <NewsCard />
    </div>
  );
}

export default NewsBoard;
