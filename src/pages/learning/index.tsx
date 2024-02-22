import { Nabvar } from "../../components/navbar";
import { Topnav } from "../../components/navbar/topnav";
import styles from "./index.module.css";

type Props = {};

export const Learning = (_props: Props) => {
  return (
    <div className={styles.Wrapper}>
      <Topnav />
      <h1>
        Interest <span className="colorText">Groups</span>
      </h1>
      <div>
        <button className={styles.buttonStyle}>
          IoT Robotics and Digital Fabrications
        </button>
      </div>
      <Nabvar />
    </div>
  );
};
