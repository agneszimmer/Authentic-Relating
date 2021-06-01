import "../../css/Games.css";
import React, { useState, useEffect, useContext } from "react";
import Loading from "../Loading.js";
import { AuthContext } from "../../context/AuthContext";
import { Card, Button, Form, Collapse, Row, Col } from "react-bootstrap";

const PostNote = ({ game, setNotes }) => {
  const [open, setOpen] = useState(false);

  const { activeUser, loading, setLoading, error, setError } = useContext(
    AuthContext
  );

  const [formState, setFormState] = useState({
    author: "",
    game_ref: "",
    note: "",
  });
  const { note } = formState;

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
    /*  for (const field in formState) {
      if (!formState[field])
        return alert("please write something before you submit");
    } */

    try {
      const res = await fetch("http://localhost:3333/notes", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formState),
      });
      const { newNote, error } = await res.json();
      console.log(newNote);
      setNotes((prev) => [newNote, ...prev]);
      setFormState({
        author: "",
        game_ref: "",
        note: "",
      });
      setError(error);
    } catch (error) {
      setError(error);
    }
  };

  if (loading) return <Loading />;
  if (error) console.log(error);

  return (
    <Card className="note-card">
      <Row>
        <Col>
          <Button type="submit" variant="light" onClick={onSubmit} block>
            Save Game without Note
          </Button>
        </Col>
        <Col>
          <Button
            variant="light"
            onClick={() => setOpen(!open)}
            aria-controls="collapse-note"
            aria-expanded={open}
            block
          >
            Save your notes on {game.title}
          </Button>
          <Collapse in={open}>
            <div id="collapse-note">
              <Form onSubmit={onSubmit}>
                <Form.Control
                  type="textarea"
                  name="note"
                  value={note}
                  placeholder="write a note..."
                  rows="5"
                  onChange={onChange}
                ></Form.Control>
              </Form>
              <br />
              <Button type="submit" onClick={onSubmit} variant="light" block>
                Post
              </Button>
            </div>
          </Collapse>
        </Col>
      </Row>
    </Card>
  );
};

export default PostNote;
