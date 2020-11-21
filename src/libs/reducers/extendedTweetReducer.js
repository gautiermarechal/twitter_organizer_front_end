const initialState = {
  status: "idle",
  id: "",
  data: {},
};

const extendedTweetReducer = (state = initialState, action) => {
  switch (action.type) {
    //EXTENDED TWEET REDUCERS
    case "REQUEST_EXTENDED_TWEET":
      return {
        ...state,
        status: "requested",
      };
    case "GET_EXTENDED_TWEET":
      return {
        ...state,
        status: "received",
        data: action.data,
      };
    case "ERROR_EXTENDED_TWEET":
      return {
        ...state,
        status: "error",
      };
    case "GET_ID_EXTENDED_TWEET":
      return {
        ...state,
        id: action.id,
      };
    default:
      return state;
  }
};

export default extendedTweetReducer;
