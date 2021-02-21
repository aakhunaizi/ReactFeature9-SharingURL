import { useState } from "react";
import { signin } from "../store/actions/authActions";
import { useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { BackButtonStyled, CreateButtonStyled, ListWrapper } from "../styles";
import { Helmet } from "react-helmet";

const Signin = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const handleChange = (event) =>
    setUser({ ...user, [event.target.name]: event.target.value });

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(signin(user, history));
  };

  return (
    <>
      <Helmet>
        <title>Sign In</title>
      </Helmet>
      <ListWrapper>Sign In</ListWrapper>
      <div className="form-group">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Username</label>
            <input
              name="username"
              value={user.username}
              type="text"
              className="form-control"
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              name="password"
              value={user.password}
              type="password"
              className="form-control"
              onChange={handleChange}
            />
          </div>
          <CreateButtonStyled onSubmit={handleSubmit}>
            Sign In
          </CreateButtonStyled>
          <Link to="/">
            <BackButtonStyled>Back</BackButtonStyled>
          </Link>
        </form>
      </div>
    </>
  );
};

export default Signin;
