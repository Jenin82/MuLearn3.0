import { Nabvar } from "../../components/navbar";
import { Topnav } from "../../components/navbar/topnav";
import { UpComing } from "./components/upComing";
import styles from "./index.module.css";

type Props = {};

export const Events = (_props: Props) => {
  return (
    <div className={styles.Wrapper}>
      <Topnav />
      <UpComing />

      <Nabvar />
    </div>
  );
};
