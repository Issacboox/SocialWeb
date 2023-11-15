/* eslint-disable @typescript-eslint/no-explicit-any */
import { Fragment } from "react";
import EventListItem from "./EventListItem";
import { AppEvent } from "../../../app/types/event";
type Props = {
  events : AppEvent[]
  selectedEvent:(event: AppEvent) => void
  deleteEvents:(eventId: string) => void
}

export default function EventList({events, selectedEvent,deleteEvents}: Props) {
  return (
    <Fragment>
      {events.map((event: any) => {
        return <EventListItem event={event} key={event.id} selectedEvent={selectedEvent} deleteEvents={deleteEvents} />;
      })}
    </Fragment>
  );
}
