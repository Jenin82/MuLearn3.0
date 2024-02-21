import { Nabvar } from "../../components/navbar";
import styles from "./Home.module.css";
import { Landing } from "./components/landing";
const Home = () => {
  return <div className={styles.Wrapper}>
    <Landing />
    <Nabvar />
  </div>;
};

export default Home;
