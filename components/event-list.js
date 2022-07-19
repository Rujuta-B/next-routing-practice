import EventItems from "./event-items";

const EventList = (props) => {
  const { items } = props;

  return (
    <ul>
      {items.map((item) => (
        <EventItems
          key={item.id}
          id={item.id}
          title={item.title}
          image={item.image}
          location={item.location}
          date={item.date}
        />
      ))}
    </ul>
  );
};

export default EventList;
