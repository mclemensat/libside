import NewsCard from "./NewsCard";

function NewsBoard() {
  return (
    <div className="flex flex-col items-center rounded-xl bg-white ring-1 ring-gray-300">
      <NewsCard />
      <NewsCard />
      <NewsCard />
      <NewsCard />
    </div>
  );
}

export default NewsBoard;
