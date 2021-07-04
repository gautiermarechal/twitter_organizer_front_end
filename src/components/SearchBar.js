import React, { useEffect, useState } from "react";
import styles from "./SearchBar.module.css";
import Form from "react-bootstrap/Form";

function SearchBar({ type }) {
  const onSearch = (query) => {};

  return (
    <>
      <Form className={styles.searchBar}>
        <Form.Control
          type="text"
          placeholder="Search"
          style={{ height: "50px" }}
          onChange={(e) => onSearch(e.target.value)}
        />
      </Form>
    </>
  );
}

export default SearchBar;
