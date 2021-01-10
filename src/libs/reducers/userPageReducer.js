const initialState = {
  status: "idle",
  userData: {
    id: "",
    name: "",
    username: "",
    tweetsOrganized: [],
  },
};

const userPageReducer = (state = initialState, action) => {
  switch (action.type) {
    case "REQUEST_USER_PAGE":
      return { ...state, status: "requested" };
    case "RECEIVE_USER_PAGE":
      return { ...state, status: "received", userData: action.data };
    case "ERROR_USER_PAGE":
      return { ...state, status: "error" };
    default:
      return { ...state };
  }
};

export default userPageReducer;
