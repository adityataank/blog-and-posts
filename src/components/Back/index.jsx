import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

function Back() {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <ArrowLeft size={28} className="cursor-pointer" onClick={handleBack} />
  );
}

export default Back;
