import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./containers/Home";
import Create from "./containers/Create";
class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route path="/" exact component={Home}></Route>
          <Route path="/create" component={Create}></Route>
          <Route path="/edit/:id" component={Create}></Route>
        </div>
      </Router>
    );
  }
}

export default App;
