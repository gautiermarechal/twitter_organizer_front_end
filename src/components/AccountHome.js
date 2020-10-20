import React from "react";
import styles from "./AccountHome.module.css";
import MyCategorizedTweets from "./MyCategorizedTweets";

const AccountHome = () => {
  return (
    <>
      <div className={styles.mainContainer}>
        <ol className={styles.mainBreadcrumb}>
          <li>
            <h2>My Categorized Tweets</h2>
          </li>
          <li>
            <h2>My categories</h2>
          </li>
        </ol>
        <MyCategorizedTweets />
      </div>
    </>
  );
};

export default AccountHome;
