import PostTag from "../components/Posts/PostCard/post-tag";
import Views from "../components/Posts/PostCard/views";
import Title from "../components/Posts/PostCard/title";
import Back from "../components/Back";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchPostDetail } from "../redux/operations/postsSlice";

function PostDetail() {
  const { postDetail } = useSelector((state) => state.posts) ?? {};
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      dispatch(fetchPostDetail(id));
    }
  }, [dispatch, id]);

  const { title, body, tags, views } = postDetail ?? {};

  return (
    <div className="py-3 px-4">
      <div className="flex items-center justify-between mb-6">
        <Back />
        {/* <Bookmark className="cursor-pointer" /> */}
      </div>
      {title ? (
        <>
          <div className="flex items-center justify-between mb-2">
            <PostTag name={tags[0]} />
            <Views views={views} />
          </div>
          <Title title={title} className="text-2xl" />
          <p className="mt-[15px]">{body}</p>
        </>
      ) : null}
    </div>
  );
}

export default PostDetail;
