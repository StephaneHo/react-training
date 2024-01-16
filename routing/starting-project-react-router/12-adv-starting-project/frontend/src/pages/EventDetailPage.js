import { useParams } from "react-router-dom";

export const EventDetailPage = () => {
  const params = useParams();
  return <h1>Event Detail Page {params.eventId}</h1>;
};
