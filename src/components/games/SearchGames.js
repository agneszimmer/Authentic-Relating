import "../../App.css";
import React from "react";
import circle from "../../pictures/circle.png";

const SearchGames = () => {
  return (
    <div>
      <img src={circle} width="50" height="50" alt="circle" align="left"></img>
      <h2>Please choose:</h2>
      <ul class="menu">
        <li>category</li>
        <li>occasion</li>
        <li>players</li>
        <li>time</li>
        <li> </li>
      </ul>
      <form>
        <ul class="menu">
          <li>
            <select name="category" class="fixedWidth">
              <option>Awareness Games</option>
              <option>Meditations</option>
              <option>Fun and Improv Games</option>
              <option>Group Bonding Games</option>
              <option>Self-Awareness Games</option>
              <option>Self-Expression Games</option>
              <option>Perspective-Shifting Games</option>
              <option>Feedback Games</option>
              <option>Curiosity Games</option>
              <option>Deep Empathy Games</option>
              <option>Movement Games</option>
              <option>Touch Games</option>
              <option>Edge Games</option>
              <option>Oneness Games</option>
              <option>Resourcing Games</option>
              <option>Appreciation Games</option>
            </select>
          </li>
          <li>
            <select name="occasion" class="fixedWidth">
              <option>First date</option>
              <option>Relationship</option>
              <option>Work (or work retreat)</option>
              <option>Edgy Work Games</option>
              <option>With family/kids</option>
              <option>With friends</option>
              <option>With strangers</option>
              <option>For conflict</option>
              <option>All</option>
            </select>
          </li>
          <li>
            <select name="players" class="fixedWidth">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
              <option>6</option>
              <option>7</option>
              <option>8</option>
              <option>9</option>
              <option>10</option>
            </select>
          </li>
          <li>
            <select name="time" class="fixedWidth">
              <option>10 minutes</option>
              <option>20 minutes</option>
              <option>30 minutes</option>
              <option>40 minutes</option>
              <option>50 minutes</option>
              <option>1 hour</option>
              <option>1 hour 10 minutes</option>
              <option>1 hour 20 minutes</option>
              <option>1 hour 30 minutes</option>
            </select>
          </li>
          <li>
            <input type="submit" value="find"></input>
          </li>
        </ul>
      </form>
    </div>
  );
};

export default SearchGames;
