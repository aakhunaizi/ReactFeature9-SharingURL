// Styling
import { ThemeButton, LogoDark, LogoLight, NavProduct } from "../styles";
const NavBar = (props) => {
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
        <NavProduct
          to="/signup"
          className="nav-item"
          style={{ padding: "0.25em 1em" }}
        >
          Sign Up
        </NavProduct>
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
        <ThemeButton className="nav-item" onClick={props.toggleTheme}>
          {props.currentTheme === "light" ? "Dark" : "Light"} Mode
        </ThemeButton>
      </div>
    </nav>
  );
};

export default NavBar;
