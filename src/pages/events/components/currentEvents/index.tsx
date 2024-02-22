import { useNavigate } from "react-router-dom";
import {CurrentEvents } from "../../data";
import styles from "./index.module.css";

type Props = {};

export const CurrentEvent = (_props: Props) => {
  const navigate = useNavigate();

  const handleClick = (id: number) => () => {
    navigate(`/detailevent/${id}`, { state: { eventName: "CurrentEvents" } });
  };

  return (
    <div className={styles.Wrapper}>
      <h1>
        Current Events <span className="colorText">Events</span>
      </h1>
      <div className={styles.Container}>
        {CurrentEvents.map((item, index) => {
          return (
            <div
              key={index}
              onClick={handleClick(item.id)}
              className={styles.Card}
            >
              <img src={item.img} alt="" />
              <p>{item.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
