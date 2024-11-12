import Posts from "../components/Posts";
import SearchBar from "../components/SearchBar/search-bar";
import Tags from "../components/Tags";

function Home() {
  return (
    <div className="p-4">
      <SearchBar />
      <Tags />
      <Posts />
    </div>
  );
}

export default Home;
