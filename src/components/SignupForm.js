import { useState } from "react";
import { signup } from "../store/actions/authActions";
import { useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { BackButtonStyled, CreateButtonStyled, ListWrapper } from "../styles";
import { Helmet } from "react-helmet";

const Signup = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    username: "",
    password: "",
    email: "",
  });

  const handleChange = (event) =>
    setUser({ ...user, [event.target.name]: event.target.value });

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(signup(user, history));
  };

  return (
    <>
      <Helmet>
        <title>Sign Up</title>
      </Helmet>
      <ListWrapper>Sign Up</ListWrapper>
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
          <div className="form-group row">
            <div className="col-6">
              <label>First Name</label>
              <input
                name="firstName"
                value={user.firstName}
                type="text"
                className="form-control"
                onChange={handleChange}
              />
            </div>
            <div className="col-6">
              <label>Last Name</label>
              <input
                name="lastName"
                value={user.lastName}
                type="text"
                className="form-control"
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              name="email"
              value={user.email}
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
            Sign Up
          </CreateButtonStyled>
          <Link to="/">
            <BackButtonStyled>Back</BackButtonStyled>
          </Link>
        </form>
      </div>
    </>
  );
};

export default Signup;
