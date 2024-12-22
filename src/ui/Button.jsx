import styles from "../modules/Buttons.module.css";

function Button({ children, size, variation, ...rest }) {
  return (
    <button
      className={`${styles.btn} ${styles[size]} ${styles[variation]}`}
      {...rest}
    >
      {children}
    </button>
  );
}

export default Button;
