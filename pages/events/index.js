import React from "react";
import EventList from "../../components/events/event-list";
import { getAllEvents } from "../../dummy-data";

const index = () => {
  const events = getAllEvents();

  return (
    <div>
      <EventList items={events} />
    </div>
  );
};

export default index;
