import { Container } from "semantic-ui-react"
import NavBar from "./app/layout/nav/NavBar"
import EventDashboard from "./features/events/dashboard/EventDashboard"
import { Fragment } from "react"


function App() {


  return (
    <Fragment>
      <NavBar/>
      <Container className="main">
        <EventDashboard/>
      </Container>
    </Fragment>
   
  )
}

export default App
