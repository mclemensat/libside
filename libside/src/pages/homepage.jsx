import Nav from "@components/Nav";
import News from "@components/News";
import SearchBar from "@components/SearchBar";
import CardTown from "@components/CardTown.jsx";
import PostComponent from "@components/PostComponent";

function HomePage() {
  return (
    <div className="">
      <div>
      </div>
      <div className="flex flex-around p-10 w-full">
        <div className="py-20  ">
          <SearchBar />
          <PostComponent />
          <CardTown />
        </div>

        <div className="md:w-1/4 md:right-0 md:absolute">
          <News />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
