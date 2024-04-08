import { ClipLoader } from "react-spinners";

const Spinner = () => {
  return (
    <div className="h-[100dvh] flex items-center justify-center">
      <ClipLoader color="#FF9800" size={45} />
    </div>
  );
};

export default Spinner;
