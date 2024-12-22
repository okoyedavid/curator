import styles from "../modules/Buttons.module.css";

function ButtonIcon({ children, onClick }) {
  return (
    <button onClick={onClick} className={styles.buttonIcon}>
      {children}
    </button>
  );
}

export default ButtonIcon;
