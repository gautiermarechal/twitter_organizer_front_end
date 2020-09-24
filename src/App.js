import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import { AppContext } from "./libs/contextLibs";

//COMPONENTS IMPORTS---------------------------
import NavigationBar from "./components/NavigationBar";
import HomePage from "./components/HomePage";
import BiologyPage from "./components/BiologyPage";
import ExtendedTweet from "./components/ExtendedTweet";
//---------------------------------------------

function App() {
  const [tweetContent, setTweetContent] = useState();
  return (
    <AppContext.Provider value={{ tweetContent, setTweetContent }}>
      <div className="App">
        <Router>
          <NavigationBar />
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/biology">
            <BiologyPage />
          </Route>
          <Route path="/extended">
            <ExtendedTweet tweetContent={tweetContent} />
          </Route>
        </Router>
      </div>
    </AppContext.Provider>
  );
}

export default App;
