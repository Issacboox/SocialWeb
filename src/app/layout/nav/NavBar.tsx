import { Button, Container, Menu, MenuItem } from "semantic-ui-react";
import logo from '../../../logo.png'

type Props = {
  setFormOpen: (value:boolean) => void;
}

export default function NavBar({setFormOpen}: Props) {
  return (
    <Menu inverted={true} fixed="top">
      <Container>
        <MenuItem header>
          <img src={logo} alt="logo" />
          Revents
        </MenuItem>
        <MenuItem name="Events" />
        <MenuItem>
          <Button
            floated="right"
            positive={true}
            inverted={true}
            onClick={() => setFormOpen(true)}
            content="Create Event"
          />
        </MenuItem>
        <MenuItem position="right">
          <Button basic inverted content="Login" />
          <Button
            basic
            inverted
            content="Register"
            style={{ marginLeft: "0.5em" }}
          />
        </MenuItem>
      </Container>
    </Menu>
  );
}
