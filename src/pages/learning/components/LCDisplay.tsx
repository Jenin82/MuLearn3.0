import { useLocation } from "react-router-dom";
import styles from "./LCDisplay.module.css";
import { Topnav } from "../../../components/navbar/topnav";
import { Nabvar } from "../../../components/navbar";
type Props = {};

export const LCDisplay = (_props: Props) => {
  const location = useLocation();
  const { Igs } = location.state;
  const data = Igs.response.data;
  return (
    <>
      <Topnav />
      <div className={styles.Wrapper}>
        {data.map((ig: any, index: number) => {
          return (
            <div className={styles.ig} key={index}>
              <h2>{ig.name}</h2>
            </div>
          );
        })}
      </div>
      <Nabvar />
    </>
  );
};
