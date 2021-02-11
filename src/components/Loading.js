import BounceLoader from "react-spinners/BounceLoader";
import { LoadingWrapper, Title } from "../styles";

const LoadingScreen = () => {
  return (
    <>
      <LoadingWrapper>
        <Title style={{ marginRight: "2%" }}>Baking delicious cookies...</Title>
        <BounceLoader color="pink" size={300} />
      </LoadingWrapper>
    </>
  );
};

export default LoadingScreen;
