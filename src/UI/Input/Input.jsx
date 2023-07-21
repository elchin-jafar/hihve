import classes from "./Input.module.css";

function Input({ type = "text", width, placeholder, flex }) {
  return (
    <div style={{ width, flex }} class={classes["form-input"]}>
      <input type={type} placeholder={placeholder} id={placeholder} />
      <label for={placeholder}>{placeholder}</label>
    </div>
  );
}

export function FlexInputs({ children }) {
  return <div className={classes["flex-inputs"]}>{children}</div>;
}

export default Input;
