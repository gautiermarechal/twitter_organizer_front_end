import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";

//CONTEXT IMPORTS
import { TweetContextProvider } from "./libs/tweetContext";

//COMPONENTS IMPORTS---------------------------
import NavigationBar from "./components/NavigationBar";
import HomePage from "./components/HomePage";
import CategoryPage from "./components/CategoryPage";
import ExtendedTweet from "./components/ExtendedTweet";
import SignUp from "./components/SignUp";
import { SignUpSuccessful } from "./components/SignUp";
import Login from "./components/Login";
import AccountHome from "./components/AccountHome";
//---------------------------------------------

function App() {
  return (
    <TweetContextProvider>
      <div className="App">
        <Router>
          <NavigationBar />
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/:categoryId">
            <CategoryPage />
          </Route>
          <Route path="/extended">
            <ExtendedTweet />
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
    </TweetContextProvider>
  );
}

export default App;
