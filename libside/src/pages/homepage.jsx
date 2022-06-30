import SearchBar from "@components/SearchBar";
import CardTown from "@components/CardTown.jsx";
import PostComponent from "@components/PostComponent";
import NewsBoard from "@components/NewsBoard";

function HomePage() {
  return (
    <div className="">
      <div className="flex flex-around p-10 w-full">
        <div className="py-20  ">
          <SearchBar />
          {/* <PostComponent /> */}
          <CardTown />
        </div>

        <div className="md:w-1/4 md:right-0 md:absolute">
          <NewsBoard />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
