const initialState = {
  currentCategory: "",
  followed: null,
  tweetsByCategory: { status: "idle", data: [] },
  extendedTweet: {
    status: "idle",
    id: "",
    data: {},
  },
};

const tweetsReducer = (state = initialState, action) => {
  switch (action.type) {
    //ALL TWEETS BY CATEGORY REDUCERS
    case "REQUEST_TWEETS_BY_CATEGORY":
      return {
        ...state,
        tweetsByCategory: { ...this, status: "requested" },
      };
    case "RECEIVE_TWEETS_BY_CATEGORY":
      return {
        ...state,
        tweetsByCategory: { ...this, status: "received", data: action.data },
      };
    case "ERROR_TWEETS_BY_CATEGORY":
      return {
        ...state,
        tweetsByCategory: { ...this, status: "error" },
      };
    case "SET_CURRENT_CATEGORY":
      return {
        ...state,
        currentCategory: action.data,
      };
    case "TOGGLE_FOLLOW_CURENT_CATEGORY":
      return {
        ...state,
        followed: action.data,
      };
    default:
      return state;
  }
};

export default tweetsReducer;
