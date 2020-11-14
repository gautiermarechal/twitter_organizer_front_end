import React from "react";

export const TweetContext = React.createContext();

export const TweetContextProvider = ({ children }) => {
  const [tweetContent, setTweetContent] = React.useState();

  const handleSetTweetContent = (tweetObj) => {
    setTweetContent(tweetObj);
  };

  return (
    <TweetContext.Provider
      value={{
        tweetContent,
        handleSetTweetContent,
      }}
    >
      {children}
    </TweetContext.Provider>
  );
};

export const useTweetContext = () => {
  return React.useContext(TweetContext);
};
