import { Nabvar } from "../../components/navbar";
// import { Topnav } from "../../components/navbar/topnav";
import styles from "./index.module.css";

type Props = {};

export const Profile = (_props: Props) => {
  return (
    <div className={styles.Wrapper}>
     
      <iframe src="https://app.mulearn.org/" frameBorder="0"></iframe>
      <Nabvar />
    </div>
  );
};
