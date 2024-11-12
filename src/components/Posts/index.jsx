import { Children, useEffect } from "react";
import PostCard from "./PostCard";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../../redux/operations/postsSlice";

function Posts() {
  const { posts } = useSelector((state) => state.posts) ?? {};
  const dispatch = useDispatch();

  useEffect(() => {
    if (!posts?.length) {
      dispatch(fetchPosts());
    }
  }, [posts, dispatch]);

  return (
    <div className="mt-6 flex flex-col gap-4 overflow-y-auto h-[calc(100dvh-14rem)]">
      {posts?.length
        ? Children.toArray(posts.map((post) => <PostCard post={post} />))
        : null}
    </div>
  );
}

export default Posts;
