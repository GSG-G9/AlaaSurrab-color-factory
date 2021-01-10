// import React from "react";
import { Link } from "react-router-dom";

const Color = (props) => {
  // console.log(props);
  const {
    match: {
      params: { color },
    },
    colorObj,
  } = props;
  console.log({ color, colorObj });
  // console.log();
  if (!colorObj[color])
    return (
      <div style={{ height: "100vh" }}>
        <h1>{color} is not a color </h1>
        <Link to="/">
          <button>go back</button>
        </Link>
      </div>
    );
  return (
    <div style={{ backgroundColor: colorObj[color], height: "100vh" }}>
      <h1>is this {color}</h1>
      <h1>isn't it beautiful?</h1>
      <Link to="/">
        <button>go back</button>
      </Link>
    </div>
  );
};

export default Color;
