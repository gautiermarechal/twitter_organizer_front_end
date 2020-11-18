const initialState = {
  status: "notLoggedIn",
  currentUser: "",
};

const currentUserReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default currentUserReducer;
