import "../../css/Games.css";
import React, { useState, useEffect, useContext } from "react";
import Loading from "../Loading.js";
import { AuthContext } from "../../context/AuthContext";
import { Card, Button, Form, Collapse, Fade } from "react-bootstrap";

const PostComment = ({ game, setComments }) => {
  const [open, setOpen] = useState(false);

  const {
    isAuthenticated,
    activeUser,
    loading,
    setLoading,
    error,
    setError,
  } = useContext(AuthContext);

  const [formState, setFormState] = useState({
    author: "",
    game_ref: "",
    comment: "",
  });
  const { comment } = formState;

  const onChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
      author: activeUser._id,
      game_ref: game._id,
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    for (const field in formState) {
      if (!formState[field])
        return alert("please write something before you submit");
    }

    try {
      const res = await fetch("http://localhost:3333/comments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formState),
      });
      const { newComment, error } = await res.json();
      console.log(newComment);
      setComments((prev) => [newComment, ...prev]);
      setFormState({
        author: "",
        game_ref: "",
        comment: "",
      });
      setError(error);
    } catch (error) {
      setError(error);
    }
  };

  if (loading) return <Loading />;
  if (error) console.log(error);

  return (
    <Card className="comment-card">
      {isAuthenticated ? (
        <>
          <Button
            onClick={() => setOpen(!open)}
            aria-controls="collapse-comment"
            aria-expanded={open}
          >
            Share your experiences with {game.title}
          </Button>
          <Collapse in={open}>
            <div id="collapse-comment">
              <Form onSubmit={onSubmit}>
                <Form.Control
                  type="textarea"
                  name="comment"
                  value={comment}
                  placeholder="write a comment..."
                  rows="5"
                  onChange={onChange}
                ></Form.Control>
              </Form>
              <br />
              <Button
                type="submit"
                onClick={onSubmit}
                className="btn btn-info pull-right"
              >
                Post
              </Button>
            </div>
          </Collapse>
        </>
      ) : (
        <Button>Log in to share your experiences with {game.title}</Button>
      )}
    </Card>
  );
};

export default PostComment;
