import classes from "./NavItems.module.css";

const NavItems = (props) => {
  return <li className={classes.navitems}>{props.children}</li>;
};

export default NavItems;
