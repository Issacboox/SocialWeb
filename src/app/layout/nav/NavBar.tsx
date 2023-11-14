import { Button, Container, Menu, MenuItem } from "semantic-ui-react";
import logo from '../../../logo.png'
export default function NavBar() {
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