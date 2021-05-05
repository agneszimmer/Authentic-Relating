import "../css/Home.css";
import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="homecontainer fluid">
      <div id="home-overlay">
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
        <Link to="/contact">
          <button type="button">contact</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
