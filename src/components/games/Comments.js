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
          `http://localhost:3333/comments/game/${game_id}`
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

  return (
    <Container className="comments-container fluid">
      {comments &&
        comments.map((comment) => (
          <Card className="comments-card" key={comment._id}>
            <Row className="align-items-center">
              <Col xs={4} lg={2} className="justify-content-md-center">
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
                <Card.Text>{comment.author.username}</Card.Text>
                <Card.Text>{comment.comment}</Card.Text>
              </Col>
            </Row>
          </Card>
        ))}
    </Container>
  );
};

export default Comments;
