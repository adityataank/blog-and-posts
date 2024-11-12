const Views = ({ views = "" }) => {
  const text = views > 1 ? "views" : "view";
  return (
    <p className="text-[#828282] text-[12px]">
      {views} {text}
    </p>
  );
};

export default Views;
