import { Children, useEffect } from "react";
import Tag from "./tag";
import { useDispatch, useSelector } from "react-redux";
import { fetchTags } from "../../redux/operations/tagSlice";

function Tags() {
  const { tags } = useSelector((state) => state.tag) ?? {};

  const dispatch = useDispatch();

  useEffect(() => {
    if (!tags?.length) {
      dispatch(fetchTags());
    }
  }, [dispatch, tags]);

  return tags?.length ? (
    <div className="flex items-center gap-2 mt-6 overflow-x-auto">
      {Children.toArray(tags.map((tag) => <Tag tag={tag} />))}
    </div>
  ) : null;
}

export default Tags;
