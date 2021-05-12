import "../../css/Games.css";
import React, { useState, useEffect } from "react";
import { Container, Button, Card, Row, Col, Image } from "react-bootstrap";
import Loading from "../Loading.js";
import { useParams } from "react-router-dom";

const Comments = ({ game, comments, setComments }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  const { game_id } = useParams();

  useEffect(() => {
    const getComments = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `https://arg-api.herokuapp.com/comments/game/${game_id}`
        );
        const jsonData = await response.json();
        setComments(jsonData);
        console.log(comments);
      } catch (err) {
        console.log(err.message);
      }
      setLoading(false);
    };
    getComments();
  }, []);

  if (loading) return <Loading />;

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

  return (
    <Container className="comments-container fluid">
      {comments &&
        comments.map((comment) => (
          <Card className="comments-card" key={comment._id}>
            <Row className="align-items-center">
              <Col xs={4} sm={3} lg={2} className="justify-content-md-center">
                <Image
                  className="comment-picture"
                  src={
                    comment.author.image
                      ? `http://localhost:3333/${comment.author.image}`
                      : "https://thumbs.dreamstime.com/b/default-avatar-profile-image-vector-social-media-user-icon-potrait-182347582.jpg"
                  }
                  roundedCircle
                  style={{ width: 100, radius: 50 }}
                />
              </Col>

              <Col className="comment-text">
                <h5>
                  {comment.author.username} wrote at {formatDate(comment.date)}
                </h5>

                <p>{comment.comment}</p>
              </Col>
            </Row>
          </Card>
        ))}
    </Container>
  );
};

export default Comments;
