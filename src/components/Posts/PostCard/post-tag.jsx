const PostTag = ({ name = "" }) => {
  return name ? (
    <span className="text-[12px] p-1 rounded-[4px] text-[#2C2C2C] bg-[#F2F2F2]">
      {name}
    </span>
  ) : null;
};

export default PostTag;
