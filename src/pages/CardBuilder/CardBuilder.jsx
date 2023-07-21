import classes from "./CardBuilder.module.css";
import mainCube from "../../assets/cardBuilder/mainCube.svg";
import Button from "../../UI/Button/Button";

function CardBuilder() {
  return (
    <div className={classes.container}>
      <div className={classes.left}>
        <img src={mainCube} alt="main Cube" />
      </div>
      <div className={classes.right}>
        <div className={classes.btns}>
          <Button secondary content="Info" />
          <Button secondary content="Front" />
          <Button secondary content="Back" />
          <Button secondary content="Left" />
          <Button secondary content="Right" />
        </div>
        <div className={classes.mainInputs}></div>
      </div>
    </div>
  );
}

export default CardBuilder;
