import style from "../modules/loaders.module.css";

function SpinnerFullPage() {
  return (
    <div className={style.spinner}>
      <div className={style.fullPageSpinner}></div>;
    </div>
  );
}

export default SpinnerFullPage;
