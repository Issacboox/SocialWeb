import { Fragment } from "react";
import { List, Image } from "semantic-ui-react";

export default function EventListAttendee() {
  return (
    <Fragment>
      <List.Item>
        <Image size='mini' circular src='/user.png' />
      </List.Item>
    </Fragment>
  )
}
