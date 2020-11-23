//Login actions
export const requestUserLogIn = () => ({
  type: "REQUEST_USER_LOGIN",
});

export const userLogIn = (data) => ({
  type: "USER_LOG_IN",
  data,
});

export const errorUserLogIn = (data) => ({
  type: "ERROR_USER_LOG_IN",
  data,
});
