import React, { useState, useContext } from "react";
import { Redirect } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Loading from "../Loading";

const SaveGame = ({ game, setNotes }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const { user, error, setError } = useContext(AuthContext);


  const [formState, setFormState] = useState({
    author: "",
    game_ref: "",
    note: "",
  });

  const { note } = formState;
  const [formState, setFormState] = useState({ email: "", password: "" });

  //destructure this formState
  const { email, password } = formState;

  const onChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    /* for (const field in formState) {
      if (!formState[field]) return alert("${field} is empty");
    } */

    try {
      const res = await fetch("https://arg-api.herokuapp.com/users/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formState),
      });
      const { token, error } = await res.json();
      if (error) {
        setError(error);
        setTimeout(() => setError(""), 8000);
      }

      localStorage.setItem("token", token);
      setIsAuthenticated(true);
    } catch (error) {
      console.log(error);
    }
  };

  if (isAuthenticated) return <Redirect to="/" />;

  return (
    <Card className="note-card">
    {isAuthenticated ? (
    <>
      <Button variant="link" onClick={handleShow} className="nav-link">
        Save Game
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Save Game</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="login">
            
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
          </div>
        </Modal.Body>
        <Modal.Footer>
        <Button type="submit" onClick={onSubmit} variant="light" block>
            Save {game.title} to my Collection
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default SaveGame;
