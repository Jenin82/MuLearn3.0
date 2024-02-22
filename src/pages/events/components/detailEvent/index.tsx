import { useLocation, useParams } from "react-router-dom";
import { CurrentEvents, PreviousEvents, UpComingEvents } from "../../data";
import styles from './index.module.css'
import { Nabvar } from "../../../../components/navbar";
type Props = {};

type Event = {
  id: number;
  img: string;
  name: string;
  link?: string;
  description?: string;
};

export const DetaliEvent = (_props: Props) => {
  const { id } = useParams<{ id: string }>();
  const location = useLocation();
  const { eventName } = location.state as { eventName: string };

  if (!id) {
    return <div>Event ID is missing in the URL.</div>;
  }

  const currentEvent = CurrentEvents[id as keyof typeof CurrentEvents] as
    | Event
    | undefined;
  const upcomingevents = UpComingEvents[id as keyof typeof UpComingEvents] as
    | Event
    | undefined;
  const previousevents = PreviousEvents[id as keyof typeof PreviousEvents] as
    | Event
    | undefined;

  return (
    <>
      <div className={styles.Wrapper}>

        {eventName === "UpComingEvents" && upcomingevents && (
          <div>
            <img src={upcomingevents.img} alt="" />
            <h2>{upcomingevents.name}</h2>
            <a href={upcomingevents.link}>Link</a>
            <p>{upcomingevents.description}</p>
          </div>
        )}
        {eventName === "CurrentEvents" && currentEvent && (
          <div>
            <img src={currentEvent.img} alt="" />
            <h2>{currentEvent.name}</h2>
            <a href={currentEvent.link}>Link</a>
            <p>{currentEvent.description}</p>
          </div>
        )}
        {eventName === "PreviousEvents" && previousevents && (
          <div>
            <img src={previousevents.img} alt="" />
            <h2>{previousevents.name}</h2>
            <a href={previousevents.link}>Link</a>
            <p>{previousevents.description}</p>
          </div>
        )}

      </div>
      <Nabvar />
    </>
  );
};
