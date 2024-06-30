import { ThreeDots } from "react-loader-spinner";
import { FC } from "react";

const Loader: FC = () => (
  <div className="loader-container">
    <ThreeDots
      height="80"
      width="80"
      radius="9"
      color="#3f51b5"
      ariaLabel="three-dots-loading"
      wrapperStyle={{}}
      visible={true}
    />
  </div>
);

export default Loader;
