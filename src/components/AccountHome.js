import React, { useState } from "react";
import styles from "./AccountHome.module.css";
import MyCategorizedTweets from "./MyCategorizedTweets";
import MyCategories from "./MyCategories";

const AccountHome = () => {
  const [section, setSection] = useState("tweet-section");

  const handleTweetSection = () => {
    if (section === "categories-section") {
      setSection("tweet-section");
    }
  };

  const handleCategoriesSection = () => {
    if (section === "tweet-section") {
      setSection("categories-section");
    }
  };

  return (
    <>
      <div className={styles.mainContainer}>
        <ol className={styles.mainBreadcrumb}>
          <li>
            <h2 onClick={handleTweetSection}>My Categorized Tweets</h2>
          </li>
          <li>
            <h2 onClick={handleCategoriesSection}>My categories</h2>
          </li>
        </ol>
        {section === "tweet-section" ? (
          <MyCategorizedTweets />
        ) : (
          <MyCategories />
        )}
      </div>
    </>
  );
};

export default AccountHome;
