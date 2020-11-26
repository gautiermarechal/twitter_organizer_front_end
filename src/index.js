import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import tweetsReducer from "./libs/reducers/tweetsReducer";
import currentUserReducer from "./libs/reducers/currentUserReducer";
import extendedTweetReducer from "./libs/reducers/extendedTweetReducer";
import categorizedTweetsReducer from "./libs/reducers/categorizedTweetsReducer";

const reducer = combineReducers({
  tweets: tweetsReducer,
  currentUser: currentUserReducer,
  extendedTweet: extendedTweetReducer,
  categorizedTweets: categorizedTweetsReducer,
});

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
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
