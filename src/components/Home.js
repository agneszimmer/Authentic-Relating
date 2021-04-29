import "../App.css";
import React from "react";
import { useHistory } from "react-router-dom";

const Home = ({ header, img }) => {
  let history = useHistory();

  return (
    <div className="container fluid">
      <div id="overlay">
        <div className="home">
          <h1>Authentic Revolution </h1>
        </div>
        <div className="home">
          <h3>
            Skip the small talk and dive into meaningful human connection.
          </h3>
        </div>
        <div className="home">
          <h6>
            Challenge our social patterns . Explore new ways of being with one
            another . Co-create meaningful interactions{" "}
          </h6>
          <h6> Remember our fundamental similarity: BEING HUMAN</h6>
        </div>
        <br></br>
        <button onClick={() => {
          history.push("/contact");
        }}
        >
          CONTACT US
        </button>
      </div>
    </div>
  );
};

export default Home;
