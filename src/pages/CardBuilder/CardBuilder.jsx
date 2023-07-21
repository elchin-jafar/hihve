import classes from "./CardBuilder.module.css";
import mainCube from "../../assets/cardBuilder/mainCube.svg";
import Button from "../../UI/Button/Button";
import { FlexInputs } from "../../UI/Input/Input";
import Input from "../../UI/Input/Input";

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
        <div className={classes.mainInputs}>
          <Input placeholder="Enter your card name" />
          <FlexInputs>
            <Input placeholder="Enter City" />
            <Input placeholder="College" />
          </FlexInputs>
          <Input placeholder="School" />
          <FlexInputs>
            <Input placeholder="Class" />
            <Input placeholder="Position" />
            <Input placeholder="State" />
          </FlexInputs>
          <Input type="Select" placeholder="Choose Level" />
          <FlexInputs>
            <Input type="date" placeholder="Date of birth" />
            <Input type="number" placeholder="Height" />
            <Input type="number" placeholder="Height" />
          </FlexInputs>
        </div>
      </div>
    </div>
  );
}

export default CardBuilder;
