import { Container } from "semantic-ui-react"
import NavBar from "./app/layout/nav/NavBar"
import EventDashboard from "./features/events/dashboard/EventDashboard"
import { Fragment, useState } from "react"


function App() {

  const [formOpen, setFormOpen] = useState(false);

  return (
    <Fragment>
      <NavBar setFormOpen={setFormOpen}/>
      <Container className="main">
        <EventDashboard formOpen={formOpen} setFormOpen={setFormOpen}/>
      </Container>
    </Fragment>
   
  )
}

export default App
