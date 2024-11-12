import { Link } from "react-router-dom";
import PostTag from "./post-tag";
import Title from "./title";
import Views from "./views";
import { useSelector } from "react-redux";

function PostCard({ post = {} }) {
  const { title, views, id, tags } = post;
  const { activeTag } = useSelector((state) => state.tag) ?? {};

  const displayTag = activeTag === "all" ? tags[0] : activeTag;

  return (
    <Link
      to={`/detail/${id}`}
      className="flex min-h-[79px] w-full gap-3 cursor-pointer"
    >
      <div className="bg-neutral-800 w-[96px] h-full rounded-[16px] flex-shrink-0" />
      <div className="w-full flex flex-col gap-2">
        <div className="w-full">
          <div className="flex items-center justify-between w-full">
            <PostTag name={displayTag} />
            <Views views={views} />
          </div>
        </div>
        <Title title={title} className="lineEllipsis" />
      </div>
    </Link>
  );
}

export default PostCard;
