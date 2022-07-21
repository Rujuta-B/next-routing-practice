import React from "react";
import EventList from "../components/events/event-list";
import EventsSearch from "../components/events/event-search";
import { getFeaturedEvents } from "../dummy-data";

const index = () => {
  const featuredEvents = getFeaturedEvents();
  return (
    <div>
      <EventsSearch />
      <EventList items={featuredEvents} />
    </div>
  );
};

export default index;
