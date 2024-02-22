import styles from "./index.module.css";
type Props = {};

export const Landing = (_props: Props) => {
  return (
    <div className={styles.Wrapper}>
      <div className={styles.header}>
        <h1>
          Let's&nbsp;<span className="colorText">break the Echo Chambers</span>{" "}
        </h1>
        <h1>Together.</h1>
      </div>
      <button>Join</button>
      <img src="" alt="" />
    </div>
  );
};
