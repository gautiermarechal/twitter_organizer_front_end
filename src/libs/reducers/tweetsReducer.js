const initialState = {
  currentCategory: "",
  tweetsByCategory: [],
  extendedTweet: {},
};

const tweetsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "RECEIVE_TWEETS_BY_CATEGORY":
      return {
        ...state,
        tweetsByCategory: action.data,
      };
    case "GET_EXTENDED_TWEET":
      return {
        ...state,
        extendedTweet: action.data,
      };
    case "SET_CURRENT_CATEGORY":
      return {
        ...state,
        currentCategory: action.data,
      };
    default:
      return state;
  }
};

export default tweetsReducer;
