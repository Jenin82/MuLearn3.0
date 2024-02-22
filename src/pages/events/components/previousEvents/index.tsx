import { useNavigate } from "react-router-dom";
import { PreviousEvents } from "../../data";
import styles from "./index.module.css";

type Props = {};

export const Previousevents = (_props: Props) => {
  const navigate = useNavigate();

  const handleClick = (id: number) => () => {
    navigate(`/detailevent/${id}`, { state: { eventName: "PreviousEvents" } });
  };

  return (
    <div className={styles.Wrapper}>
      <h1>
        Previous Events <span className="colorText">Events</span>
      </h1>
      <div>
        {PreviousEvents.map((item, index) => {
          return (
            <div
              key={index}
              onClick={handleClick(item.id)}
              className={styles.Card}
            >
              <img src={item.img} alt="" />
            </div>
          );
        })}
      </div>
    </div>
  );
};
