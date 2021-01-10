export const requestUserPage = () => ({ type: "REQUEST_USER_PAGE" });

export const receiveUserPage = (data) => ({
  type: "RECEIVE_USER_PAGE",
  data: data,
});

export const errorUserPage = () => ({ type: "ERROR_USER_PAGE" });
