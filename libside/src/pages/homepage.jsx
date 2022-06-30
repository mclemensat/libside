import SearchBar from "@components/SearchBar";
import CardTown from "@components/CardTown.jsx";
import PostComponent from "@components/PostComponent";
import NewsBoard from "@components/NewsBoard";

function HomePage() {
  return (
    <div className="flex">
      <div className="flex flex-col">
        <SearchBar />
        <PostComponent />
        <CardTown />
      </div>

      <div className="mx-8 my-10">
        <NewsBoard />
      </div>
    </div>
  );
}

export default HomePage;
