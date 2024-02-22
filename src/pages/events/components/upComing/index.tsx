import { useNavigate } from "react-router-dom";
import { UpComingEvents } from "../../data";
import styles from "./index.module.css";

type Props = {};

export const UpComing = (_props: Props) => {
  const navigate = useNavigate();


  const handleClick = (id: number) => () => {
    navigate(`/detailevent/${id}`, { state: { eventName: "UpComingEvents" } });
  };

  return (
    <div className={styles.Wrapper}>
      <h1>
        Upcoming Coming <span className="colorText">Events</span>
      </h1>
      <div>
        {UpComingEvents.map((item, index) => {
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
