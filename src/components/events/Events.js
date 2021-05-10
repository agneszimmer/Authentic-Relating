import "../../App.css";
import { useEffect, useState, useContext } from "react";
import { Container, Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import Loading from "../Loading";

const Events = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {
    const getEvents = async () => {
      setLoading(true);
      try {
        const response = await fetch("https://arg-api.herokuapp.com/events");
        const jsonData = await response.json();
        console.log(jsonData);
        setEvents(jsonData);
      } catch (err) {
        console.log(err.message);
      }
      setLoading(false);
    };
    getEvents();
  }, []);

  if (loading) return <Loading />;
  if (error) return <div>Error: {error.message}</div>;

  //display date
  let date = new Date();
  const formatDate = (date) => {
    const newDate = new Date(date);
    let year = newDate.getFullYear();
    let month = newDate.getMonth() + 1;
    let day = newDate.getDate() + 1;
    if (day < 10) {
      day = "0" + day;
    }
    if (month < 10) {
      month = "0" + month;
    }
    return month + "/" + day + "/" + year;
  };

  return (
    <Container className="events-container fluid">
      {events &&
        events.map((event) => (
          <Card className="events-card" key={event._id}>
            <Card.Header>{event.title}</Card.Header>
            <Card.Body>
              <Card.Text>{formatDate(event.date)}</Card.Text>
              <Card.Text>{event.description}</Card.Text>
              <Link to={`/events/${event._id}`}>
                <Button variant="light">book</Button>
              </Link>
            </Card.Body>
          </Card>

          /*       <div className="row row-striped">
        <div className="col-2 text-right">
          <h1 className="display-4">
            <span className="badge badge-secondary">23</span>
          </h1>
          <h2>OCT</h2>
        </div>
        <div className="col-10">
          <h3 className="text-uppercase">
            <strong>Ice Cream Social</strong>
          </h3>
          <ul className="list-inline">
            <li className="list-inline-item">
              <i className="fa fa-calendar-o" aria-hidden="true"></i> Monday
            </li>
            <li className="list-inline-item">
              <i className="fa fa-clock-o" aria-hidden="true"></i> 12:30 PM -
              2:00 PM
            </li>
            <li className="list-inline-item">
              <i className="fa fa-location-arrow" aria-hidden="true"></i> Cafe
            </li>
          </ul>
          <p>
            Lorem ipsum dolsit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div> */
        ))}
    </Container>
  );
};

export default Events;
