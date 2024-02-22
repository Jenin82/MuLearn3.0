import { Nabvar } from "../../components/navbar";
import { Topnav } from "../../components/navbar/topnav";
import styles from "./index.module.css";
import { Landing } from "./components/landing";
const Home = () => {
  return (
    <div className={styles.Wrapper}>
      <Topnav />
      <Landing />
      <Nabvar />
    </div>
  );
};

export default Home;
