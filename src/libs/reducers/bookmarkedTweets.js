const initialState = {
  status: "idle",
  tweets: [],
};

const bookmarkedTweetsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "REQUEST_BOOKMARKED_TWEETS":
      return { ...state, status: "requested" };
    case "RECEIVE_BOOKMARKED_TWEETS":
      return { ...state, status: "received", tweets: action.data };
    case "ERROR_BOOKMARKED_TWEETS":
      return { ...state, status: "error" };
    default:
      return state;
  }
};

export default bookmarkedTweetsReducer;
