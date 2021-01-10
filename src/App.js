import { Component } from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";

import Color from "./componant/color";
import Home from "./componant/Home";
import SelectColor from "./componant/selectColor";

class App extends Component {
  state = {
    colorObj: { red: "#fc0303", green: "#4efc03" },
  };

  addColor = (event) => {
    const name = event.target.parentNode.parentNode.children[0].value;
    const color = event.target.parentNode.parentNode.children[2].value;
    this.setState((prevState) => {
      const { colorObj } = prevState;
      colorObj[name] = color;
      return { colorObj };
    });
  };

  render() {
    const { colorObj } = this.state;
    return (
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Home colorObj={colorObj} />
          </Route>
          <Route
            exact
            path="/color/:color"
            render={(props) => <Color colorObj={colorObj} {...props} />}
          />
          <Route exact path="/new">
            <SelectColor addColor={this.addColor} />
          </Route>
        </Switch>
      </div>
    );
  }
}

export default App;
