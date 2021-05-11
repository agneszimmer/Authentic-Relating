import "../../css/Community.css";
/* import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; */
import { useEffect, useState, useContext } from "react";
import { Container, Button, Card, Row, Col } from "react-bootstrap";
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
        setEvents(jsonData);
        console.log(events);
        const sortedEvents = events.sort((a, b) => b.date - a.date);
        console.log(sortedEvents);
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
    let month = newDate.getMonth() + 1;
    let day = newDate.getDate();
    let year = newDate.getFullYear() - 2000;
    if (day < 10) {
      day = "0" + day;
    }
    if (month < 10) {
      month = "0" + month;
    }
    return day + "." + month + "." + year;
  };
  /* 
  const formatTime = (date) => {
    const newDate = new Date(date);
    let hours = newDate.getHours();
    let min = newDate.getMinutes();
    if (min < 10) {
      min = "0" + min;
    }
    return hours + ":" + min;
  }; */

  return (
    <Container className="events-container justify-content-center fluid">
      {events &&
        events.map((event) => (
          <Card className="events-card" key={event._id}>
            <Row className="align-items-center">
              <Col
                style={{ backgroundColor: "#C0C0C0" }}
                className="col-sm-2 text-right"
              >
                <h3>{formatDate(event.date)}</h3>
                {event.enddate && (
                  <>
                    <h4> - </h4>
                    <h3>{formatDate(event.enddate)}</h3>
                  </>
                )}
                <h4>{event.time}</h4>
              </Col>

              <Col className="md-10">
                <h3 className="text-uppercase">
                  <strong>{event.title}</strong>
                </h3>
                <ul className="list-inline">
                  <li className="list-inline-item">
                    <i className="fa fa-clock-o" aria-hidden="true"></i>
                    {event.time}
                  </li>
                  <li className="list-inline-item">
                    <i className="fa fa-location-arrow" aria-hidden="true"></i>
                    {event.location}
                  </li>
                  <li className="list-inline-item">
                    {"   "}
                    Contact:{"  "}
                    <Link
                      style={{ color: "#606060" }}
                      target="_blank"
                      to={{ pathname: `${event.contact}` }}
                    >
                      {event.contact}
                    </Link>
                  </li>
                </ul>
                <p>{event.description}</p>
              </Col>
            </Row>
          </Card>
        ))}
    </Container>
  );
};

export default Events;
