import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

//COMPONENTS IMPORTS---------------------------
import NavigationBar from "./components/NavigationBar";
import HomePage from "./components/HomePage";
import BiologyPage from "./components/BiologyPage";
//---------------------------------------------

function App() {
  return (
    <div className="App">
      <Router>
        <NavigationBar />
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/biology">
          <BiologyPage />
        </Route>
      </Router>
    </div>
  );
}

export default App;
