import React from "react";
import "./App.css";
import Header from "./components/Header";
import Login from "./components/Login";
import Home from "./components/Home";
import DetailPage from "./components/Detail";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            {<Home />}
          </Route>
          <Route path="/detail/:id">{<DetailPage />}</Route>
          <Route exact path="/login">
            {<Login />}
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
