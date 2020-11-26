const initialState = {
  bookmarked: [],
};

const categorizedTweetsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "RECEIVE_TWEETS":
      return { ...state, bookmarked: action.data };
    default:
      return state;
  }
};

export default categorizedTweetsReducer;
