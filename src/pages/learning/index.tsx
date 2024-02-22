import { Nabvar } from "../../components/navbar";
import { Topnav } from "../../components/navbar/topnav";
import ig from "./ig.json"
import styles from "./index.module.css";
type Props = {};

const interestGroups = ig.response.interestGroup.map((interestGroup) => {
  return { id: interestGroup.id, name: interestGroup.name }
})

export const Learning = (_props: Props) => {



  return (
    <div className={styles.Wrapper}>
      <Topnav />
      <h1>
        Interest <span className="colorText">Groups</span>
      </h1>
      <div>
        {interestGroups.map((ig) => {
          return (
            <button className={styles.buttonStyle} key={ig.id} onClick={() => { }}>
              {ig.name}
            </button>
          )
        })}
      </div>
      <Nabvar />
    </div>
  );
};
