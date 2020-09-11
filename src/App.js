import React from "react";
import "./App.css";

import Header from "./components/header/header";
import { Route, Switch } from "react-router-dom";
import About from "./components/about/about";
import Home from "./components/home/home";
import Work from "./components/work/work";
import Writing from "./components/writing/writing";
import Contact from "./components/contact/contact";
import SideDrawer from "./components/sideDrawer/side-drawer";
import Info from "./components/info/info";
import Resume from "./components/resume/resume";
import First from "./pages/first/first";
import Second from "./pages/second/second";

class App extends React.Component {
  state = {
    hidden: false,
  };

  handleChange = () => {
    this.setState({ hidden: !this.state.hidden });
  };

  render() {
    return (
      <div className="App">
        <Header clicked={this.handleChange} />
        {this.state.hidden ? (
          <SideDrawer clicked={this.handleChange} hidden={this.state.hidden} />
        ) : null}
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/info" component={Info} />
          <Route path="/resume" component={Resume} />
          <Route path="/work" component={Work} />
          <Route path="/writing" component={Writing} />
          <Route path="/contact" component={Contact} />

          <Route path="/first_link" component={First} />
          <Route path="/second_link" component={Second} />
        </Switch>
      </div>
    );
  }
}

export default App;
