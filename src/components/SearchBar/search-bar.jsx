import { Search, Filter } from "lucide-react";
import FilterOptions from "../FilterOptions";
import { useDispatch } from "react-redux";
import { toggleShowFilters } from "../../redux/operations/generalSlice";
import { useCallback, useState } from "react";
import { debounce } from "../../utils/helpers";
import {
  fetchPosts,
  fetchSearchedPosts,
} from "../../redux/operations/postsSlice";

function SearchBar() {
  const dispatch = useDispatch();

  const [searchQuery, setSearchQuery] = useState("");

  const toggleFilters = () => dispatch(toggleShowFilters());

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debouncedHandleChange = useCallback(
    debounce((q) => {
      dispatch(fetchSearchedPosts(q));
    }, 500),
    []
  );

  const handleInput = (e) => {
    if (e) {
      const val = e.target.value;
      setSearchQuery(val);
      if (val === "") {
        dispatch(fetchPosts());
        return setSearchQuery("");
      }
      debouncedHandleChange(val);
    }
  };

  return (
    <div className="h-12 bg-[#F4F4F4] rounded-[56px] flex items-center px-3 justify-between">
      <div className="flex items-center gap-[6px] w-full">
        <Search />
        <input
          value={searchQuery}
          onChange={handleInput}
          className="font-semibold bg-transparent outline-none placeholder:text-[#909090] w-full pr-6"
          placeholder="Search..."
        />
      </div>
      <Filter className="cursor-pointer" onClick={toggleFilters} />
      <FilterOptions />
    </div>
  );
}

export default SearchBar;
