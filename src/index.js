import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import tweetsReducer from "./libs/reducers/tweetsReducer";
import currentUserReducer from "./libs/reducers/currentUserReducer";
import extendedTweetReducer from "./libs/reducers/extendedTweetReducer";
import categorizedTweetsReducer from "./libs/reducers/categorizedTweetsReducer";
import bookmarkedTweetsReducer from "./libs/reducers/bookmarkedTweets";
import userPageReducer from "./libs/reducers/userPageReducer";
import thunk from "redux-thunk";
import categoriesReducer from "./libs/reducers/categoriesReducer";
import searchResultsReducer from "./libs/reducers/searchResultsReducer";

const reducer = combineReducers({
  tweets: tweetsReducer,
  currentUser: currentUserReducer,
  extendedTweet: extendedTweetReducer,
  categorizedTweets: categorizedTweetsReducer,
  bookmarkedTweets: bookmarkedTweetsReducer,
  userPage: userPageReducer,
  categories: categoriesReducer,
  searchResults: searchResultsReducer,
});

const store = createStore(
  reducer,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
