import React from "react";
import EventList from "../components/events/event-list";
import EventsSearch from "../components/events/event-search";
import { getFeaturedEvents } from "../dummy-data";
import { useRouter } from "next/router";

const index = () => {
  const router = useRouter();

  const featuredEvents = getFeaturedEvents();

  const findEventsHandler = (year, month) => {
    const filteredEventsUrl = `/events/${year}/${month}`;
    router.push(filteredEventsUrl);
  };

  return (
    <div>
      <EventsSearch onSearch={findEventsHandler} />
      <EventList items={featuredEvents} />
    </div>
  );
};

export default index;
