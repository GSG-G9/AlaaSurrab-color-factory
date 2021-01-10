import React from "react";
import { Link } from "react-router-dom";

const Home = (props) => {
  console.log(props);
  const { colorObj } = props;
  return (
    <>
      <div>
        <h1>Welcome to the color factory </h1>
        <Link to="/new">add new color</Link>
      </div>
      <div>
        <h4>please select a color.</h4>
        <ul>
          {Object.keys(colorObj).map((color, i) => {
            return (
              <li key={i}>
                <Link to={`/color/${color}`}>{color}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default Home;
