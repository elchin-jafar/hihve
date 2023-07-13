import Logo from "../../assets/HIHVE_Logo_WHITE_1.svg";
import SearchIcon from "../../assets/search.svg";
import Lock from "../../assets/Lock.svg";
import Menu from "../../assets/Menu.svg";

import classes from "./header.module.css";

function Header() {
  return (
    <div className={classes.main}>
      <div className={classes.leftSide}>
        <img src={Logo} alt="" />
        <p>Menu One / Menu Two / Menu Three / Menu Four</p>
      </div>
      <div className={classes.rightSide}>
        <img src={SearchIcon} alt="search icon" />
        <div className={classes.signIn}>
          <img src={Lock} alt="lock icon" />
          <p>Sign in</p>
        </div>
        <img src={Menu} alt="menu icon" />
      </div>
    </div>
  );
}

export default Header;
