import classes from "./profileBuilder.module.css";

function ProfileBuilder() {
  return (
    <div className={classes.main}>
      <p>&#9664; Profile</p>
      <h1 className={classes.centeredElement}>DJ WAGNER | PROFILE BUILDER</h1>
      <div className={classes.btnContainer}>
        <button className={`${classes.btn} ${classes.primaryBtn}`}>
          Save Edits
        </button>
        <button className={`${classes.btn} ${classes.secondaryBtn}`}>
          Create Card
        </button>
      </div>
    </div>
  );
}

export default ProfileBuilder;
