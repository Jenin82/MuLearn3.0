import { useLocation, useParams } from "react-router-dom";
import { CurrentEvents, PreviousEvents, UpComingEvents } from "../../data";

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
      <div>
        <h1>{id}</h1>
        {eventName === "UpComingEvents" && upcomingevents && (
          <div>
            <img src={upcomingevents.img} alt="" />
            <h2>Nome: {upcomingevents.name}</h2>
            <h2>id: {upcomingevents.id}</h2>
          </div>
        )}
        {eventName === "CurrentEvents" && currentEvent && (
          <div>
            <img src={currentEvent.img} alt="" />
            <h2>Nome: {currentEvent.name}</h2>
            <h2>id: {currentEvent.id}</h2>
          </div>
        )}
        {eventName === "PreviousEvents" && previousevents && (
          <div>
            <img src={previousevents.img} alt="" />
            <h2>Nome: {previousevents.name}</h2>
            <h2>id: {previousevents.id}</h2>
          </div>
        )}
      </div>
    </>
  );
};
