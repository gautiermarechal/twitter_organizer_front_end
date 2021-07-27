const initialState = {
  status: "idle",
  categoriesResults: [],
  organizerUserResults: [],
  tweetOrganizedResults: [],
  twitterUserResults: [],
};

const searchResultsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "REQUEST_SEARCH_RESULTS":
      return {
        ...state,
        status: "requested",
      };
    case "GET_SEARCH_RESULTS":
      return {
        ...state,
        status: "received",
        categoriesResults: action.categoriesResults,
        organizerUserResults: action.organizerUserResults,
        tweetOrganizedResults: action.tweetOrganizedResults,
        twitterUserResults: action.twitterUserResults,
      };
    case "ERROR_SEARCH_RESULTS":
      return {
        ...state,
        status: "error",
      };
    default:
      return state;
  }
};

export default searchResultsReducer;
