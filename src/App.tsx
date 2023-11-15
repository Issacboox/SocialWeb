import { Container } from "semantic-ui-react";
import NavBar from "./app/layout/nav/NavBar";
import EventDashboard from "./features/events/dashboard/EventDashboard";
import { Fragment, useState } from "react";
import { AppEvent } from "./app/types/event";

function App() {
  const [formOpen, setFormOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState<AppEvent | null>(null);

  function handleSelectEvent(event: AppEvent | null) {
    setSelectedEvent(event);
    setFormOpen(true);
  }

  function handleCreateFormOpen(){
    setSelectedEvent(null);
    setFormOpen(true);
  }
  return (
    <Fragment>
      <NavBar setFormOpen={handleCreateFormOpen} />
      <Container className="main">
        <EventDashboard
          selectedEvent={selectedEvent}
          selectEvent={handleSelectEvent}
          formOpen={formOpen}
          setFormOpen={setFormOpen}
        />
      </Container>
    </Fragment>
  );
}

export default App;
