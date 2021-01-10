import { Link } from "react-router-dom";

const SelectColor = (props) => {
  return (
    <div>
      <input type="text" placeholder="write the color name" />
      <label>select color</label>
      <input type="color" id="head" name="head" />
      <Link to="/">
        <button onClick={props.addColor}>add</button>
      </Link>
    </div>
  );
};

export default SelectColor;
