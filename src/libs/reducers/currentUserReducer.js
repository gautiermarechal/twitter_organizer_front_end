const initialState = {
  status: "notLoggedIn",
  currentUser: "",
};

const currentUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case "REQUEST_USER_LOGIN":
      return { ...state, status: "request" };
    case "USER_LOG_IN":
      return { ...state, currentUser: action.data, status: "loggedIn" };
    case "ERROR_USER_LOGIN":
      return { ...state, error: action.data, status: "error" };
    default:
      return state;
  }
};

export default currentUserReducer;
