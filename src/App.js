import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import { AppContext } from "./libs/contextLibs";

//COMPONENTS IMPORTS---------------------------
import NavigationBar from "./components/NavigationBar";
import HomePage from "./components/HomePage";
import BiologyPage from "./components/BiologyPage";
import ExtendedTweet from "./components/ExtendedTweet";
import SignUp from "./components/SignUp";
import { SignUpSuccessful } from "./components/SignUp";
import Login from "./components/Login";
import AccountHome from "./components/AccountHome";
//---------------------------------------------

function App() {
  const [tweetContent, setTweetContent] = useState();
  const [userIsLoggedIn, setUserIsLoggedIn] = useState();

  const handleLogInSession = () => {
    setUserIsLoggedIn(true);
  };
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
          <Route path="/sign-up">
            <SignUp />
          </Route>
          <Route path="/sign-up-successfull">
            <SignUpSuccessful />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/account">
            <AccountHome />
          </Route>
        </Router>
      </div>
    </AppContext.Provider>
  );
}

export default App;
