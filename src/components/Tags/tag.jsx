import { useDispatch, useSelector } from "react-redux";
import { cn } from "../../utils/helpers";
import { changeTag } from "../../redux/operations/tagSlice";

function Tag({ tag = {} }) {
  const { name, slug } = tag;

  const tagStore = useSelector((state) => state.tag);
  const dispatch = useDispatch();

  const isActive = tagStore.activeTag === slug;

  const changeActiveTag = () => {
    dispatch(changeTag(tag));
  };

  return (
    <div
      onClick={changeActiveTag}
      className={cn(
        "px-2 py-[6px] border border-[#BDBDBD] rounded-[6px] text-[#828282] text-[14px] cursor-pointer",
        isActive && "bg-[#2C2C2C] border-[#2C2C2C] text-white"
      )}
    >
      {name}
    </div>
  );
}

export default Tag;