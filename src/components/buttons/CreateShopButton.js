import { MdAddCircle } from "react-icons/md";
import { ShopButtonStyled } from "../../styles";

const CreateShopButton = () => {
  return (
    <ShopButtonStyled>
      <MdAddCircle color="#ff85a2" size="1.5em" /> Product
    </ShopButtonStyled>
  );
};

export default CreateShopButton;
