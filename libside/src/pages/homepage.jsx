import Nav from "../components/Nav";
import News from "../components/News";
import SearchBar from "../components/SearchBar";
import CardTown from "../components/CardTown.jsx";

function HomePage() {
  return (
    <div className="text-center">
      <Nav />
      <News />
      <h1 className="text-primary font-poppins">Coucou text de police </h1>
      <p className="text-secondary font-raleway">Let's code !!</p>
      <SearchBar />
      <div className="bottom-0 fixed">
        <CardTown />
      </div>
    </div>
  );
}

export default HomePage;
