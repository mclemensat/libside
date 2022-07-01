import SearchBar from "@components/SearchBar";
import CardTown from "@components/CardTown.jsx";
// import PostComponent from "@components/PostComponent";
import NewsBoard from "@components/NewsBoard";

function HomePage() {
  return (
    <div className="flex justify-center">
      <div className="flex flex-col">
        <div className="z-40">
          <SearchBar />
        </div>

        <div>
          {/* <PostComponent /> */}
          <CardTown />
        </div>
      </div>
      <div className="mx-8 my-10">
        <NewsBoard />
      </div>
    </div>
  );
}

export default HomePage;
