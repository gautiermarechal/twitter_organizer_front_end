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
import MyCategorizedTweets from "./components/MyCategorizedTweets";
import MyCategories from "./components/MyCategories";
import TweetsBookmarked from "./components/TweetsBookmarked";
import ProfilePage from "./components/ProfilePage";
import GlobalStyles from "./components/GlobalStyles";
//---------------------------------------------

function App() {
  useFetchCurrentUser();
  return (
    <div className="App">
      <GlobalStyles />
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
        <Route path="/account/my-categorized-tweets">
          <MyCategorizedTweets />
        </Route>
        <Route path="/account/authors-followed">
          <MyCategorizedTweets />
        </Route>
        <Route path="/account/my-categories">
          <MyCategories />
        </Route>
        <Route path="/account/tweets-bookmarked">
          <TweetsBookmarked />
        </Route>
        <Route path="/category/:categoryId">
          <CategoryPage />
        </Route>
        <Route path="/user/:id">
          <ProfilePage />
        </Route>
      </Router>
    </div>
  );
}

export default App;
