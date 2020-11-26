import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";

//COMPONENTS IMPORTS---------------------------
import NavigationBar from "./components/NavigationBar";
import HomePage from "./components/HomePage";
import CategoryPage from "./components/CategoryPage";
import ExtendedTweet from "./components/ExtendedTweet";
import SignUp from "./components/SignUp";
import { SignUpSuccessful } from "./components/SignUp";
import Login from "./components/Login";
import AccountHome from "./components/AccountHome";
import useFetchCurrentUser from "./libs/custom-hooks/useFetchCurrentUser";
//---------------------------------------------

function App() {
  useFetchCurrentUser();
  return (
    <div className="App">
      <Router>
        <NavigationBar />
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/extended/:id">
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
        <Route path="/category/:categoryId">
          <CategoryPage />
        </Route>
      </Router>
    </div>
  );
}

export default App;
