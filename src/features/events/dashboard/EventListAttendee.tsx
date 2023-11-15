/* eslint-disable @typescript-eslint/no-explicit-any */
import { Fragment } from "react";
import { List, Image } from "semantic-ui-react";
import { Attendee } from "../../../app/types/event";

type Props = {
  attendees : Attendee
}

export default function EventListAttendee({ attendees }: Props) {

  return (
    <Fragment>
      <List.Item >
        <Image size='mini' circular src={attendees.photoURL} />
      </List.Item>
    </Fragment>
  );
}
