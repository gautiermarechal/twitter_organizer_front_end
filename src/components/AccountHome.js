import React, { useEffect, useState } from "react";
import styles from "./AccountHome.module.css";
import MyCategorizedTweets from "./MyCategorizedTweets";
import MyCategories from "./MyCategories";
import api from "../api/index";

const AccountHome = () => {
  const [section, setSection] = useState("tweet-section");
  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    let user = {};
    const get = async () => {
      user = await api.getUserByEmail(localStorage.getItem("useremail"));
      setCurrentUser(user.data[0]);
    };

    get();
  }, []);

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
          <MyCategorizedTweets currentUser={currentUser} />
        ) : (
          <MyCategories />
        )}
      </div>
    </>
  );
};

export default AccountHome;
