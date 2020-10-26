import React from "react";
import styles from "./MyCategories.module.css";
import categories from "../assets/AllCategories";

const MyCategories = () => {
  return (
    <>
      <ul>
        {categories.map((category) => {
          return <li>{category.category}</li>;
        })}
      </ul>
    </>
  );
};

export default MyCategories;
