import NavItems from "./NavItems";
import classes from "./NavBar.module.css";

const NavBar = () => {
  return (
    <div className={classes.container}>
      <p>Logo</p>
      <ul className={classes.navbar}>
        <NavItems>
          <li>Home</li>
          <li>Contact</li>
          <li>About</li>
        </NavItems>
      </ul>
    </div>
  );
};

export default NavBar;
