import NavBar from "../Navbar/NavBar";
import classes from "./Header.module.css";

const Header = () => {
  return (
    <header className={classes.header}>
      <NavBar />
    </header>
  );
};

export default Header;
