import { useLocation, useParams } from "react-router-dom";
import { CurrentEvents, PreviousEvents, UpComingEvents } from "../../data";

type RouteParams = {
  id: string;
};

type LocationState = {
  eventName: "UpComingEvents" | "CurrentEvents" | "PreviousEvents";
};

export const DetailEvent = () => {
  const { id } = useParams<RouteParams>();
  const location = useLocation();
  const { eventName } = location.state as LocationState;

  const eventId = Number(id);
  if (isNaN(eventId)) {
    return <div>Event ID is not specified or is invalid</div>;
  }

  const event = (() => {
    switch (eventName) {
      case "CurrentEvents":
        return CurrentEvents[eventId];
      case "UpComingEvents":
        return UpComingEvents[eventId];
      case "PreviousEvents":
        return PreviousEvents[eventId];
      default:
        return null; 
    }
  })();

  if (!event) {
    return <div>Event not found or eventName is not valid</div>;
  }

  return (
    <div>
      <h1>Event Details</h1>
      <img src={event.img} alt={event.name} />
      <h2>Name: {event.name}</h2>
      {event.id && <h2>Id: {event.id}</h2>}
    </div>
  );
};
