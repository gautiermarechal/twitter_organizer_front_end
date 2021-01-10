const initialState = {
  status: "notLoggedIn",
  currentUser: {
    id: "",
    email: "",
    tweetsBookmarked: [],
  },
};

const currentUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case "REQUEST_USER_LOGIN":
      return { ...state, status: "request" };
    case "USER_LOG_IN":
      return { ...state, currentUser: action.data, status: "loggedIn" };
    case "ERROR_USER_LOGIN":
      return { ...state, error: action.data, status: "error" };
    case "BOOKMARK_TWEET":
      console.log(state);
      return {
        ...state,
        currentUser: {
          ...state.currentUser,
          tweetsBookmarked: [
            ...state.currentUser.tweetsBookmarked,
            action.data,
          ],
        },
      };
    case "DELETE_BOOKMARK_TWEET":
      const index = state.currentUser.tweetsBookmarked.indexOf(action.data);
      state.currentUser.tweetsBookmarked.splice(index, 1);
      return {
        ...state,
        currentUser: {
          ...state.currentUser,
          tweetsBookmarked: state.currentUser.tweetsBookmarked,
        },
      };
    default:
      return state;
  }
};

export default currentUserReducer;
