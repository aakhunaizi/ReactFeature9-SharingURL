import { Link } from "react-router-dom";
import { MdModeEdit } from "react-icons/md";
import { AddButtonStyled } from "../../styles";

const UpdateButton = ({ productSlug }) => {
  return (
    <AddButtonStyled>
      <Link to={`products/${productSlug}/edit`}>
        <MdModeEdit color="#ff85a2" size="1.5em" />
      </Link>
    </AddButtonStyled>
  );
};

export default UpdateButton;
