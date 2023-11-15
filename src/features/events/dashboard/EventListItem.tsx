/* eslint-disable @typescript-eslint/no-explicit-any */
import { Fragment } from "react";
import {
  Button,
  Icon,
  Item,
  ItemGroup,
  List,
  Segment,
  SegmentGroup,
} from "semantic-ui-react";
import EventListAttendee from "./EventListAttendee";
import { AppEvent } from "../../../app/types/event";

type Props = {
  event : AppEvent
  selectedEvent:(event:AppEvent)=> void
  deleteEvents:(event:string)=>void
}

export default function EventListItem({ event,selectedEvent,deleteEvents }: Props) {
  return (
    <Fragment>
      <SegmentGroup>
        <Segment>
          <ItemGroup>
            <Item>
              <Item.Image size="tiny" circular src={event.hostPhotoURL || '/user.png'} />
              <Item.Content>
                <Item.Header>{event.title}</Item.Header>
                <Item.Description>Hosted by {event.hostedBy}</Item.Description>
              </Item.Content>
            </Item>
          </ItemGroup>
        </Segment>
        <Segment>
          <span>
            <Icon name="clock" /> {event.date}
            <Icon name="marker" /> {event.venue}
          </span>
        </Segment>
        <Segment secondary>
          <List horizontal>
            {event.attendees.map((attendee) => (
              <EventListAttendee key={attendee.id} attendees={attendee} />
            ))}
          </List>
        </Segment>
        <Segment clearing>
          <span>{event.description}</span>
          <Button color="red" floated="right" content="Delete" onClick={()=> deleteEvents(event.id)} />
          <Button color="teal" floated="right" content="View" onClick={()=> selectedEvent(event)} />
        </Segment>
      </SegmentGroup>
    </Fragment>
  );
}
