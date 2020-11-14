import React from "react";

export const CurrentUserContext = React.createContext(null);

export const CurrentUserContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = React.useState({});
  const [userIsLoggedIn, setUserIsLoggedIn] = React.useState(false);

  const handleLogInSession = () => {
    setUserIsLoggedIn(true);
  };

  const handleCurrentUser = (userObj) => {
    setCurrentUser(userObj);
  };

  return (
    <CurrentUserContext.Provider
      value={{
        userIsLoggedIn,
        handleLogInSession,
        handleCurrentUser,
      }}
    >
      {children}
    </CurrentUserContext.Provider>
  );
};
