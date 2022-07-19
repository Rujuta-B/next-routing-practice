import React from "react";
import EventList from "../components/event-list";
import { getFeaturedEvents } from "../dummy-data";

const index = () => {
  const featuredEvents = getFeaturedEvents();
  return (
    <div>
      <EventList items={featuredEvents} />
    </div>
  );
};

export default index;
