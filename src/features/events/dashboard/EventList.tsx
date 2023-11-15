/* eslint-disable @typescript-eslint/no-explicit-any */
import { Fragment } from "react";
import EventListItem from "./EventListItem";
import { AppEvent } from "../../../app/types/event";
type Props = {
  events : AppEvent[]
}

export default function EventList({events}: Props) {
  return (
    <Fragment>
      {events.map((event: any) => {
        return <EventListItem event={event} key={event.id} />;
      })}
    </Fragment>
  );
}
