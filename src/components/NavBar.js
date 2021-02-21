// Styling
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { signout } from "../store/actions/authActions";
import {
  ThemeButton,
  LogoDark,
  LogoLight,
  NavProduct,
  SignOutStyled,
} from "../styles";
const NavBar = (props) => {
  const user = useSelector((state) => state.authentication.user);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleSignout = () => {
    dispatch(signout());
    history.push("/");
  };

  return (
    <nav className="navbar navbar-expand">
      {props.currentTheme === "light" ? (
        <LogoDark to="/">
          <img
            src="https://media.discordapp.net/attachments/797449550616068106/804257167925706762/light-logo.png?width=1440&height=573"
            alt="Logo"
            className="navbar-brand img-responsive"
          />
        </LogoDark>
      ) : (
        <LogoLight to="/">
          <img
            src="https://media.discordapp.net/attachments/797449550616068106/804257171373162526/dark-logo.png?width=1440&height=573"
            alt="Logo"
            className="navbar-brand img-responsive"
          />
        </LogoLight>
      )}
      <div className="navbar-nav ml-auto">
        {user ? (
          <p style={{ padding: "0.25em 1em", whiteSpace: "nowrap" }}>
            Hello, {user.firstName}!
          </p>
        ) : (
          <>
            <NavProduct
              to="/signup"
              className="nav-item"
              style={{ padding: "0.25em 1em", whiteSpace: "nowrap" }}
            >
              Sign Up
            </NavProduct>
            <NavProduct
              to="/signin"
              className="nav-item"
              style={{ padding: "0.25em 1em", whiteSpace: "nowrap" }}
            >
              Sign In
            </NavProduct>
          </>
        )}
        {user && (
          <>
            <SignOutStyled
              style={{ height: "20%", whiteSpace: "nowrap" }}
              onClick={handleSignout}
            >
              Sign Out
            </SignOutStyled>
            <NavProduct
              to="/products"
              className="nav-item"
              style={{ padding: "0.25em 1em" }}
            >
              Products
            </NavProduct>
            <NavProduct
              to="/shops"
              className="nav-item"
              style={{ padding: "0.25em 1em" }}
            >
              Shops
            </NavProduct>
          </>
        )}

        <ThemeButton
          className="nav-item"
          onClick={props.toggleTheme}
          style={{ height: "20%", whiteSpace: "nowrap" }}
        >
          {props.currentTheme === "light" ? "Dark" : "Light"} Mode
        </ThemeButton>
      </div>
    </nav>
  );
};

export default NavBar;
