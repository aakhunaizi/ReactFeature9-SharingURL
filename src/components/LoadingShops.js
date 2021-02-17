import PulseLoader from "react-spinners/PulseLoader";
import { LoadingWrapper, Title } from "../styles";

const LoadingShops = () => {
  return (
    <>
      <LoadingWrapper>
        <Title style={{ marginRight: "2%" }}>Finding shops</Title>
        <PulseLoader color="pink" size={20} />
      </LoadingWrapper>
    </>
  );
};

export default LoadingShops;
