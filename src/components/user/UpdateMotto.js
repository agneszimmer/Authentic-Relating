import "../../css/Games.css";
import React, { useState, useEffect, useContext } from "react";
import Loading from "../Loading.js";

import { Card, Button, Form, Collapse, Row, Col } from "react-bootstrap";

const UpdateMotto = ({ activeUser }) => {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  const [formState, setFormState] = useState({
    bio: "",
  });
  const { bio } = formState;

  const onChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    for (const field in formState) {
      if (!formState[field])
        return alert("please write something before you submit");
    }

    try {
      const res = await fetch(`http://localhost:3333/users/${activeUser._id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formState),
      });

      const data = await res.json();

      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  if (loading) return <Loading />;
  if (error) console.log(error);

  return (
    <>
      <Row style={{ marginTop: "2rem" }}>
        <Col style={{ textAlign: "center" }}>
          <h4>{activeUser.bio}</h4>
        </Col>

        <Col xs={12} sm={4} md={3} lg={2}>
          <Button
            variant="outline-dark"
            block
            onClick={() => setOpen(!open)}
            aria-controls="collapse-comment"
            aria-expanded={open}
          >
            update your bio
          </Button>
        </Col>
      </Row>
      <Row>
        <Collapse in={open}>
          <div id="collapse-comment">
            <Row className="justify-content-end">
              <Col>
                <Form onSubmit={onSubmit}>
                  <Form.Control
                    type="textarea"
                    name="bio"
                    value={bio}
                    placeholder="new bio  ..."
                    rows="5"
                    onChange={onChange}
                  ></Form.Control>
                </Form>
              </Col>
              <Col xs={12} sm={4} md={3} lg={2}>
                <Button variant="outline-dark" type="submit" onClick={onSubmit}>
                  Post
                </Button>
              </Col>
            </Row>
          </div>
        </Collapse>
      </Row>
    </>
  );
};

export default UpdateMotto;
