const initialState = {
  status: "notLoggedIn",
  currentUser: {
    id: "",
    email: "",
    tweetsBookmarked: [],
    authorsFollowed: [],
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
    case "FOLLOW_AUTHOR":
      return {
        ...state,
        currentUser: {
          ...state.currentUser,
          tweetsBookmarked: [...state.currentUser.tweetsBookmarked],
          authorsFollowed: [...state.currentUser.authorsFollowed, action.data],
        },
      };
    case "UNFOLLOW_AUTHOR":
      const indexAuthor = state.currentUser.authorsFollowed.indexOf(
        action.data
      );
      state.currentUser.authorsFollowed.splice(indexAuthor, 1);
      return {
        ...state,
        currentUser: {
          ...state.currentUser,
          tweetsBookmarked: [...state.currentUser.tweetsBookmarked],
          authorsFollowed: state.currentUser.authorsFollowed,
        },
      };
    default:
      return state;
  }
};

export default currentUserReducer;
