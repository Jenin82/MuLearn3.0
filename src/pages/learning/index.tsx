import { Nabvar } from "../../components/navbar";
import { Topnav } from "../../components/navbar/topnav";
import styles from "./index.module.css";

type Props = {};

export const Learning = (_props: Props) => {
  return (
    <div className={styles.Wrapper}>
      <Topnav />
      <Nabvar />
    </div>
  );
};
