import { cn } from "../../../utils/helpers";

const Title = ({ title = "", className = "" }) => {
  return (
    <p className={cn("text-[#2C2C2C] font-bold leading-6", className)}>
      {title}
    </p>
  );
};

export default Title;
