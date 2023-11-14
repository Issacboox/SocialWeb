import { Fragment } from "react";
import { Button, Icon, Item, ItemGroup, List, Segment, SegmentGroup } from "semantic-ui-react";
import EventListAttendee from "./EventListAttendee";

export default function EventListItem() {
  return (
    <Fragment>
      <SegmentGroup>
        <Segment>
          <ItemGroup>
            <Item>
              <Item.Image size="tiny" circular src="/user.png" />
              <Item.Content>
                <Item.Header>Event Title</Item.Header>
                <Item.Description>Hosted by bob</Item.Description>
              </Item.Content>
            </Item>
          </ItemGroup>
        </Segment>
        <Segment>
          <span>
            <Icon name="clock"/> Date
            <Icon name="marker"/> Venue
          </span>
        </Segment>
        <Segment secondary>
          <List horizontal>
            <EventListAttendee/>
            <EventListAttendee/>
            <EventListAttendee/>
          </List>
        </Segment>
        <Segment clearing>
          <span>Description of the Event</span>
          <Button color="teal" floated="right" content='View'/>
        </Segment>
      </SegmentGroup>
    </Fragment>
  );
}