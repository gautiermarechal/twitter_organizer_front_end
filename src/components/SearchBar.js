import React from "react";
import styles from "./SearchBar.module.css";
import Form from "react-bootstrap/Form";

function SearchBar() {
  return (
    <>
      <Form className={styles.searchBar}>
        <Form.Control
          type="text"
          placeholder="Search"
          style={{ borderRadius: "30px", height: "50px" }}
        />
      </Form>
    </>
  );
}

export default SearchBar;
