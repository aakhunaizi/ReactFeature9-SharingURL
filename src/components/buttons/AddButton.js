import { Link } from "react-router-dom";
import { MdAddCircle } from "react-icons/md";
import { AddButtonStyled } from "../../styles";

const AddButton = () => {
  return (
    <AddButtonStyled>
      <Link to="products/new">
        <MdAddCircle color="#ff85a2" size="1.5em" />
      </Link>
    </AddButtonStyled>
  );
};

export default AddButton;
