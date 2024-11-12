import { Children, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ArrowLeft, Check } from "lucide-react";
import { cn } from "../../utils/helpers";
import { toggleShowFilters } from "../../redux/operations/generalSlice";
import { fetchFilteredPosts } from "../../redux/operations/postsSlice";

const filterOptions = [
  { name: "Title", value: "title" },
  { name: "Likes", value: "likes" },
  { name: "Views", value: "views" },
];

function FilterOptions() {
  const { showFilters } = useSelector((state) => state.general) ?? {};
  const dispatch = useDispatch();

  const [selection, setSelection] = useState("");

  const toggleFilters = () => dispatch(toggleShowFilters());
  const handleSelection = (name = "") => setSelection(name.toLowerCase());

  const filterPosts = () => {
    dispatch(fetchFilteredPosts(selection));
    toggleFilters();
  };

  const TopBar = () => {
    return (
      <div className="flex items-center justify-between">
        <ArrowLeft className="cursor-pointer" onClick={toggleFilters} />
        <h4 className="text-[#303136] text-[18px] font-bold">Filter by</h4>
        <button
          className="text-[14px] text-[#5143D9] font-semibold"
          onClick={filterPosts}
        >
          Done
        </button>
      </div>
    );
  };

  const Options = () => {
    return (
      <div className="mt-[9px] flex flex-col">
        {Children.toArray(
          filterOptions.map((item) => (
            <div
              className="py-[15px] border-b border-b-[#3031360D] text-[#303136] last:border-b-0 cursor-pointer flex items-center justify-between"
              onClick={() => handleSelection(item.name)}
            >
              <p>{item.name}</p>
              {selection === item?.name?.toLowerCase() ? (
                <Check size={16} />
              ) : null}
            </div>
          ))
        )}
      </div>
    );
  };

  return (
    <div
      className={cn(
        "fixed bottom-0 left-0 h-dvh w-full bg-black bg-opacity-50 z-50 backdrop-blur-[3spx] scale-0 max-w-screen-md md:left-1/2 md:-translate-x-1/2",
        showFilters && "scale-100"
      )}
    >
      <div
        className={cn(
          "bg-white h-auto fixed bottom-0 w-full rounded-t-[20px] px-4 pt-6 pb-5 translate-y-full transition-transform max-w-screen-3xl md:left-1/2 md:-translate-x-1/2",
          showFilters && "translate-y-1"
        )}
      >
        <TopBar />
        <Options />
      </div>
    </div>
  );
}

export default FilterOptions;
