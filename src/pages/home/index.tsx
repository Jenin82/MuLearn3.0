import { Nabvar } from "../../components/navbar";
import { Topnav } from "../../components/navbar/topnav";
import styles from "./index.module.css";
import { Landing } from "./components/landing";
import { WhatISMu } from "./components/whatISMu";
const Home = () => {
  return (
    <div className={styles.Wrapper}>
      <Topnav />
      <Landing />
      <WhatISMu />
      <Nabvar />
    </div>
  );
};

export default Home;
