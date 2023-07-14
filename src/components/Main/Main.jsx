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
        <div class={classes["form-input-name"]}>
          <input type="text" placeholder="Enter your name" id="name" />
          <label for="name">Name</label>
        </div>

        <div className={classes["lower-inputs-container"]}>
          <div class={classes["form-input-date"]}>
            <input type="date" placeholder="Enter your name" id="date" />
            <label for="date">Date of birth</label>
          </div>
          <div class={classes["form-input-height"]}>
            <input type="text" placeholder="Enter your name" id="height" />
            <label for="height">Height</label>
          </div>
          <div class={classes["form-input-height"]}>
            <input type="text" placeholder="Enter your name" id="height2" />
            <label for="height2">Height</label>
          </div>
        </div>
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
