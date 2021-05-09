import "../../css/Games.css";
import React, { useState, useEffect } from "react";
import { Container, Button, Card, Row, Col } from "react-bootstrap";
import Loading from "../Loading.js";

const Comments = ({ game }) => {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {
    const getComments = async () => {
      setLoading(true);
      try {
        const response = await fetch("https://arg-api.herokuapp.com/comments");
        const jsonData = await response.json();
        setComments(jsonData);
      } catch (err) {
        console.log(err.message);
      }
      setLoading(false);
    };
    getComments();
  }, []);

  return (
    <Card className="comments-card">
      <Row>
        <Col className="col-md-8 col-sm-12">
          <div className="panel-body">
            <div className="clearfix"></div>
            <hr />
            <ul className="media-list">
              <li className="media">
                <a href="#" className="pull-left">
                  <img
                    src="https://bootdey.com/img/Content/user_1.jpg"
                    alt=""
                    className="img-circle"
                  />
                </a>
                <div className="media-body">
                  <span className="text-muted pull-right">
                    <small className="text-muted">30 min ago</small>
                  </span>
                  <strong className="text-success">@MartinoMont</strong>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Lorem ipsum dolor sit amet,{" "}
                    <a href="#">#consecteturadipiscing </a>.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </Col>
      </Row>
    </Card>
  );
};

export default Comments;
