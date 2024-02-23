import { useLocation } from "react-router-dom";
import styles from "./LCDisplay.module.css";
import { Topnav } from "../../../components/navbar/topnav";
import { Nabvar } from "../../../components/navbar";
type Props = {};

export const LCDisplay = (_props: Props) => {
    const location = useLocation();
    const { Igs, selectedIg } = location.state;
    const data = Igs.response;
    console.log(Igs)
    return (
        <>
            <Topnav />
            <div className={styles.Wrapper}>
                <h2 className={styles.igName}>{selectedIg.name}</h2>
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
