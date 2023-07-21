import styles from "./button.module.css";

function Button({ primary, secondary, content }) {
  if (primary)
    return (
      <button className={`${styles.btn} ${styles.primaryBtn}`}>
        {content}
      </button>
    );
  if (secondary)
    return (
      <button className={`${styles.btn} ${styles.secondaryBtn}`}>
        {content}
      </button>
    );
}

export default Button;
