import Button from "../../ui/Button";
import ButtonIcon from "../../ui/ButtonIcon";
import styles from "../../modules/HomePage.module.css";
import { FaCompass } from "react-icons/fa";

function Cta() {
  return (
    <div className={styles.cta}>
      <Button size={"large"} variation={"primary"}>
        <FaCompass /> Explore
      </Button>

      <ButtonIcon>Start Creating</ButtonIcon>
    </div>
  );
}

export default Cta;
