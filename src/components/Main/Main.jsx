import classes from "./main.module.css";

import Component2 from "../../assets/Component2.svg";
import box3d from "../../assets/3dBox.svg";

function ElementHeader({ children }) {
  return <p className={classes.formHeader}>{children}</p>;
}

function Main() {
  return (
    <div className={classes.main}>
      <div className={classes.element}>
        <ElementHeader>General Information</ElementHeader>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" />
        <label htmlFor="date">Date of birth</label>
        <input type="date" id="date" />
        <label htmlFor="height">Height</label>
        <input type="text" id="height" />
        <label htmlFor="height2">Height</label>
        <input type="text" id="height2" />
      </div>

      <div className={classes.element}>
        <ElementHeader>Upload Your Profile Picture</ElementHeader>
        <p className={classes.info}>
          File types supported: JPG, PNG, Max size: 50 MB
        </p>
        <img
          src={Component2}
          alt="upload icon"
          className={classes.uploadIcon}
        />
        <button className={classes.browseBtn}>Browse Computer</button>
      </div>

      <div className={classes.element}>
        <ElementHeader>Saved Templates</ElementHeader>
        <div className={classes.boxContainer}>
          <img src={box3d} alt="3d box" className={classes.threeDBox} />
          <img src={box3d} alt="3d box" className={classes.threeDBox} />
        </div>
      </div>
    </div>
  );
}

export default Main;
